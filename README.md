## Commands

### npm start

Starts the development server for you to preview your weex page on browser.
You can also scan the QR code using weex playground to preview weex page on native.

### npm run dev

Open the code compilation task in watch mode.

### npm run serve

开启web调试服务

### npm run ios(真机运行)

(Mac only, requires Xcode)
Starts the development server and loads your app in an iOS simulator.

### npm run android(真机运行)

(Requires Android build tools)
Starts the development server and loads your app on a connected Android device or emulator.

### npm run pack:ios

(Mac only, requires Xcode)
Packaging ios project into ipa package.

### npm run pack:android

(Requires Android build tools)
Packaging android project into apk package.

### npm run pack:web

Packaging html5 project into `web/build` folder.

### npm run test

Starts the test runner.


###问题汇总

* iconfont加载，web端需要在根组建（index.vue）中加载资源，在使用图标字体的时候使用固定的unicode码。真机（android）依然无法加载图标
