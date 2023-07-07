let num = [5,2,1,20,30,43];
let num1 = [51,24,12,20,30,43];
console.log(num.length);
delete num[0];
console.log(num);
console.log(num.length);

let new_num = num.concat(num1);
console.log(new_num);

//sort method
let compare = (a,b)=>{
    return b - a;//give array in descending order
}
let num3 = [,-10,0,10,2,1,102,40,49,104,54,523];
num3.sort(compare);
console.log(num3);
//reverse the given array
num3.reverse();
console.log(num3); 

//splice and slice
let num4 = [10,20,1,3,4,60,1,2,7];
//first is start ,second is delelte and all other to be added.
num4.splice(2,3,33,44,55);//returns deleted value
console.log(num4);

let num5 = [ 20,42,30,1,4,10];
let newnum = num5.slice(1,4);
console.log(newnum);