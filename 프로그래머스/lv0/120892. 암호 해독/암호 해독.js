function solution(cipher, code) {
    const arr = []
    
    for (let i=0; i<=cipher.length; i++) {
        if (i % code === 0) arr.push(cipher[i - 1])
    }
    return arr.join("")
}