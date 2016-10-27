#### 通过cordova打包html为应用
1. 安装cordova
  ```
官网地址:http://cordova.apache.org/
按照官网的提示进行安装即可
  ```
2. 创建项目
  ```bash
# 进入需要创建项目的目录
cordova create app-demo
cd app-demo # 进入项目目录
cordova platform add ios # 为项目添加运行的平台ios/android/windows等等
cordova build ios # 对指定平台的代码进行编译

  ```
3. 运行项目
  ```
在项目文件夹内有一个platform文件夹,里面按照平台名字显示不同平台的项目代码,使用相关ide打开运行即可
  ```
4. 修改项目
  ```
修改项目根目录中的www文件夹下的静态资源代码,
修改后对相应的平台进行编译即可
cordova build ios # 对指定平台的代码进行编译
  ```

#### webpack进阶配置

通过配置实现webpack和express结合使用,修改后能自动重新生成文件[链接](https://segmentfault.com/a/1190000004505747)
