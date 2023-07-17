export const getAssetURL = (image) => {
  // 参数一：相对路径
  // 参数二：当前文件的路径
  // 用法：从当前文件的路径，去查找相对路径所咋的文件地址
  return new URL(`../assets/img/${image}`, import.meta.url).href
}