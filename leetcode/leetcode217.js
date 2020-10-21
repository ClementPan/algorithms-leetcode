// 217. Contains Duplicate
// use set

const containsDuplicate = function (nums) {
  let output = new Set(nums)
  return output.size === nums.length ? false : true
}

// refined
var refinedContainsDuplicate = function (nums) {
  return new Set(nums).size !== nums.length
}


containsDuplicate([1, 2, 3, 4])