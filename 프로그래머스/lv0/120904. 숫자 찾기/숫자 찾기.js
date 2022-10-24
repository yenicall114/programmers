function solution(num, k) {
    var a = num.toString().split("").map(Number).indexOf(k)
    if (a != -1) return a + 1
    else return -1
}