# React Native Demo for Android 

## Preprate Virture Mobile in Android Studio
 
Tools > Android > AVD Manager

## Getting Started

Ruuning the following commands to create a project 

```bash
react-native --init projectname
```

then start project after confirmed Virture Mobile has been started.

```
react-native run-android
```

## ICON Setup

Open [Android Asset Studio](http://romannurik.github.io/AndroidAssetStudio/icons-launcher.html#foreground.type=image&foreground.space.trim=1&foreground.space.pad=0.25&foreColor=rgba(96%2C%20125%2C%20139%2C%200)&backColor=rgb(255%2C%20255%2C%20255)&crop=0&backgroundShape=square&effects=none&name=ic_launcher) to design your favour icon for app. After release icon zip package, you can get some impmap folder, in which you can see the icon pictures for different size mobile screen,then put these pictures into `/android/app/src/main/res` folder.

## Splash Page Setup

To many modern applications, Splash page has become a default page for app's first open, But in react-native projects, we need import [react-native-splash-screen](https://github.com/crazycodeboy/react-native-splash-screen).

It is similar with Icon Setup, fistly, we need to use [APE](https://apetools.webprofusion.com/app/#/tools/imagegorilla) tool to generate splash page pictures for different screen,then put these pictures into `/android/app/src/main/res` folder, in which create a empty folder called `layout` for putting splash page configuration called `launch_screen.xml`.

### Import Splash into JAVA

Import `org.devio.rn.splashscreen.SplashScreen` module into `/android/app/src/main/java/com/yourProjectName/MainActivity.java` and `/android/app/src/main/java/com/yourProjectName/MainApplication.java`,


[More Details](https://github.com/crazycodeboy/react-native-splash-screen)


## App Name Setup

## Generated Signed APK

Android requires that all applications be digitally signed with a certification before they can be installed. Enter into `/android/app` folder, then run the following commands:

```
keytool -genkey -v -keystore YOUR_APP_NAME.keystore -alias YOUR_APP_ALIAS -keyalg RSA -keysize 2048 -validity DAYS_VALUES
```

[More Details](https://facebook.github.io/react-native/docs/0.56/signed-apk-android)

## Build a apk and send to Android Device for test

Enter into `/android` folder, the run the following commands for building a app-release.apk:

```
./gradlew assembleRelease
```

## Only Android Components

### ViewPagerAndroid

### DrawerLayoutAndroid
这是一种Android系统独有的抽屉导航方式，在`renderNavigationView`属性中，我们可以导入导航组件，` drawerWidth`属性可以设置抽屉的宽度，`drawerPosition`属性设置抽屉的拉出位置，通常我们设置在左侧。


### ToolbarAndroid

## Only iOS Components

### DatePickerIOS

### MaskedViewIOS

### NavigatorIOS

### PickerIOS

### ProgressIOS

### SegmentedControlIOS

### SnapshotViewIOS

### TabBarIOS

### 
## Shared Components

###

## Put APK into Xiaomi Store

## React Native Elements使用

## 包依赖清洗

不同于web开发，在手机端开发时由于资源会实时打包成原生文件所以在删除某个依赖包的时候，不仅要从node_modules中进行删除，
还要对原生代码的import 和相关临时文件的缓存进行删除。步骤如下：

1. watchman watch-del-all
2. rm -rf node_modules
3. yarn
4. rm -rf /tmp/metro-bundler-cache-*
5. rm -rf /tmp/haste-map-react-native-packager-*

## 有关Icon的引入

在本案例中，我们使用的是[react-native-vector-icons](https://github.com/oblador/react-native-vector-icons);
以安卓为例，

打开`android/app/build.gradle`文件，将font打包文件引入打包文件中:

```gradle
project.ext.vectoricons = [
    iconFontNames: [ 'MaterialIcons.ttf', 'EvilIcons.ttf' ] // Name of the font files you want to copy
]
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

具体其他高级配置请查看其官方文档。