import { onMounted, onUnmounted, ref } from "vue"
import { throttle } from "underscore"

export default function useScroll (elRef) {
  let el = window

  const isBottom = ref(false)

  const clientHeight = ref(0)
  const scrollTop = ref(0)
  const scrollHeight = ref(0)
  const scrollListenerHandler = throttle(() => {
    if (el === window) {
      scrollTop.value = document.documentElement.scrollTop
      clientHeight.value = document.documentElement.clientHeight
      scrollHeight.value = document.documentElement.scrollHeight
    } else {
      scrollTop.value = el.scrollTop
      clientHeight.value = el.cliendHeight
      scrollHeight.value = el.scrollHeight
    }

    if (scrollTop.value + clientHeight.value + 1 >= scrollHeight.value) {
      console.log("滚动到底部")
      isBottom.value = true
    }
  }, 200)

  onMounted(() => {
    if (elRef) {
      el = elRef.value
    }
    el.addEventListener("scroll", scrollListenerHandler)
  })
  onUnmounted(() => {
    el.removeEventListener("scroll", scrollListenerHandler)
  })

  return { isBottom, clientHeight, scrollTop, scrollHeight }
}