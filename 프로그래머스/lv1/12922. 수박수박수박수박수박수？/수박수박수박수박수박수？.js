function solution(n) {
    const bakbak = "수박"
    const arr = []
    
    for (let i=0; i<=5000; i++) {
        arr.push(bakbak.substr(0, 1))
        arr.push(bakbak.substr(1, bakbak.length))
    }
    
    return arr.slice(0, n).join("")
}