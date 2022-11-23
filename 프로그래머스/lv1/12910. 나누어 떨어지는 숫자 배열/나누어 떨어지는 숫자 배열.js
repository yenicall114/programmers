function solution(arr, divisor) {
    const result = arr.filter((el) => el % divisor === 0)
    return result.length >= 1 ? result.sort((a, b) => a - b) : [-1]
}