function solution(my_string) {
    // let arr = []
    // const a = my_string.split("")
    // for (let i=0; i<a.length; i++) {        
    //     if (a.indexOf(a[i]) === i) continue;
    //     arr.push(i)
    //     console.log(arr)
    // return arr
    // }
    return [...new Set(my_string)].join("")
    
}