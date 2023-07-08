let array =[ 1,3,5,4,6];
// for (let index = 0; index < array.length; index++) {
//     console.log(array[index]);
    
// }

//for each loop
array.forEach((element) => {
    console.log(element*element);
});

//array . from
let myName = "balkrishna";
let arr = Array.from(myName);
console.log(arr);

// for ... of to print in term of array
for (let i of array){
    console.log(i);
}

//for...in
for (let item in array){
    console.log(array[item]);
}