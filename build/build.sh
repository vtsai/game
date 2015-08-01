#!/bin/bash
echo 'building...'

mkdir -p ./dist && \
lessc --clean-css='--keep-line-breaks' styles/app.less ./dist/app$npm_package_version.css && \

browserify src/index.js \
    -t [ babelify --modules common ] \
    -x babelify/polyfill -x superagent -x page --debug \
    | exorcist ./bundle2.js.map \
    > ./bundle.js && \
uglifyjs bundle.js \
    -c warnings=false -m --screw-ie8 \
    --source-map bundle.js.map --in-source-map bundle2.js.map \
    -o ./dist/bundle$npm_package_version.js && \
mv ./bundle.js.map ./dist && \
rm ./bundle2.js.map && \
rm ./bundle.js && \

browserify -r superagent -r page -r babelify/polyfill \
    -o ./dist/vendortemp.js && \
uglifyjs ./dist/vendortemp.js \
    -c warnings=false -m --screw-ie8 \
    -o ./dist/vendortemp.js && \
cat ./dist/vendortemp.js \
    ./node_modules/moment/min/moment.min.js \
    ./node_modules/velocity-animate/velocity.min.js \
    > ./dist/vendor$npm_package_version.js && \
rm ./dist/vendortemp.js && \

cp ./node_modules/font-awesome/css/font-awesome.min.css ./dist && \
cp -r ./node_modules/font-awesome/fonts ./dist && \
cp -r ./fonts ./dist && \
cp index.html ./dist && \
sed -i'.bak' 's/{{version}}/'$npm_package_version'/g' './dist/index.html' && \
rm ./dist/index.html.bak && \
STATUS=$?

echo 'done in '$SECONDS' [sec]'
exit $STATUS
