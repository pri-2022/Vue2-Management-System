import axios from "axios";
// 进度条
import nprogress from "nprogress";
import 'nprogress/nprogress.css';

const service = axios.create({
    baseURL: 'api',
    timeout: '5000'
})

service.interceptors.request.use((config) => {
    // config:配置对象，含有 headers 请求头
    nprogress.start();
    return config;
})

service.interceptors.response.use((res) => {
    nprogress.done();
    return res.data;
}, (error) => {
    nprogress.done();
    return Promise.reject(new Error('faile'))
})

export default service;