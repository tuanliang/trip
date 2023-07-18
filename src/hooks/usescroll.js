import { onMounted, onUnmounted, ref } from "vue"

export default function useScroll () {
  const isBottom = ref(false)
  const scrollListenerHandler = () => {


    const scrollTop = document.documentElement.scrollTop
    const clientHeight = document.documentElement.clientHeight
    const scrollHeight = document.documentElement.scrollHeight

    if (scrollTop + clientHeight + 1 >= scrollHeight) {
      console.log("滚动到底部")
      isBottom.value = true
    }
  }

  onMounted(() => {
    window.addEventListener("scroll", scrollListenerHandler)
  })
  onUnmounted(() => {
    window.removeEventListener("scroll", scrollListenerHandler)
  })

  return { isBottom }
}