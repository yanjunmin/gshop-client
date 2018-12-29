/*
ajax请求函数模块
返回值为promise对象(异步返回的数据是:response.data)
*/
import axios from 'axios'
export default function ajax (url, data={}, type='GET') {
	// 执行ajax异步请求
  let promise
  if (type === 'GET') {
    // 准备url,query参数传递
    let dataStr = ''
    Object.keys(data).forEach(key => {
    	dataStr += key + '=' + data[key] + '&'
    })
    if (dataStr !== '') {
      dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'))
      url = url + '?'+ dataStr
    }
    promise = axios.get(url)
  }else {
  	promise = axios.post(url,data)
  }
  promise.then(function (response) {
  	return Promise.resolve(response.data)
  }).catch(function (error) {
  	return Promise.reject(error)
  })
}