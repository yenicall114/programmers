function solution(order) {
    const arr = order.toString().split("")
    let count = 0
    
    for (let i=0; i<=arr.length; i++) {
        if (arr[i] === "3" || arr[i] === "6" || arr[i] === "9") count++
    }
    return count
}