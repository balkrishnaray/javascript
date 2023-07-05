let Typing_speed = [ 100, 60, 70, 80, 50, 40, 30];
console.log(Typing_speed[0]);
console.log(Typing_speed[1]);
console.log(Typing_speed[2]);
console.log(Typing_speed[3]);
console.log(Typing_speed[4]);
console.log(Typing_speed.length);


//for loop
for (let index = 0; index < Typing_speed.length; index++) {
    if (Typing_speed[index]<= 50) {
        console.log(Typing_speed[index])
    } else {

        console.log("cant print as " + Typing_speed[index] + " is greater than 50")
    }
    
    
}
console.log("\n");

//while loop
let index = 0;
while (Typing_speed[index]>50) {
    console.log(Typing_speed[index]);
    index++;
}
console.log("\n");

//do while loop
{
let index = 0;
do {
    console.log(Typing_speed[index]);
    index++;
} while (Typing_speed[index] != 50);
}