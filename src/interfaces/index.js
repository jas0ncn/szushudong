import wepy from 'wepy'
import store from '../store'
import { api } from '../config'

export default {
  getUserInfo () {
    return new Promise((resolve, reject) => {
      wepy.login().then((r) => {
        wepy.getUserInfo().then((res) => {
          res.code = r.code

          // store user info
          store.mutate(state => {
            state.userinfo = res.userInfo
            return state
          })

          resolve(res)
        }).catch(reject)
      }).catch(reject)
    })
  },
  async login () {
    let userinfoRaw = {}
    let userinfo = {}

    try {
      userinfoRaw = await this.getUserInfo()
      userinfo = await wepy.request({
        url: api.user.login.url,
        method: api.user.login.method,
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
