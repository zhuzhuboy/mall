import request from './request'

export function getHomeData(){
  return request({
    url:'/home/multidata',
    method:'GET'
  })
}
// http://152.136.185.210:8000/api/z8/home/data?type=pop&page=2
export function getGoodsData({type,page}){
  return request({
    url:'/home/data',
    method:'GET',
    params:{
      type,
      page
    }
  })
}

