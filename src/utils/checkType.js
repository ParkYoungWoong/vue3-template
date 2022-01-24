export function checkType(data, type) {
  return Object.prototype.toString.call(data).slice(8, -1) === type
}
