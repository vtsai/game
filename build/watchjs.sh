#!/bin/bash
watchify src/index.js -t [ babelify --modules common ] \
    -x babelify/polyfill -x superagent -x page --debug \
    -o "./public/bundle${npm_package_version}.js"
#    -o 'npm run exorcist dist/bundle$npm_package_version.js && cp dist/bundle$npm_package_version.js dist/bundle.js.map && echo "updated"'
