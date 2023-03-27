// 拦截器
import axios from 'axios'
import { ElMessage } from 'element-plus';
import { getToken } from '@/utils/atuh'

// 请求头
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// - 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: import.meta.env.VITE_APP_BASE_API,
  // baseURL: '/api',
  // 超时
  timeout: 10000
})

// - request 拦截器
service.interceptors.request.use(config => {
  // 是否需要设置 token
  const isToken = (config.headers || {}).isToken === false
  if (getToken() && !isToken) {
    config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带自定义token
  }

  return config
}, error => {
  Promise.reject(error)
})

// - response 拦截器
service.interceptors.response.use(res => {
  // 响应数据处理
  const code = res.data.code || '200'

  if (code == 200) return res.data
  if (code == 401) {
    return location.href = '/'
  }


  ElMessage.error({ message: res.data.msg })
  return Promise.reject(res.data)

},
  error => {
    // 服务器异常
    let { message } = error;
    if (message == "Network Error") {
      message = "后端接口连接异常";
    } else if (message.includes("timeout")) {
      message = "系统接口请求超时";
    } else if (message.includes("Request failed with status code")) {
      message = "系统接口" + message.substr(message.length - 3) + "异常";
    }
    ElMessage.error({ message })

    return Promise.reject(error)
  }
)

export default service