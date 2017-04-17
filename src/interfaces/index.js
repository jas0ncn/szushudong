import wepy from 'wepy'
import store from '../store'
import { api } from '../config'

export default {
  async getUserInfo () {
    const loginData = await wepy.login()
    const userinfo = await wepy.getUserInfo()
    userinfo.code = loginData.code

    // store user info
    store.mutate(state => {
      state.userinfo = userinfo
      return state
    })

    return userinfo
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
