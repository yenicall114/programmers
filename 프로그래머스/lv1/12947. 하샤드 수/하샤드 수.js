function solution(x) {
    const sum = String(x).split("").map(Number).reduce((a, c) => a + c)
    return x % sum === 0
}