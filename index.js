/**
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */
window.alertNames = function (keyName, keyTime) {
  let res = []
  let map = new Map()
  let len = keyName.length

  for (let i = 0; i < len; i++) {
    const name = keyName[i]
    const time = keyTime[i]
    if (!map.has(name)) {
      map.set(name, [])
    }
    const hour = (time[0].charCodeAt() - '0'.charCodeAt()) * 10 + (time[1].charCodeAt() - '0'.charCodeAt())
    const minute = (time[3].charCodeAt() - '0'.charCodeAt()) * 10 + (time[4].charCodeAt() - '0'.charCodeAt())
    map.get(name).push(hour * 60 + minute)
  }

  map.forEach((times, name) => {
    times.sort((a, b) => a - b)
    for (let i = 0; i + 2 < times.length; i++) {
      if (times[i + 2] - times[i] <= 60) {
        if (res.includes(name)) continue
        res.push(name)
        break
      }
    }
  })

  res.sort()
  return res
}
