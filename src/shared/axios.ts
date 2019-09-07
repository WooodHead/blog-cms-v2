import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios'
import { Observable } from 'rxjs'
import { baseURL } from 'shared/constants'

const CancelToken = axios.CancelToken

// config timeout
axios.defaults.timeout = 30 * 1000

// config cookie
// axios.defaults.withCredentials = true;

// config request header
axios.defaults.headers.post['Content-Type'] = 'application/json'

// config base url
axios.defaults.baseURL =
  process.env.NODE_ENV === 'production'
    ? baseURL.production
    : baseURL.development

const pending: any[] = []
const removePending = (config: any) => {
  for (const p in pending) {
    if (pending[p].u === config.url + '&' + config.method) {
      pending[p].f()
      pending.splice(parseInt(p, 10), 1)
    }
  }
}

// config request interceptors
axios.interceptors.request.use(
  config => {
    removePending(config)
    config.cancelToken = new CancelToken(c => {
      pending.push({
        u: config.url + '&' + config.method,
        f: c,
      })
    })
    return config
  },
  err => Promise.reject(err),
)
// config response interceptors
axios.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = '400 Bad Request'
          break
        case 401:
          error.message = '401 Unauthorized'
          window.location.href = '/login'
          break
        case 403:
          error.message = '403 Forbidden'
          break
        case 404:
          error.message = '404 Not Found'
          break
        case 500:
          error.message = '500 Internal Server Error'
          break
        case 502:
          error.message = '502 Bad Gateway'
          break
        case 504:
          error.message = '504 Internal Server Error'
          break
        default:
          error.message = `Unkown error and the status code is ${error.response.status}`
      }
    } else {
      error.message = 'Unkown error'
    }
    return Promise.reject(error.message)
  },
)

// GET
export function GET<T>(url: string, params?: any): Observable<T> {
  return new Observable(subscriber => {
    axios
      .get(url, {
        params,
      })
      .then(res => {
        subscriber.next(res.data)
        subscriber.complete()
      })
      .catch((err: Error) => {
        subscriber.error(err)
        subscriber.complete()
      })
  })
}

// POST
export function POST<T>(
  url: string,
  params?: any,
  config?: AxiosRequestConfig,
): Observable<T> {
  return new Observable(subscriber => {
    axios
      .post(url, params, config)
      .then(res => {
        subscriber.next(res.data)
        subscriber.complete()
      })
      .catch((err: Error) => {
        subscriber.error(err)
        subscriber.complete()
      })
  })
}

// PUT
export function PUT<T>(url: string, params?: any): Observable<T> {
  return new Observable(subscriber => {
    axios
      .put(url, params)
      .then(res => {
        subscriber.next(res.data)
        subscriber.complete()
      })
      .catch((err: Error) => {
        subscriber.error(err)
        subscriber.complete()
      })
  })
}

// DELETE
export function DELETE<T>(url: string, params?: any): Observable<T> {
  return new Observable(subscriber => {
    axios
      .delete(url, {
        data: params,
      })
      .then(res => {
        subscriber.next(res.data)
        subscriber.complete()
      })
      .catch((err: Error) => {
        subscriber.error(err)
        subscriber.complete()
      })
  })
}
