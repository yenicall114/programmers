function solution(numbers, direction) {
    var answer = [];
    if (direction === "right") {
        return [numbers[numbers.length - 1], ...numbers.splice(0, numbers.length - 1)]
    } else {
        return [...numbers.splice(1), numbers[0]]
    }
}