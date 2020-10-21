// 初始陣列：[1,2,3,4,5]
// 內迴圈由左而右依序比較相鄰的數值：[1,2] => [2,3] => [3,4] ...
// 當發現 arr[i] < arr[i + 1] 時，交換其位置
// 當每次內迴圈結束，外迴圈縮小檢查範圍：[1,2,3,4,5] => [1,2,3,4] => [1,2,3] ...
//
// 空間複雜度：O( 1  )
// 時間複雜度：O( n² )

const arr = [5, 7, 1, 2, 4, 3, 6, 9, 8, 0]
bubbleSort(arr)

function bubbleSort(arr) {
  console.log(`Beginning Array: [${arr}]`)
  console.log('------------')
  for (let i = arr.length - 1; i > 0; i--) {
    // 
    for (let j = 0; j < i; j++) {
      console.log(`arr[${j}]: ${arr[j]}`)
      console.log(`arr[${j + 1}]: ${arr[j + 1]}`)
      if (arr[j + 1] < arr[j]) {
        console.log(`arr[${j + 1}]: ${arr[j + 1]} < arr[${j}]: ${arr[j]}`)
        console.log('[EXCHANGE]');
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      } else console.log('[NO EXCHANGE]')
      console.log(`Present Array: [${arr}]`)
      console.log('------------')
    }
    console.log(`---------Round ${i} complished--------`)
  }
  console.log(`Sorted Array： [${nums}]`)
  return nums
}

function bubbleSortWithNoComment(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}