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

## Chrome Debug的监控

尽管我们已经拥有开启虚拟机的方法，但是虚拟机作为开发监控视图，仅仅只能代替浏览器视图部分。对于开发时debug和对于前后台交互方面，虚拟机并不能做任何事情，这方面的工作仍旧需要依赖于Chrome 开发者工具。

```
http://localhost:8081/debugger-ui/
```

在Chrome中打开上面的地址后，通过F12就可以如同web开发一样进行app debug调试。
## React Navigation 使用

在浏览器中，当用户点击一个a link的时候，URL就会被Push到浏览器的history stack中。 当用户再次点击浏览器Back按钮时，history stack的顶部就会pop出这个url,表面是打开了一个新页面，实际这个页面是你之前已经访问过的页面。 而在原生的React Native中则不存在浏览器环境中的这种全局history stack概念，这就是React Navigation 存在的价值。

React Navigation 它的机制在于实现一个APP中不同屏幕之间和管理不同导航历史之间进行无缝衔接。 

对于React Navigation， 它的核心函数叫做`createStackNavigator`。 该函数会返回一个React 组件，在形式上它是一个配置对象形式。由于App的导航往往是一个app的核心，所以通常我们会把`createStackNavigator`函数在根文件-App.js中进行引入。

在对象配置方面，如下：
```js
{
    Home:{
        screen:HomeScreen
    },
    List:{
        screen:ListScreen
    },
}
```

在默认情况下， 在APP的顶部位置会出现一个头部导航条。

本教程只是简单演示，screen属性之外的option选项设置请参加[教程](https://reactnavigation.org/docs/en/stack-navigator.html)

在页面的跳转方面，在加入`react-navigation`的项目中，每一个组件的props属性中都会包含一个`navigation`属性。
通过该属性下的三个方法可以完成页面跳转：

```js
1. navigation.push("xxx");
2. navigation.navigate("xxx");
3. navigation.goBack();
```

### 前端不同页面之间的传参

在web开发中，前端页面在跳转时参数的传递是非常常见的一种操作，一般常见额方式有两种，一种是写在request中，另一种则是写在url中。
而在`React Navigation`中，我们则使用，`navigation`对象其在调用`push`和`navigate`方法时， 其第二个参数就是用于参数传递的对象。

```js
navigation.navigate("xxx",{id:123,name:"zhangwei"});
```

而对于接收参数的页面只需使用：
```js
 navigation.getParam('id', 'name');
```
即可。

### 头部导航的样式设置

对于不同的页面级组件，在其组件中添加`static navigationOptions`即可。对于 navigationOptions而言，它既可以是一个对象形式也可以是一个函数形式（return 的结果还是对象）；

```js
 static navigationOptions = {
    title: 'Home',
  };
```

在上面这段代码中，我们就可以给头部设置一个名称`Home`,在默认情况iOS在中间居中，而在android中侧靠左。

结合上面所述，`navigationOptions`还可以是一个函数形式，那么什么时候使用函数形式，那么就是在动态页面时，我们需要参数渲染页面title的时候，这个时候就需要：

```js
 static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('otherParam', 'A Nested Details Screen'),
    };
  };
```

既然title是由`getParam`进行获取，那么title也可以通过`setParams`进行修改：

```js
<Button
    title="Update the title"
    onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}
  />
```
[更多有关Header Title的详情](https://reactnavigation.org/docs/en/stack-navigator.html#navigationoptions-used-by-stacknavigator)