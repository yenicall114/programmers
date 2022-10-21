function solution(numbers) {
    const arr = numbers.sort(function(a, b) {
      return a - b;
    });
    return arr[arr.length - 1] * arr[arr.length - 2]
}