function solution(s) {
    let arr = s.split(" ")
    
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === "Z") arr.splice(i, 1, Number(arr[i - 1] * -1))
    }
    
    return arr.map(Number).reduce((a, b) => a + b)
}