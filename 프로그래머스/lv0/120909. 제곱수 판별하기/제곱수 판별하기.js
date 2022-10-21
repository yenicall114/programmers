function solution(n) {
    console.log(typeof n)
    var answer = 0;
    answer = Number.isInteger(Math.sqrt(n)) ===  true ? 1 : 2
    return answer;
}