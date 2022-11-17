// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example
// arr = [1,3,5,7,9]
// The minimum sum is 1 + 3 + 5 + 7 and the maximum sum is 3 + 5 + 7 + 9. The function prints
// 16 24

function miniMaxSum(arr) {
    const min = arr.reduce((a,b) => a+b) - Math.max(...arr)
    const max = arr.reduce((a,b) => a+b) - Math.min(...arr)

    console.log(min, max)
}