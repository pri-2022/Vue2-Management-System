import axios from "axios";
// 进度条
import nprogress from "nprogress";
import 'nprogress/nprogress.css';

const serviceMock = axios.create({
    baseURL: 'mock',
    timeout: '5000'
})

serviceMock.interceptors.request.use((config) => {
    // config:配置对象，含有 headers 请求头
    nprogress.start();
    return config;
})

serviceMock.interceptors.response.use((res) => {
    nprogress.done();
    return res.data;
}, (error) => {
    nprogress.done();
    return Promise.reject(new Error('faile'))
})

export default serviceMock;