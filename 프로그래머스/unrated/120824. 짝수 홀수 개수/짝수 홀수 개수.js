function solution(num_list) {
    let a = 0;
    let b =0;
    num_list.forEach(el => el%2 === 0? a++: b++)
    // 요소를 2로 나눈 나머지가 0이면? a를 더하고 아니면 b를 더한다
    return [a,b];
}