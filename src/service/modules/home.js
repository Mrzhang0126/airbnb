import httpRequest from "..";

export function getHomeGoodPriceData() {
  return httpRequest.get({
    url: "/home/goodprice"
  })
}

export function getHomeHighScoreData() {
  return httpRequest.get({
    url: "/home/highscore"
  })
}


export function getHomeDiscountData() {
  return httpRequest.get({
    url: "/home/discount"
  })
}


export function getHomeHotRecommendData() {
  return httpRequest.get({
    url: "/home/hotrecommenddest"
  })
}


export function getHomeLongforData() {
  return httpRequest.get({
    url: "/home/longfor"
  })
}


export function getHomePlusData() {
  return httpRequest.get({
    url: "/home/plus"
  })
}
