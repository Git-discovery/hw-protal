import { Notification } from 'element-ui';
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

interface Message {
  readonly [status: number]: string;
}

const codeMessage: Message = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

/**
 *
 * @param {*} response
 * @returns
 */
function validStatus(response: AxiosResponse) {
  const { status, statusText } = response;
  const { url } = response && response.config;
  if (status >= 200 && status < 300) {
    return response;
  }
  const errorText: string = codeMessage[status] || statusText;
  Notification.error({
    title: `请求错误 ${status}: ${url}`,
    message: errorText,
    duration: 3000,
    position: 'top-right',
    // showClose: false,
  });
  const error = new Error(errorText);
  error.name = status.toString();
  throw error;
}

/**
 *
 * @param {string} url
 * @param {object} options
 */
const request = function (url: string, options?: AxiosRequestConfig) {
  const defaultOpts: AxiosRequestConfig = {
    method: 'GET',
  };
  const newOpts: AxiosRequestConfig = {
    ...defaultOpts,
    ...options,
  };
  const { method } = newOpts;

  if (typeof method === 'string' && method.toUpperCase() === 'POST') {
    newOpts.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      ...newOpts.headers,
    };
  }
  return axios(url, newOpts)
    .then(validStatus)
    .then((response: AxiosResponse) => response.data)
    .catch((error: Error) => {
      const { name } = error;
      switch (name) {
        case '400':
        case '401':
          window.history.pushState({}, 'login', '/login');
          break;
        case '403':
          window.history.pushState({}, '403', '/403');
          break;
        case '404':
        case '406':
        case '410':
        case '422':
          window.history.pushState({}, '404', '/404');
          break;
        case '500':
        case '502':
        case '503':
        case '504':
          window.history.pushState({}, '500', '/500');
          break;
        default:
          break;
      }
    });
};

export default request;
