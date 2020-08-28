const longestCommonPrefix = function (strs) {
  if (!strs.length) {
    return ''
  } else if (strs.length === 1) {
    return strs[0]
  } else if (Boolean(strs.map(e => Number(e === '')).find(f => f === 1))) {
    return ''
  } else {
    const strings = strs
    let output = ''
    let validPrefix = ''

    for (let i = 0; i < strings[0].length; i++) {
      inspecting = strings[0][i]
      for (let j = 0; j < strings.length; j++) {
        if (strings[j][i] !== inspecting) {
          return validPrefix
        }
      }
      validPrefix += inspecting
    }
    return validPrefix
  }
};