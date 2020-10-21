function minUmbrellas(weather) {
  const arr = weather
  let ubAtHome = 0
  let ubAtWork = 0
  const rain = ['rainy', 'thunderstorms']

  for (let i = 0; i < arr.length; i++) {
    if (rain.includes(arr[i])) {
      if (i % 2 === 0) {
        if (!ubAtHome) {
          ubAtWork++
        } else {
          ubAtHome--
          ubAtWork++
        }
      }
      if (i % 2 === 1) {
        if (!ubAtWork) {
          ubAtHome++
        } else {
          ubAtWork--
          ubAtHome++
        }
      }
    }
  }
  return ubAtWork + ubAtHome
}