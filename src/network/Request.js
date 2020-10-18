import axios from "axios"
const URL = "http://123.207.32.32:8000/"

export function request(config) {
  const instance = axios.create({
    baseURL: URL,
    timeout: 5000
  })
  // 请求拦截器
  instance.interceptors.request.use(config => {
    // console.log("请求成功",config);
    return config;
  }, err => {
    console.log("请求失败", err);
  })

  instance.interceptors.response.use(res => {
    // console.log("响应成功",res);
    return res.data;
  }, err => {
    console.log("响应失败", err);
  })
  //请求网咯
  return instance(config)
}
