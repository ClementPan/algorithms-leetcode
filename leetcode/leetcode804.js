// 804. Unique Morse Code Words

var uniqueMorseRepresentations = function (words) {
  const morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
  const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let morsed = ''
  let output = new Set()

  words.forEach(word => {
    morsed = ''
    word.split('').forEach(letter => {
      morsed += morse[alpha.indexOf(letter)]
    })
    output.add(morsed)
  })
  return output.size
};

// ver 2
var uniqueMorseRepresentationsV2 = function (words) {
  const morse = { a: ".-", b: "-...", c: "-.-.", d: "-..", e: ".", f: "..-.", g: "--.", h: "....", i: "..", j: ".---", k: "-.-", l: ".-..", m: "--", n: "-.", o: "---", p: ".--.", q: "--.-", r: ".-.", s: "...", t: "-", u: "..-", v: "...-", w: ".--", x: "-..-", y: "-.--", z: "--.." }
  let morsed = ''
  return new Set(
    words.map(word => {
      return word.split('').map(i => {
        return morse[i]
      }).join('')
    })
  ).size
};