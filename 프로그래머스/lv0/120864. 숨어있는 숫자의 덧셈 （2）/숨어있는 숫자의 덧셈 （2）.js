function solution(my_string) {
    const result = my_string.match(/\d+/g)
    return result ? result.map(Number).reduce((a, c) => a + c) : 0
}