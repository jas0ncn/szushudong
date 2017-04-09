# 深大的树洞 2.0

深大的树洞 2.0 开源仓库

本仓库依赖于 [Wepy](https://github.com/wepyjs/wepy) 框架，感谢 Wepy 作者的努力。

## 开发环境运行

```bash
# 全局安装 wepy
npm install wepy-cli -g

# 安装依赖
npm i

# 启动实时编译
wepy build --watch
```

## 开发使用说明

 1. 使用微信开发者工具新建项目，本地开发选择 `dist` 目录。
 2. 微信开发者工具 --> 项目 --> 关闭 ES6 转 ES5。
 3. 本地项目根目录运行 `wepy build --watch`，开启实时编译。

## 代码高亮

##### VS Code

在插件目录搜索安装 `vetur`，点击 VS Code 右下角的语言，选择 “.wpy” 的配置文件关联，然后选择 `Vue`，即可启动代码高亮。

##### Sublime Text

 1. 打开 `Sublime->Preferences->Browse Packages..` 进入用户包文件夹。
 2. 在此文件夹下打开 cmd，运行 `git clone git@github.com:vuejs/vue-syntax-highlight.git`，无 GIT 用户可以直接下载 [zip 包](https://github.com/vuejs/vue-syntax-highlight/archive/master.zip)解压至当前文件夹。
 3. 关闭 `.wpy` 文件重新打开即可高亮。

##### WebStorm

1. 打开 `Preferences`，搜索 `Plugins`，搜索 `Vue.js` 插件并安装。
2. 打开 `Preferences`，搜索 `File Types`，找到 `Vue.js Template`，在 `Registered Patterns` 添加 `*.wpy`，即可高亮。

## 其他问题

请查看 [Wepy 官方文档](https://wepyjs.github.io/wepy/#/)，或提 Issue。
