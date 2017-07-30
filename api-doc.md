# 深大的树洞后端 API 接口文档

### 前言

文档中所给出的接口都是使用相对路径，你可以自己配置相对应的顶层路由。

返回的数据结构统一为：
```js
{
    "errcode": Number,   // 0 表示成功
    "errmsg": String,    // 详细错误信息
    "data": Any          // 具体的相应数据
}
```

### 用户登录

微信登录接口

#### 示例

```http
POST /user/wxlogin
```

#### 请求头

`x-wechat-code` : 微信登录的 code

`x-wechat-encrypted` : 微信登录后已加密的用户信息

`x-wechat-iv`: 解密向量

#### 请求体

空

#### 返回数据

```json
{"errcode":0,"errmsg":"","data":{"session":"2d4ee676e40f6b35caed9dfa61fad807"}}
```

#### 备注

请在前端将 session 保存进 Storage 里（这里储存为 `_session`），后续接口都需要进行用户登录态验证。

### 获取用户信息

返回用户信息和用户所发的树洞信息

#### 示例

```http
GET /user
```

#### 请求头

`x-wechat-session`: 登陆时颁发的 `session`

#### 请求体

`page`：可选，分页参数

#### 返回数据

```json
{"errcode":0,"errmsg":"","data":[{"id":22817,"openid":"ovZYI0YPO4dglo1WTQdUpL7b96Y1","content":"😆树洞在腾讯 TCF 前端大会露了个脸","images":["http://szustatic-10032122.image.myqcloud.com/image/ed2a93b4203626f301b8a59c683d3c2181849ddba8a3f65895265fe4735a7cfa"],"isAnonymous":0,"device":"iPhone 7","likes":38,"comments":16,"time":1498301007,"block":0,"isDelete":0,"location":"","latitude":"","longitude":""}]}
```

### 树洞列表

按页面参数返回树洞列表

#### 示例

```http
GET /blogs
```

#### 请求头

`x-wechat-session`: 登陆时颁发的 `session`

#### 请求体

`page`：可选，分页参数。不传默认第一页。

#### 返回数据

```json
{"errcode":0,"errmsg":"","data":[{"id":23270,"text":"【听荔电台点歌贴vol.03】点歌节目每周一晚更新♪(๑ᴖ◡ᴖ๑)♪\n点歌要求如下\n1.要点的歌的歌名和歌手的名字\n2.你要把这首歌送给谁\n3.你要对Ta说的话\n4.你要署名为什么\n我们将会做成广播节目，周一晚上在听荔公众号播出。\n\n请评论留言进行点歌，按照格式点歌，方便主播阅读和理解，感谢支持\n1.XXXX\n2.XXXX\n3.XXXX\n4.XXXX","images":["http://szushudongstatic-10032122.file.myqcloud.com/image/5343b89e582be4bf0b8784dc5dac09757efc4ea4f9583d7d3b70926f915f15b4"],"device":"iPhone7 Plus","time":"13 小时前","isFixed":true,"like":false,"likeNum":2,"commentNum":9,"location":{"locationName":"","latitude":"","longitude":""},"user":{"uid":2,"openid":"ovZYI0YPO4dglo1WTQdUpL7b96Y1","nickname":"致远","gender":1,"avatar":"http://wx.qlogo.cn/mmopen/vi_32/3EB7dFdNRKmWib9nRjcbiaiabzT1cMKgI4zIDn5Sic7Dn4QjEa4tic6JMMJuibicyNcVicbEibQic6r9g8AIHZEPL99ibPqaw/96","isAdmin":true,"isAuthor":false,"isVerified":true}}]}
```

### 获取单条树洞详细信息

#### 示例

```http
GET /blogs/:id
```

`id`：为树洞的 id。

#### 请求头

`x-wechat-session`: 登陆时颁发的 `session`

#### 请求体

空

#### 返回数据

