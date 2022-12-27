function solution(n, m) {
    const arr = []
    
    for (let i=1; i<=m; i++) {
        if (n % i === 0 && m % i === 0) arr.push(i)
    }
    
    return [Math.max(...arr), n * m / Math.max(...arr)]
}