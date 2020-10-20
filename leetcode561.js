// 561. Array Partition I

var arrayPairSum = function (nums) {
  nums.sort((a, b) => a - b)
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) sum += nums[i]
  }
  return sum
};

arrayPairSum([5, 4, 3, 2, 1, -5, 45, -11])