import type { AxiosError, AxiosRequestConfig } from 'axios'

// Todo: the following code is just an example. Please write your own project specific interceptors
const requestInterceptor = (requestConfig: AxiosRequestConfig): AxiosRequestConfig => {
  requestConfig.headers = {
    ...requestConfig.headers,
    'Content-Type': 'application/json',
    'x-api-key': import.meta.env.VITE_API_KEY
  }
  return requestConfig
}
const requestErrorInterceptor = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error)
}

export {
  requestInterceptor,
  requestErrorInterceptor
}
