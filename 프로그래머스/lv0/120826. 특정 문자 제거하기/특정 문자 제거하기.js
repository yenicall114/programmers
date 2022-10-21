function solution(my_string, letter) {
    var answer = '';
    const regex = /\${letter}/g;
    answer = my_string.split(letter).join("")
    console.log(answer)
    return answer;
}