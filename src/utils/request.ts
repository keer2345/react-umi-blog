import axios, { AxiosRequestConfig, Method as axiosMethod } from 'axios'

interface ResponseData<T> {
  success: boolean
  code?: number
  msg?: string
  data?: T
}

export type Method = axiosMethod
export interface RequestConfig extends AxiosRequestConfig {}

const request = (
  options: AxiosRequestConfig,
): Promise<ResponseData<any> | undefined> => {
  return axios(options)
    .then((res) => {
      console.log('res:', res.data)
      const { success, code, msg, data } = res.data
      if (!success) {
        throw new Error(msg)
      } else {
        return Promise.resolve({
          success,
          code,
          msg,
          data,
        })
      }
    })
    .catch((error) => {
      const { msg } = error
      return {
        success: false,
        msg,
      }
    })
}

export default request
