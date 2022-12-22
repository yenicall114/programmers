function solution(array, n) {
    const arr = array.sort((a, b) => a - b).map(el => Math.abs(el - n))
    return array[arr.indexOf(Math.min(...arr))]
}