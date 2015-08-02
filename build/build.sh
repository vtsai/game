#!/bin/bash
echo 'building...'

mkdir -p ./app && \
lessc --clean-css='--keep-line-breaks' styles/app.less ./app/app$npm_package_version.css && \

browserify src/index.js \
    -t [ babelify --modules common ] \
    -x babelify/polyfill -x superagent -x page --debug \
    | exorcist ./bundle2.js.map \
    > ./bundle.js && \
uglifyjs bundle.js \
    -c warnings=false -m --screw-ie8 \
    --source-map bundle.js.map --in-source-map bundle2.js.map \
    -o ./app/bundle$npm_package_version.js && \
mv ./bundle.js.map ./app && \
rm ./bundle2.js.map && \
rm ./bundle.js && \

browserify -r superagent -r page -r babelify/polyfill \
    -o ./app/vendortemp.js && \
uglifyjs ./app/vendortemp.js \
    -c warnings=false -m --screw-ie8 \
    -o ./app/vendortemp.js && \
cat ./app/vendortemp.js \
    ./node_modules/moment/min/moment.min.js \
    ./node_modules/velocity-animate/velocity.min.js \
    > ./app/vendor$npm_package_version.js && \
rm ./app/vendortemp.js && \

cp ./node_modules/font-awesome/css/font-awesome.min.css ./app && \
cp -r ./node_modules/font-awesome/fonts ./app && \
cp -r ./images ./app && \
cp -r ./fonts ./app && \
cp index.html ./app && \
cp server.js ./app && \
sed -i'.bak' 's/{{version}}/'$npm_package_version'/g' './app/index.html' && \
rm ./app/index.html.bak && \
STATUS=$?

echo 'done in '$SECONDS' [sec]'
exit $STATUS
