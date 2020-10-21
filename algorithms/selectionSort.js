// 初始陣列：[1,2,3,4,5]
// 當每次內迴圈結束，外迴圈縮小檢查範圍：[1,2,3,4,5] => [2,3,4,5] => [3,4,5] ...
// 內迴圈尋找外迴圈檢查範圍內的最小值，並將最小值放置在比較範圍的最左側(將檢查範圍最左側的數值和找到的最小值交換位置)
//
// 空間複雜度：O( 1  )
// 時間複雜度：O( n² )

const arr = [5, 1, 2, 4, 3, 6, 9, 8, 0]
selectionSort(arr)

const selectionSort = (nums) => {
  console.log(`Beginning Array： [${nums}]`)
  for (let i = 0; i < nums.length; i++) {
    console.log(`Start sorting from index ${i}; Minimum set to: ${nums[i]}`)
    console.log('------------')
    for (let j = i; j < nums.length; j++) {
      console.log(`Inspecting Index: ${j}, value is ${nums[j]}`)
      if (nums[j] < nums[i]) {
        console.log(`New minimum found: ${nums[j]}, exchange it with ${nums[i]}`);
        [nums[i], nums[j]] = [nums[j], nums[i]]
        console.log(`Present Array： [${nums}]`)
      } else {
        console.log(`${nums[i]} is still the minimum`)
        console.log(`Present Array： [${nums}]`)
      }
      console.log('------------')
    }
    console.log(`Present Array： [${nums}]`)
    console.log(`--------------Round ${i + 1} complished--------------`)
  }
  console.log(`Sorted Array: [${nums}]`)
  return nums
}

const selectionSortWithNoComment = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        [nums[i], nums[j]] = [nums[j], nums[i]]
      }
    }
  }
  return nums
};
