// a store for wxapp
import deepclone from '../utils/deepclone'

class Store {
  /**
   * constructor
   * @param {Object} initData 初始化数据
   */
  constructor (initState = {}) {
    if (typeof initState !== 'object' || initState === null) {
      throw new TypeError('[Store] Init state must be a object.')
    }

    const _state = this._state = deepclone(initState)
    this.state = this._hookState(_state)
  }

  /**
   * 禁止直接修改
   * @param {Object} _state
   */
  _hookState (_state) {
    const state = {}

    Object.keys(_state).forEach(key => {
      if (typeof _state[key] === 'object' && _state[key] !== null) {
        _state[key] = this._hookState(_state[key])
      } else if (typeof _state[key] === 'function') {
        throw new TypeError('[Store] state cannot save function.')
      }

      // setter hook
      Object.defineProperty(state, key, {
        enumerable: true,
        configurable: true,
        get () {
          return _state[key]
        },
        set (newVal) {
          throw new TypeError('[Store] mutate state failed. Use .mutate() to mutate state')
        }
      })
    })

    return state
  }

  /**
   * mutate state
   * @param {Function} fn
   */
  mutate (fn) {
    const newState = this._state = deepclone(
      fn(
        deepclone(this._state)
      )
    )
    this.state = this._hookState(newState)
  }
}

module.exports = Store
