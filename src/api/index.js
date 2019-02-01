/*
包含n个接口请求函数的模块
函数的返回值 promise对象
*/
import ajax from './ajax'
const BASE_URL = '/api'

// 根据经纬度获取位置详情
export const reqAddress = (gohash) => ajax(`${BASE_URL}/position/${gohash}`)
// 获取食品分类列表
export const reqFoodCategorys = () => ajax(BASE_URL + '/index_category')
// 根据经纬度获取商铺信息列表
export const reqShops = (longitude, latitude) => ajax(BASE_URL + '/shops', {longitude, latitude})
// 根据经纬度和关键字搜索商铺列表
export const reqSearchShop = (gohash, keyword) => ajax(BASE_URL + '/search_shops', {gohash, keyword})
// 用户名密码登录
export const reqPwdLogin = ({name, pwd, captcha}) => ajax(BASE_URL + '/login_pwd', {name, pwd, captcha}, 'POST')
// 发送短信验证码
export const reqSendCode = (phone) => ajax(BASE_URL + '/sendcode', {phone})
// 手机号验证码登录
export const reqSmsLogin = (phone, code) => ajax(BASE_URL + '/login_sms', {phone, code}, 'POST')
// 根据会话获取用户信息
export const reqUserInfo = () => ajax(BASE_URL + '/userinfo')
// 用户登出
export const reqLogout = () => ajax(BASE_URL + '/logout')
// 获取商家信息
export const reqShopInfo = () => ajax('/info')
// 获取商家评价数组
export const reqShopRatings = () => ajax('/ratings')
// 获取商家商品数组
export const reqShopGoods = () => ajax('/goods')
