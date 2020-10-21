// 905. Sort Array By Parity

const sortArrayByParity = function (arr) {
  let returnArr = []
  arr.forEach(item => {
    item % 2 === 0 ? returnArr.unshift(item) : returnArr.push(item)
  })
  return returnArr
};


sortArrayByParity([3, 1, 2, 4])