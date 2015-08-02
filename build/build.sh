#!/bin/bash
echo 'building...'

mkdir -p ./public && \
lessc --clean-css='--keep-line-breaks' styles/app.less ./public/app$npm_package_version.css && \

browserify src/index.js \
    -t [ babelify --modules common ] \
    -x babelify/polyfill -x superagent -x page --debug \
    | exorcist ./bundle2.js.map \
    > ./bundle.js && \
uglifyjs bundle.js \
    -c warnings=false -m --screw-ie8 \
    --source-map bundle.js.map --in-source-map bundle2.js.map \
    -o ./public/bundle$npm_package_version.js && \
mv ./bundle.js.map ./public && \
rm ./bundle2.js.map && \
rm ./bundle.js && \

browserify -r superagent -r page -r babelify/polyfill \
    -o ./public/vendortemp.js && \
uglifyjs ./public/vendortemp.js \
    -c warnings=false -m --screw-ie8 \
    -o ./public/vendortemp.js && \
cat ./public/vendortemp.js \
    ./node_modules/moment/min/moment.min.js \
    ./node_modules/velocity-animate/velocity.min.js \
    > ./public/vendor$npm_package_version.js && \
rm ./public/vendortemp.js && \

cp ./node_modules/font-awesome/css/font-awesome.min.css ./public && \
cp -r ./node_modules/font-awesome/fonts ./public && \
cp -r ./images ./public && \
cp -r ./fonts ./public && \
cp index.html ./public && \
cp server.js ./public && \
sed -i'.bak' 's/{{version}}/'$npm_package_version'/g' './public/index.html' && \
rm ./public/index.html.bak && \
STATUS=$?

echo 'done in '$SECONDS' [sec]'
exit $STATUS
