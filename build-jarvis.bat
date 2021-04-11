@echo off

set lib_name=%1

call  ng build %lib_name% --output-hashing=none --prod
call  cd "dist/apps/%lib_name%"
call  type runtime-es5.js polyfills-es5.js main-es5.js > "%lib_name%.js"

echo %lib_name% built successfully!
