let stock = {
  fruits: ["apple", "banana", "grapes", "orange"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let Is_shop_open = true;

let toppingsChoice = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("which toppings would you like?"));
    }, 3000);
  });
};

async function kitchen() {
  console.log(" A ");
  console.log(" B ");
  console.log(" C ");
  await toppingsChoice();
  console.log(" D ");
  console.log(" E ");
}

kitchen();
console.log("doing the dishes");
console.log("cleaning the tables");
console.log("taking the orders");
