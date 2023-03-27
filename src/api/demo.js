import request from '../utils/request'

export function demoGet(params) {
  return request({
    url: '/hello',
    headers: {
      isToken: false // 携带token
    },
    method: 'get',
    params
  })
}

export function demoPost(data) {
  return request({
    url: '/demo',
    headers: {
      isToken: false
    },
    method: 'post',
    data
  })
}