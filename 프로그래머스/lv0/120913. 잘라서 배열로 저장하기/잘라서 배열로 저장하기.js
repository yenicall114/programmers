function solution(my_str, n) {
    let arr = [...my_str]
    const result = []
    
    for (let i=0; i<arr.length; i++) {
        const slice = arr.slice(i * n, i * n + n)
        result.push(slice.join(""))
    }
    return result.filter(el => el !== "")
}