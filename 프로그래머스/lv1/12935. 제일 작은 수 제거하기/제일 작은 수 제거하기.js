function solution(arr) {
    const search = arr.indexOf(Math.min(...arr))
    arr.splice(search, 1)
    return arr.length <= 1 ? [-1] : arr
}