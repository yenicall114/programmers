function solution(numbers) {
    const arr = numbers.sort((a, b) => b - a)
    const minus = arr[arr.length - 1] * arr[arr.length - 2]
    const plus = arr[0] * arr[1]
    return minus > plus ? minus : plus
}