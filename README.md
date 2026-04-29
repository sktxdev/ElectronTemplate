# Angular Electron Basic Template

Change assetbuilder to the name of your application

# Unit tests and building
``` bash
npm test
```

Note, this has been changed to run headless with code coverage and exit after running.

If you want continuous running, i.e., watching for changes, fix the test
entry in package.json accordingly. i.e., remove --watch or set it to true

``` json
    "test": "ng test --browsers ChromeHeadless --code-coverage --watch=false",
    "electron": "electron .",
    "electron-trace": "electron --trace-warnings .",
    "electron-build": "ng build && electron .",
    "electron-packager-win32": "electron-packager ./ assetbuilder --platform-win32 --overwrite"
```

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help (i.e., diy mode)

``` bash
# mac only
npm install @esbuild/darwin-arm64
npm install @rollup/rollup-darwin-arm64

ng new my_angular_app
cd my_angular_app

# add app.js
# update package.json to add "main": "app.js" after name and version
# "name": "asset-builder",
# "version": "0.0.0",
# "main": "app.js"

npm install electron
npm install -g electron-packager
```

### Versions

``` bash
 % node --version
v20.9.0
 % npm --version
10.1.0
 % ng version
ng version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/


Angular CLI       : 21.2.9
Angular           : 21.2.10
Node.js           : 24.15.0
Package Manager   : npm 11.12.1
Operating System  : darwin arm64

┌───────────────────────────────────┬───────────────────┬───────────────────┐
│ Package                           │ Installed Version │ Requested Version │
├───────────────────────────────────┼───────────────────┼───────────────────┤
│ @angular-devkit/build-angular     │ 21.2.9            │ ^21.2.9           │
│ @angular/animations               │ 21.2.10           │ ^21.2.10          │
│ @angular/cli                      │ 21.2.9            │ ^21.2.9           │
│ @angular/common                   │ 21.2.10           │ ^21.2.10          │
│ @angular/compiler                 │ 21.2.10           │ ^21.2.10          │
│ @angular/compiler-cli             │ 21.2.10           │ ^21.2.10          │
│ @angular/core                     │ 21.2.10           │ ^21.2.10          │
│ @angular/forms                    │ 21.2.10           │ ^21.2.10          │
│ @angular/platform-browser         │ 21.2.10           │ ^21.2.10          │
│ @angular/platform-browser-dynamic │ 21.2.10           │ ^21.2.10          │
│ @angular/router                   │ 21.2.10           │ ^21.2.10          │
│ rxjs                              │ 7.8.2             │ ~7.8.0            │
│ typescript                        │ 5.9.3             │ ^5.9.3            │
│ zone.js                           │ 0.15.1            │ ^0.15.1           │
```

## Packaging
