function solution(n) {
    return Math.floor(n % 7 === 0 ? n / 7 : n / 7 + 1)
}