export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject

  if (type === 'string') {
    return stringArrayOrObject === ""
  } else if (stringArrayOrObject.length === 0 || Object.keys(stringArrayOrObject).length === 0) {
    return true
  } else {
    return false
  }
}
