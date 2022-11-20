function solution(s) {
    const odd = s[Math.floor(s.length / 2)]
    const even = s[Math.floor(s.length / 2) - 1]

    return s.length % 2 === 0 ? even + odd : odd
}