function solution(array, n) {
    const arr = array.sort((a, b) => a - b).map((el) => el - n)

    for (let i=0; i<arr.length; i++) {
      if (arr[i] < 0) arr[i] *= -1
    }
    
    return array[arr.indexOf(Math.min(...arr))]
}