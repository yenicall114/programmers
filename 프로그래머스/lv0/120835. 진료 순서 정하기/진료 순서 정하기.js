function solution(emergency) {
    const arr = emergency.slice().sort((a, b) => b - a)
    return emergency.map(el => arr.indexOf(el) + 1)
}