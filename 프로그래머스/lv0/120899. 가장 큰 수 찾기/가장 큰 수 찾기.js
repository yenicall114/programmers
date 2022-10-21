function solution(array) {
    var answer = [];
    const max = Math.max(...array);
    const i = array.indexOf(max)
    answer = [max, i]
    return answer;
}