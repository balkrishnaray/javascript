let array = [ 1, 20, 30, 18, 6]
console.log(array,array.length);

// convert the array to string
let a = array.toString();
console.log(a);

// and & in between every string
let b = array.join(" & ")
console.log(b);

// push number to last
let c = array.push(10);
console.log(array);

//pop number from last
let d = array.pop();
console.log(array);

//remove the first number and display array
let e = array.shift();
console.log(e,array);

// add the number in first and display array
let f = array.unshift(5);
console.log(f,array);   