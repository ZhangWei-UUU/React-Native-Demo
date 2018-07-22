# React-Native-Demo

* 初始化项目
* Eslint代码样式的优化  
* UI界面的依赖
* Android Studio 虚拟机的使用
* Android 签名APK打包使用

## 初始化项目

```bash

npm install -g create-react-native-app  //安装脚手架工具
brew install node  //安装nodeJS[本机若有可自动忽略]
brew install watchman //安装watchman 实时监控代码
npm install -g react-native-cli //安装rn终端命令行脚本
```

创建一个空白项目

```bash
react-native init AwesomeProject
```

## Eslint代码样式的优化

```bash
eslint --init
```

1. 第一步回答样式风格问题

回答:y

最后生成.eslintrc.js
2. 第二步选择样式指导

在Google Airbnb Standard中三选一即可


## UI界面的依赖

在UI组件选择上面，本案例使用的蚂蚁金服的[Ant Design Mobile RN](https://rn.mobile.ant.design/index-cn).

安装依赖
    
```bash
npm install antd-mobile-rn --save
```

添加以下内容到`.babelrc`, 让babel支持样式依赖

```json
{
  "presets": ["react-native"],
  "plugins": [
    ["import", { "libraryName": "antd-mobile-rn" }] 
  ]
}
```
## Android Studio 虚拟机的使用
[点击](https://www.yuque.com/quezizhang/fntli1/pq5gom)

## Android 签名APK打包使用
[点击](https://www.yuque.com/quezizhang/fntli1/fyp7ei)


