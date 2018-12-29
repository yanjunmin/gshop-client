/*
包含n个接口请求函数的模块
函数的返回值 promise对象
*/
import ajax from './ajax'
const BASE_URL = '/api'

// 根据经纬度获取位置详情
export const reqAddress = (gohash) => ajax(`${BASE_URL}/position/${gohash}`)
// 获取食品分类列表
export const reqCateGorys = () => ajax(BASE_URL + '/index_category')
// 根据经纬度获取商铺信息列表
export const reqShop = (longitude, latitude) => ajax(BASE_URL + '/shops',{longitude, latitude})
// 根据经纬度和关键字搜索商铺列表
export const reqSearchShop = (gohash,keyword) => ajax(BASE_URL + '/search_shops',{gohash, keyword})