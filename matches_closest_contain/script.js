let id1 = document.getElementById("id1");
console.log(id1);
let id2 = document.getElementById("id2");
let sp1 = document.getElementById("sp1");
console.log(id2);
console.log(id1.matches(".class"));
console.log(id1.matches(".box"));
console.log(id2.matches(".box"));
console.log(id2.matches(".second"));
console.log(sp1.closest("#sp1")); //check it parents if the id or class is present and again check parents parent
console.log(id1.contains(sp1));
console.log(sp1.contains(sp1));
console.log(sp1.contains(id1));
