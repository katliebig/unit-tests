export const hashtags = (text) => {
  const array = text.split(" ")
  let result = []
  for (let string of array) {
    if (string.startsWith("#")) {
      result.push(string)
    }
  }
  return result
}
