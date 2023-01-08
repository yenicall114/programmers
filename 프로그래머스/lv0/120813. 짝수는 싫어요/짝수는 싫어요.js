function solution(n) {
    return Array.from({ length: n }, (_, i) => i + 1).filter(el => el % 2 !== 0)
}