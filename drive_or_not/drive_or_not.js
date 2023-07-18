const canDrive = (age) => {
  return age >= 18 ? true : false;
};
let restart = true;
while (restart) {
  let age = Number.parseInt(prompt("Enter your age"));
  if (age < 0) {
    console.error("Please enter a valid age: ");
    break;
  }
  if (canDrive(age)) {
    alert("You can drive");
  } else {
    alert("You can't drive");
  }
  restart = confirm("do you want to continue again? ");
}
