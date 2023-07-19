import { onMounted, onUnmounted, ref } from "vue"
import { throttle } from "underscore"

export default function useScroll () {
  const isBottom = ref(false)

  const clientHeight = ref(0)
  const scrollTop = ref(0)
  const scrollHeight = ref(0)
  const scrollListenerHandler = throttle(() => {
    scrollTop.value = document.documentElement.scrollTop
    clientHeight.value = document.documentElement.clientHeight
    scrollHeight.value = document.documentElement.scrollHeight
    if (scrollTop.value + clientHeight.value + 1 >= scrollHeight.value) {
      console.log("滚动到底部")
      isBottom.value = true
    }
  }, 200)

  onMounted(() => {
    window.addEventListener("scroll", scrollListenerHandler)
  })
  onUnmounted(() => {
    window.removeEventListener("scroll", scrollListenerHandler)
  })

  return { isBottom, clientHeight, scrollTop, scrollHeight }
}