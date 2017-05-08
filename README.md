# 深大的树洞 2.0

本仓库是深大的树洞微信小程序对应的开源仓库，旨在分享微信小程序的开发经验。

本仓库依赖于 [Wepy](https://github.com/wepyjs/wepy) 框架，感谢 Wepy 作者的努力。

同时，请注意本仓库的开源协议为 GPL，这意味着你拥有运行、复制、修改、发行和传播该软件的自由，但是你修改后的软件本身也受 GPL 约束，你必须开放源代码。

如果阅读源码对于程序的架构设计有问题，可以先看一下我写的[深大的树洞 2.0 开发记录](https://blog.ijason.cc/article/szu-shudong-2-development)，有对设计的细节进行详细的阐述。

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
 2. **【重要】**微信开发者工具 --> 项目 --> 关闭 ES6 转 ES5。
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

## 问题

对于小程序的 API 使用问题请查看[微信官方小程序文档](https://mp.weixin.qq.com/debug/wxadoc/dev/)和 [Wepy 官方文档](https://wepyjs.github.io/wepy/#/)。

如果是对于树洞本身的一些 BUGs 或问题，请提 [issue](https://github.com/jas0ncn/szushudong/issues)。

## 开源协议
查看 [LICENSE](https://github.com/jas0ncn/szushudong/blob/master/LICENSE)

Copyright (c) 2016-present, Junyi (Jason) Chen