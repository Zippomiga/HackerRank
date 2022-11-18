// Given an array of integers and a positive integer k, determine the number of (i, j) pairs where i < j and ar[i] + ar[j] is divisible by k.

// Example
// ar = [1,2,3,4,5,6]
// k = 5

// Three pairs meet the criteria: [1,4], [2,3] and [4,6].

function divisibleSumPairs(n, k, ar) {
    let pairs = 0
    let el = 0

    while(el < n) {
        for(let i = el; i < n; i++) {
            let curr = ar[el]
            let next = ar[i+1]

            if((curr + next) % k === 0) pairs++
        }
        el++
    }
    
    return pairs
}