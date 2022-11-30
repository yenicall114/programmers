function solution(i, j, k) {
    let arr = []
    
    for (let n=i; n<=j; n++) arr.push(n)
    
    const num = arr.join("")
    const regex = new RegExp(`${k}`, 'g');
    
    const result = num.match(regex)
    
    return result != null ? result.length : 0
}