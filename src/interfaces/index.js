import wepy from 'wepy'
import { api } from '../config'

const interfaces = {
  async getUserInfo () {
    const loginData = await wepy.login()
    const userinfo = await wepy.getUserInfo()
    userinfo.code = loginData.code
    return userinfo
  },
  async login () {
    let userinfoRaw = {}
    let userinfo = {}

    try {
      userinfoRaw = await interfaces.getUserInfo()
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

export default interfaces
