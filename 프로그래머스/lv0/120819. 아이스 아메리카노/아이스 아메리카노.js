function solution(money) {
    const americano = 5500
    const a = Math.floor(money / americano)
    const b = money - americano * a
    return [a, b];
}