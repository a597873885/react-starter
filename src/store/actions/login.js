import Ajax from 'Root/common/ajax'

// 储存accessToken到redux
export function saveAccessToken({ accessToken }) {
  return dispatch => {
    dispatch({ type: 'SAVE_ACCESS_TOKEN', accessToken })
  }
}

export function saveUserInfo({ userinfo }) {
  return dispatch => {
    dispatch({ type: 'SAVE_USERINFO', userinfo })
  }
}

export function signIn({ userName, password }) {
  return dispatch => {
    return new Promise(async (resolve, reject) => {
      // 这里写你的登录请求，登录成功以后，将token储存到cookie，使用httpOnly(比较安全)
      // your code ...

      // 储存 cookie
      let [err, data] = await Ajax({
        url: window.location.origin + '/sign/in',
        method: 'post',
        data: {
          userName, password
        }
      })

      if (data && data.success) {
        resolve([null, true])
      } else {
        resolve(['sign error'])
      }
    })
  }
}

export function signOut() {
  return dispatch => {
    return new Promise(async (resolve, reject) => {
      let [err, data] = await Ajax({
        url: window.location.origin + '/sign/out',
        method: 'post'
      })

      if (data && data.success) {
        resolve([null, true])
      } else {
        resolve(['sign error'])
      }
    })
  }
}
