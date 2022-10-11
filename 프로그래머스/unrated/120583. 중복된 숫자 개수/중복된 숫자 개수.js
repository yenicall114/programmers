// function solution(array, n) {
//     let arr = []
//     for (let i=0; i<array.length; i++) {
//         if (i === n) arr.push(n)
//       console.log("arr", arr)
//     }
//     var answer = arr.length;
//     return answer;
// }

function solution(array, n) {
  return array.filter(a => a === n).length;
}