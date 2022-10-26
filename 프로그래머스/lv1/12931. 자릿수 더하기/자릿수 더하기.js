function solution(n) {
    return (n + "").split("").map(Number).reduce((a, c) => a + c)
}