/**
 * article模块接口列表
 */

import base from '../base'; // 导入接口域名列表
import axios from '../../http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

const article = {    
    // 新闻列表    
    articleList () {        
        return axios.get(`${base.sq}/topics`);    
    },    
    // 新闻详情,演示    
    articleDetail (id, params) {        
        return axios.get(`${base.sq}/topic/${id}`, {            
            params: params        
        });    
    },
    // post提交  
    /** 
        qs.parse()是将URL解析成对象的形式
        qs.stringify()是将对象 序列化成URL的形式，以&进行拼接
     */  
    login (params) {        
        return axios.post(`${base.sq}/accesstoken`, qs.stringify(params));    
    },
    // 获取天气
    getWeather (params){
        return axios.post(`${base.sq}/9-2`,params)
    }
    // 其他接口…………
}

export default article;