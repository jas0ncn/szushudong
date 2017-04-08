import wepy from 'wepy'

export default function request (options) {
  if (options.header) {
    options.header['x-wechat-session'] = wepy.getStorageSync('_session')
  } else {
    options.header = {
      'x-wechat-session': wepy.getStorageSync('_session')
    }
  }
  return wepy.request(options)
}
