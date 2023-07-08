let arr= [ 14,32,53];
//arr.map method
let a = arr.map((value,index,array)=>{
    console.log(value,index,array);
    return value + 1;
})
console.log(a);

//arr.filter method
let arr1=[10,40,2,1,6,45]
let b = arr1.filter((val)=>{
    console.log(val); 
    return val<10;
})
console.log(b);
console.log(arr1);

//arr.reduce method (pass first two then add with third, then add all with fourth)
let arr2 = [ 1,3,5,2,6,3];
let new_arr = arr2.reduce((v1,v2)=>{
    return v1 + v2;
})
console.log(new_arr);
