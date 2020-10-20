const isValid = (input) => {
  const brackets = ['{', '[', '(', ')', ']', '}']
  let arr = []
  for (let i = 0; i < input.length; i++) {
    if (brackets.indexOf(input[i]) < 3) arr.push(input[i])
    else {
      if (brackets.indexOf(input[i]) + brackets.indexOf(arr[arr.length - 1]) !== 5) return false
      else arr.pop()
    }
  }
  if (arr.length) return false
  return true
}