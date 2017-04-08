import wepy from 'wepy'
import store from '../store'
import { api } from '../config'

export default {
  getUserInfo () {
    return new Promise((resolve, reject) => {
      const cache = store.state.userinfo
      if (cache) {
        resolve(cache)
      } else {
        wepy.login().then((r) => {
          wepy.getUserInfo().then((res) => {
            store.mutate(state => {
              state.userinfo = res.userInfo
              return state
            })
            res.code = r.code
            resolve(res)
          }).catch(reject)
        }).catch(reject)
      }
    })
  },
  async login () {
    let userinfoRaw = {}
    let userinfo = {}

    try {
      userinfoRaw = await this.getUserInfo()
      userinfo = await wepy.request({
        url: api.login.url,
        method: api.login.method,
        header: {
          'x-wechat-code': userinfoRaw.code,
          'x-wechat-encrypted': userinfoRaw.encryptedData,
          'x-wechat-iv': userinfoRaw.iv
        },
        dataType: 'json',
        data: {}
      })

      await wepy.setStorage({
        key: '_session',
        data: userinfo.data.data.session
      })
    } catch (e) {
      wepy.showModal({
        title: '提示',
        content: `获取用户信息失败，请关闭重新进入。${e.message}`
      })
    }
  }
}
