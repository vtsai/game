#!/bin/bash
echo 'testing...'

eslint ./src
STATUS=$?

echo 'done in '$SECONDS' [sec]'
exit $STATUS
