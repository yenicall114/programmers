function solution(n, k) {
    var answer = 0;
    // n=1 k=n/10
    // answer = (n * 12000) + (k * 2000) - ((n/10) * 2000) 
    answer = (n * 12000) + (k * 2000) - (Math.floor(n/10) * 2000)
    return answer;
}