import axios from 'axios'

export default function request (config){

  const instance = axios.create({
    baseURL:'http://152.136.185.210:8000/api/z8',
  })

  instance.interceptors.response.use(res=>{
    if(res.status == 200){
      return res.data
    }
  },rej=>{})

  return instance(config)
}

