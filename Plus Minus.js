function plusMinus(arr) {
    let obj = {p: 0, n: 0, z: 0}
    const L = arr.length

    for(let i = 0; i < L; i++) {
        if(arr[i] > 0) obj.p++
        if(arr[i] < 0) obj.n++
        if(arr[i] === 0) obj.z++
    }

    for(let x in obj) obj[x] = ((1/L * obj[x]).toPrecision(6))
    
    return `${obj.p}\n${obj.n}\n${obj.z}`
}