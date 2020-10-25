function rgb(r, g, b) {
  return [r, g, b].map(i => {
    return (i < 0) ? i = 0 : (i > 255) ? i = 255 : i
  }).map(i => {
    let converted = i.toString(16).toUpperCase()
    return (converted.length < 2) ? 0 + converted : converted
  }).join('')
}