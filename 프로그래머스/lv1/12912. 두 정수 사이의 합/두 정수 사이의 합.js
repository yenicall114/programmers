function solution(a, b) {
    let arr = []
    const max = Math.max(a, b)
    const min = Math.min(a, b)
    
    for (let i=min; i<=max; i++) {
        arr.push(i)
    }
    return arr.reduce((a, c) => a + c)
}