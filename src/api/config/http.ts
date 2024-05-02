/*
 * @Author: PengChaoQun 1152684231@qq.com
 * @Date: 2024-01-30 18:44:06
 * @LastEditors: PengChaoQun 1152684231@qq.com
 * @LastEditTime: 2024-05-01 23:52:48
 * @FilePath: /pcq-vue3-startup/src/api/config/http.ts
 * @Description: http文件
 */

import axios, {
  type InternalAxiosRequestConfig,
  type AxiosInstance,
  type AxiosResponse,
  AxiosError
} from 'axios'

let baseURL = ''

if (import.meta.env.MODE == 'mock' || _EnableGlobalMock) {
  baseURL = '/mock/'
} else {
  baseURL = '/api/'
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000
})

// 添加请求拦截器
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (config.baseURL == '/mock/') {
      console.warn(`注意！！！地址 ${config.url}使用的是mock`)
    }

    // 在发送请求之前做些什么
    return config
  },
  (error: any) => {
    // 处理请求错误
    return Promise.reject(error)
  }
)

// 添加响应拦截器
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // 对响应数据做点什么
    if (response.status == 200) {
      return response.data
    }
  },
  (error: AxiosError) => {
    handleError(error.response)
    // 处理响应错误
    return Promise.reject(error)
  }
)

function handleError(response: any) {
  if (!response) {
    return
  }

  if (response.status == 404) {
    console.error(`资源不存在哦 (。・＿・。)ﾉ~~`)
  } else if (response.status == 500) {
    console.error(`程序出了点小问题 (＞人＜；)`)
  }
}

export { axiosInstance }
