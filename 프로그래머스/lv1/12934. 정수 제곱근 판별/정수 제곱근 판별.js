function solution(n) {
    const num = Math.sqrt(n)
    return Number.isInteger(num) ? (num + 1) ** 2 : -1
}