import data from './data.json'
/*
引入mockjs
*/
import Mock from 'mockjs'
// 返回goods接口
Mock.mock('/goods', {code: 0, data: data.goods})
// 返回info接口
Mock.mock('/info', {code: 0, data: data.info})
// 返回ratings接口
Mock.mock('/ratings', {code: 0, data: data.ratings})
