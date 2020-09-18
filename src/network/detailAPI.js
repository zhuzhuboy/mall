import request from './request'

export function getDetailData(iid) {
  return request({
    url: '/detail',
    method: 'GET',
    params: {
      iid: iid
    }
  })
}

export function getRecommend() {
  return request({
    url: '/recommend',
    method: 'GET',
  })
}

export class Goods {
  constructor(itemInfo, columns,services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.realPrice = itemInfo.lowNowPrice;
    this.disCount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
  }
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}

export class Params {
  constructor(paramsInfo) {
    this.sizes = paramsInfo.rule.tables;
    this.infos = paramsInfo.info.set;
    this.image = paramsInfo.info.images ? paramsInfo.info.images[0] : [];
  }
}
