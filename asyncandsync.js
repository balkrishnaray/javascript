//synchronous
console.log("hello ");
console.log("i ");
console.log("am ");
console.log("studying");
console.log("Web development");

//asynchronous
console.log("hello ");
setTimeout(() => {
  console.log("Web development");
}, 3000);
console.log("am ");
console.log("i ");
console.log("studying");
