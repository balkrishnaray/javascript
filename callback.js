//icecream order process
let stock = {
  fruits: ["apple", "banana", "grapes", "orange"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let order = (Fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`${stock.fruits[Fruit_name]} was selected`);
    call_production();
  }, 2000);
};

let production = () => {
  setTimeout(() => {
    console.log("production has started");
    setTimeout(() => {
      console.log("the fruits has been chopped ");
      setTimeout(() => {
        console.log(
          `${stock.liquid[0]} and ${stock.liquid[1]} has been added.`
        );
        setTimeout(() => {
          console.log("The machine was started");
          setTimeout(() => {
            console.log(`ice-cream was placed on the ${stock.holder[0]}`);
            setTimeout(() => {
              console.log(`${stock.toppings[0]} was added on top`);
              setTimeout(() => {
                console.log("serve the icecream");
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0);
};
order(0, production);
