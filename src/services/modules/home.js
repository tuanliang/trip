import hyRequest from '../request/index'

export function getHomeSuggests () {
  return hyRequest.get({ url: "/home/hotSuggests" })
}

export function getCategories () {
  return hyRequest.get({ url: "/home/categories" })
}

export function getHomeList (currentPage) {
  return hyRequest.get({
    url: "/home/houselist",
    params: {
      page: currentPage
    }
  })
}