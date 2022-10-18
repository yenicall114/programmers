function solution(dot) {
    if (dot[0] >= 1 && dot[1] >= 1) return 1
    if (dot[0] <= -1 && dot[1] >= 1) return 2
    if (dot[0] <= -1 && dot[1] <= -1) return 3
    if (dot[0] >= 1 && dot[1] <= -1) return 4
    var answer = 0;
    return answer;
}