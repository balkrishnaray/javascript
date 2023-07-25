const changeBgColor = () => {
  document.body.firstElementChild.style.background = "red";
};
let b = document.body;
console.log("first child of b is : ", b.firstChild);
console.log("first element of b is :", b.firstElementChild);
