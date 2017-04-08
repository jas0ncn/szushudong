const env = 'development' // 'development' or 'production'
const api = {
  list: {
    method: 'GET',
    url: '/blog/list'
  },
  login: {
    method: 'POST',
    url: '/user/wxlogin'
  },
  userinfo: {
    method: 'GET',
    url: '/user/info'
  }
}

if (env === 'production') {
  Object.keys(api).forEach(v => {
    api[v].url = 'https://sd.iszu.cn' + api[v].url
  })
} else {
  Object.keys(api).forEach(v => {
    api[v].url = 'http://localhost:3020' + api[v].url
  })
}

module.exports = {
  env,
  api
}
