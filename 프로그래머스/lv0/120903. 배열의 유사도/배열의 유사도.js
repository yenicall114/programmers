function solution(s1, s2) {
    var answer = 0;
    return answer = s1.filter((i) => s2.includes(i)).length;
}