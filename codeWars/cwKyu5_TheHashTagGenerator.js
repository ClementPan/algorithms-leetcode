//The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!
// Here's the deal:
// It must start with a hashtag(#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.


function generateHashtag(str) {
  let output = []
  str.split(' ').forEach(e => {
    if (e) output.push(e)
  })
  output = output.map(e => {
    let newItem = e.split('')
    newItem[0] = newItem[0].toUpperCase()
    return newItem.join('')
  })
  output.unshift('#')
  output = output.join('')
  if ((output.length > 1) && (output.length <= 140)) return output
  return false
}