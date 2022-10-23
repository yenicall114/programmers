function solution(my_string) {
    return my_string.split("").map(Number).join(",").match(/\d+/g).map(el => parseInt(el)).reduce((a, c) => a + c)
}