import { getCategories, getHomeList, getHomeSuggests } from "@/services";
import { defineStore } from "pinia";

const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggest: [],
    categories: [],
    houselist: [],
    currentPage: 1,
  }),
  actions: {
    async fetchHomeSuggest () {
      const res = await getHomeSuggests()
      this.hotSuggest = res.data

    },
    async fetchCategories () {
      const res = await getCategories()
      this.categories = res.data
    },
    async fetchHomeList () {
      const res = await getHomeList(this.currentPage)
      this.houselist.push(...res.data.data)
      this.currentPage++
      // console.log(res.data)
    }
  }
})

export default useHomeStore