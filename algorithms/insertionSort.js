// 初始陣列：[1,2,3,4,5]
// 檢視 arr[i] 和 arr[i - 1]
// 當發現 arr[i - 1] > arr[i] 時，將 arr[i] 往左移動至適當位置 (arr[i - 1] < arr[i])。
// for迴圈由左而右依序比較相鄰的數值：[1,2] => [2,3] => [3,4] ...
//
// 空間複雜度：O( 1  )
// 時間複雜度：O( n² )

const arr = [5, 7, 1, 2, 4, 3, 6, 9, 8, 0]
insertionSort(arr)

const insertion_Sort = (nums) => {
  console.log(`Beginning Array： [${nums}]`)
  for (let i = 1; i < nums.length; i++) {
    console.log(`nums[${i - 1}]: ${nums[i - 1]}   nums[${i}]: ${nums[i]}`)
    if (i > 0 && nums[i] < nums[i - 1]) {
      console.log(`nums[${i - 1}]: ${nums[i - 1]} > nums[${i}]: ${nums[i]}`)
      let index = i
      while (nums[index] < nums[index - 1]) {
        console.log('[Exchange]');
        // Exchange nums[index-1] with nums[index], the last line should add ";"
        [nums[index - 1], nums[index]] = [nums[index], nums[index - 1]]
        // Index - 1 for while loop to inspect if should keep moving nums[index] forword
        index--
        console.log(`Present Array： [${nums}]`)
      }
      console.log('Exchange Done')
      console.log('------------------')
    }
    console.log(`Present Array： [${nums}]`)
    console.log('------------------')
  }
  console.log(`Sorted Array: [${nums}]`)
  return nums
}


const insertionSortWithNoComment = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    if (i > 0 && nums[i] < nums[i - 1]) {
      let index = i
      while (nums[index] < nums[index - 1]) {
        [nums[index - 1], nums[index]] = [nums[index], nums[index - 1]]
        index--
      }
    }
  }
  return nums
}