//practice question 1
// let num = [ 10,2,4,32,40];
// let a = prompt("Enter a number: ");
// let b = Number.parseInt(a);
// num.push(b);
// console.log(num);

//practice question 1
let num2 = [10, 2, 4, 32, 40];
do {
  let a = prompt("Enter a number: ");
  a = Number.parseInt(a);
  num2.push(a);
  console.log(num2);
} while (a != 0);
