const env = 'production' // 'development' or 'production'
const hosts = {
  development: 'http://localhost:3020',
  production: 'https://sd.iszu.cn'
}
const api = {
  /**
   * login api
   * need header:
   * {
   *   'x-wechat-code': code,
   *   'x-wechat-encrypted': encryptedData,
   *   'x-wechat-iv': iv
   * }
   */
  login: {
    method: 'POST',
    url: '/user/wxlogin'
  },
  userinfo: {
    method: 'GET',
    url: '/user/info'
  },
  list: {
    method: 'GET',
    url: '/blog/list'
  },
  like: {
    method: 'POST',
    url: '/blog/like'
  }
}

// add host name
Object.keys(api).forEach(v => {
  api[v].url = hosts[env] + api[v].url
})

module.exports = {
  env,
  api
}
