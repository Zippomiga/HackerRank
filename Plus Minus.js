// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

// Example

// arr = [1, 1, 0, -1, -1]

// There are n = 5 elements, two positive, two negative and one zero. Their ratios are 2/5 = 0.4000000, 2/5 = 0.4000000 and 1/5 = 0.2000000. Results are printed as:

// 0.400000
// 0.400000
// 0.200000


function plusMinus(arr) {
    const obj = {p: 0, n: 0, z: 0}
    const L = arr.length

    for(let i = 0; i < L; i++) {
        if(arr[i] > 0) obj.p++
        if(arr[i] < 0) obj.n++
        if(arr[i] === 0) obj.z++
    }

    for(let x in obj) obj[x] = ((1/L * obj[x]).toPrecision(6))
    
    return `${obj.p}\n${obj.n}\n${obj.z}`
}