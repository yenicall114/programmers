function solution(s){
    const arr = [...s]
    let p = 0
    let y = 0
    
    for (let i=0; i<=arr.length; i++) {
        if (arr[i] === "p" || arr[i] === "P") p++
    }
    
    for (let i=0; i<=arr.length; i++) {
        if (arr[i] === "y" || arr[i] === "Y") y++
    }
    
    return p === y ? true : false

}