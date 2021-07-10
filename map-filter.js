const numbers = [7, 9, 5, 8, 3, 56];
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//   const element = numbers[i];
//   const result = element * element;
//   output.push(result);
// }
// const result = numbers.map(function (element, index, array) {
//   return element * element;
// });

// const result = numbers.map((x) => x * x);

// const result = numbers.filter((x) => x > 5);
const result = numbers.find((x) => x > 5);
console.log(result);
