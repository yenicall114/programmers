function solution(n) {
    var answer = 0;
    answer = n.toString().split("").map(Number).reduce((acc, cur) => acc + cur);
    return answer;
}