import { getHomeSuggests } from "@/services";
import { defineStore } from "pinia";

const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggest: []
  }),
  actions: {
    async fetchHomeSuggest () {
      const res = await getHomeSuggests()
      this.hotSuggest = res.data
      console.log(res.data)
    }
  }
})

export default useHomeStore