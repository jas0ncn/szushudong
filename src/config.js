const disposeUrl = require('./utils/disposeUrl')

// ENV
const env = 'production' // 'development' or 'production'

// development and production host
const hosts = {
  development: 'http://localhost:3020',
  production: 'https://sd.iszu.cn'
}

// apis
const api = {
  user: {
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
    info: {
      method: 'GET',
      url: '/user/info'
    }
  },
  blog: {
    list: {
      method: 'GET',
      url: '/blog/list'
    },
    like: {
      method: 'POST',
      url: '/blog/like'
    },
    delete: {
      method: 'POST',
      url: '/blog/delete'
    },
    imageUpload: {
      method: 'POST',
      url: '/blog/image'
    },
    new: {
      method: 'POST',
      url: '/blog'
    }
  }
}

module.exports = {
  env,
  api: disposeUrl(api, hosts[env])
}
