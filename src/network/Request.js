import axios from "axios"
const URL ="http://123.207.32.32:8080"

function request(config){
  const instance = axios.instance({
    baseURL:URL,
    timeout:5000
  })
  // 请求拦截器
  instance.interceptors.request.use(config =>{
    return config
  },err=>{
    console.log(err);
  })
  // 响应拦截器
  instance.interceptors.response.use(res => {
    return res.data
  },err=>{
    console.log(err);
  })

  return config
}

export default request

