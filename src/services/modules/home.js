import hyRequest from '../request/index'

export function getHomeSuggests () {
  return hyRequest.get({ url: "/home/hotSuggests" })
}