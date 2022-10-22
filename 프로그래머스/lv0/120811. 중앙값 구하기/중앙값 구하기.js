function solution(array) {
    const sort = array.sort((a, b) => a - b)
    const median = Math.floor(array.length / 2)
    return array[median]
}