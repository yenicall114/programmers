function solution(my_string) {
    let strArr = my_string.split("")
    return strArr.map(el => (el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase())).join("")  
}