```json
{"errcode":0,"errmsg":"","data":{"id":23270,"text":"【听荔电台点歌贴vol.03】点歌节目每周一晚更新♪(๑ᴖ◡ᴖ๑)♪\n点歌要求如下\n1.要点的歌的歌名和歌手的名字\n2.你要把这首歌送给谁\n3.你要对Ta说的话\n4.你要署名为什么\n我们将会做成广播节目，周一晚上在听荔公众号播出。\n\n请评论留言进行点歌，按照格式点歌，方便主播阅读和理解，感谢支持\n1.XXXX\n2.XXXX\n3.XXXX\n4.XXXX","images":["http://szushudongstatic-10032122.file.myqcloud.com/image/5343b89e582be4bf0b8784dc5dac09757efc4ea4f9583d7d3b70926f915f15b4"],"device":"iPhone7 Plus","time":"13 小时前","isFixed":true,"like":false,"likeNum":2,"commentNum":9,"location":{"locationName":"","latitude":"","longitude":""},"user":{"uid":2,"openid":"ovZYI0YPO4dglo1WTQdUpL7b96Y1","nickname":"致远","gender":1,"avatar":"http://wx.qlogo.cn/mmopen/vi_32/3EB7dFdNRKmWib9nRjcbiaiabzT1cMKgI4zIDn5Sic7Dn4QjEa4tic6JMMJuibicyNcVicbEibQic6r9g8AIHZEPL99ibPqaw/96","isAdmin":true,"isAuthor":false,"isVerified":true},"comments":[{"uid":4133,"cid":103577,"openid":"ovZYI0YPO4dglo1WTQdUpL7b96Y1","content":"1.祝你一路顺风. 吴奇隆 2.乔木阁922的贴膜girls 3.贱内们，过去的四年我们相处过，谈心过，有过矛盾也有过开心。变的是时光，不变的是记忆。我们即将各奔东西，祝你们一路顺风。4.爱你们的册册","avatar":"http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJeQVzYNLVuOk1ib8CfYAia4HqbOBe9wrkYianmyrNPlN5DeuypvBlPod1z1HYH5nibDoET3RV4AFmuYQ/0","nickname":"王册","isAnonymous":false,"time":"1 小时前","isAdmin":true,"isAuthor":false}]}}
```

### 点赞接口

#### 示例

```http
POST /blog/like
```

#### 请求头

`x-wechat-session`: 登陆时颁发的 `session`

#### 请求体

`bid`: 要点赞的树洞 id

#### 返回数据

```json
{"errcode":0,"errmsg":"","data":{}}
```

### 删除接口

#### 示例

```http
POST /blog/delete
```

#### 请求头

`x-wechat-session`: 登陆时颁发的 `session`

#### 请求体

`bid`: 要删除的树洞 id

#### 返回数据

```json
{"errcode":0,"errmsg":"","data":{}}
```

### 上传图片接口

#### 示例

```http
POST /blog/image
```

#### 请求头

`x-wechat-session`: 登陆时颁发的 `session`

#### 返回数据

```json
{"errcode":0,"errmsg":"","data":{"url":""}}
```

### 发送新树洞

#### 示例

```http
POST /blogs
```

#### 请求头

`x-wechat-session`: 登陆时颁发的 `session`

#### 请求体

`content`: 树洞内容
`device`: 手机型号
`images`: 图片 url 数组
`isAnonymous`: 是否匿名
`latitude`: 纬度
`longitude`: 经度
`location`: 地理位置

#### 返回数据

```json
{"errcode":0,"errmsg":"","data":{}}
```

### 发送评论

#### 示例

```http
POST /comments
```

#### 请求头

`x-wechat-session`: 登陆时颁发的 `session`

#### 请求体

`bid`: 树洞 id
`content`: 评论内容
`isAnonymous`: 是否匿名
`replyTo`: 回复谁

#### 返回数据

```json
{"errcode":0,"errmsg":"","data":{}}
```

### 发送评论

#### 示例

```http
DELETE /comments/:id
```

`id`: 要删除的树洞 id

#### 请求头

`x-wechat-session`: 登陆时颁发的 `session`

#### 请求体

空

#### 返回数据

```json
{"errcode":0,"errmsg":"","data":{}}
```

### 获取通知数

#### 示例

```http
GET /notifications
```

#### 请求头

`x-wechat-session`: 登陆时颁发的 `session`

#### 请求体

空

#### 返回数据

```json
{"errcode":0,"errmsg":"","data":{"unreadMessagesCount":1}}
```

### 获取详细通知

#### 示例

```http
GET /notifications/messages
```

#### 请求头

`x-wechat-session`: 登陆时颁发的 `session`

#### 请求体

`page`: 分页参数

#### 返回数据

```json
{"errcode":0,"errmsg":"","data":{"unreadMessages":[{"nid":82685,"cid":103693,"bid":23377,"from":"sdadsa-E","to":"ovZYI0YPO4dglo1WTQdUpL7b96Y1","content":"回复 Jason：好！谢谢！","isUnread":true,"time":"3 分钟前","user":{"uid":4780,"openid":"ovZYI0Yqo9lPpweeFmRg9yP2th-E","nickname":"ddd","gender":2,"avatar":"http://szushudongstatic-10032122.cos.myqcloud.com/svg/avatar.svg"}}],"unreadMessagesCount":20}}
```

### 标记信息为已读

#### 示例

```http
PUT /notifications/:id
```

`id`: 要标记为已读的消息 id

#### 请求头

`x-wechat-session`: 登陆时颁发的 `session`

#### 请求体

空

#### 返回数据

```json
{"errcode":0,"errmsg":"","data":1}
```
