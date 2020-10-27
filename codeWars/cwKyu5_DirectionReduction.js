function dirReduc(arr) {
  const dir = ["NORTH", "EAST", "WEST", "SOUTH"]
  let takeIn = []
  for (let i = 0; i < arr.length; i++) {
    if (dir.indexOf(takeIn[takeIn.length - 1]) + dir.indexOf(arr[i]) === 3) {
      takeIn.pop()
    } else takeIn.push(arr[i])
  }
  return takeIn
}