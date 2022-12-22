function solution(n) {
    if (n === 1) return n
    
    let result = 1;
    let arr = []

    for (let i=1; i<=n; i++) {
        if (result * i <= n) {
          result *= i
          arr.push(i)
        }
    }
    return arr[arr.length - 1]
}