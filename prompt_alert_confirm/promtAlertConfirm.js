alert("Warning");
let a = prompt("Enter the value of a");
a = Number.parseInt(a);
document.write("You entered a " + typeof a);
document.write(a);

let b = confirm(" Do you want to code");
if (b) {
  document.write(" you can code ");
} else {
  document.write(" dont code go home");
}
