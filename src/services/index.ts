// import Config from '@/utils/config'
import request, { Method, RequestConfig } from '@/utils/request'
import api from './api'

// const { apiPrefix } = Config
const gen = (params: string) => {
  let url = params
  let method: Method = 'GET'

  const paramsArray = params.split(' ')

  if (paramsArray.length === 2) {
    method = paramsArray[0] as Method
    url = paramsArray[1]
  }

  return (data?: object, config?: RequestConfig): Promise<any> => {
    const res = request({
      // baseURL: apiPrefix,
      url,
      data,
      method,
      ...config,
    })
    return res
  }
}

type APIKeys = keyof typeof api
type APIObject = {
  [key in APIKeys]: (data?: Object, config?: RequestConfig) => Promise<any>
}

const APIFunction: APIObject = {} as APIObject

for (const key of Object.keys(api)) {
  APIFunction[key] = gen(api[key])
}

export default APIFunction
