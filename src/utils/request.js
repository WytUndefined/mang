import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken, setToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  withCredentials: true, // 跨域时携带cookie
  timeout: 30000 // request timeoprocwut
})

// request interceptor
service.interceptors.request.use(
  config => {
    // Do something before request is sent
    if (store.getters.token) {
      // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
      config.headers['Authorization'] = getToken()
      // config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const data = response
    const headers = data.headers
    // download files
    if (headers['content-type'] === 'application/octet-stream' || headers['content-type'] === 'multipart/form-data;charset=utf-8') {
      if (!data) {
        return
      }
      const url = window.URL.createObjectURL(data.data)
      const link = document.createElement('a')
      link.style.display = 'none'
      link.href = url
      let filename = 'unknow'
      if (data.headers['content-disposition']) {
        filename = data.headers['content-disposition'].split(';')[1].substring(9)
      }
      link.setAttribute('download', decodeURIComponent(filename))

      document.body.appendChild(link)
      link.click()
      // normal response
    } else {
      const res = data.data
      if (res.code !== 200) {
        if (res.code === 403) {
          res.message = '没有操作权限'
        }
        if (res.code === 500) {
          res.message = '服务端接口响应异常'
        }
        Message({
          message: res.message || '操作失败',
          type: 'error',
          duration: 8 * 1000
        })
        // 50012:其他客户端登录了;  50014:Token 过期了;
        if (res.code === 50012 || res.code === 50014) {
          // 请自行在引入 MessageBox
          // import { Message, MessageBox } from 'element-ui'
          MessageBox.confirm('你登录已超时，可以取消继续留在该页面，或者重新登录', '确定登出', {
            confirmButtonText: '重新登录',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            store.dispatch('user/resetToken').then(() => {
              location.reload() // 为了重新实例化vue-router对象 避免bug
            })
          })
        }
        if (res.code === 403) {
          return Promise.reject('没有操作权限')
        }
        return Promise.reject(new Error(res.message || 'Error'))
      } else {
        if (headers.authorization) {
          refreshToken(headers.authorization)
        }
        return res
      }
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

/**
 * refresh token
 * @param error
 * @param newToken
 * @returns {Promise<void>}
 */
export function refreshToken(authorization) {
      if (authorization) {
        setToken(authorization)
  }
}

export default service
