function solution(s) {
    return s.toLowerCase().replace(/\b[a-z]/g, el => el.toUpperCase());
}