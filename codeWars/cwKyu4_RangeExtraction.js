function solution(list) {
  let output = []
  let link = []
  for (let i = 0; i < list.length; i++) {
    if (!link.length) link = [list[i]]
    else {
      if (list[i] - link[link.length - 1] === 1) {
        link.push(list[i])
        if (i === list.length - 1) {
          if (link.length > 2) {
            output.push(link[0] + '-' + link[link.length - 1])
          } else link.forEach(e => output.push(e))
        }
      } else {
        if (link.length > 2) {
          output.push(link[0] + '-' + link[link.length - 1])
        } else {
          link.forEach(e => output.push(e))
        }
        if (i === list.length - 1) output.push(list[i])
        else link = [list[i]]
      }
    }
  }
  return output.join(',')
}