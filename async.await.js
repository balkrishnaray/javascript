let stock = {
  fruits: ["apple", "banana", "grapes", "orange"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let Is_shop_open = true;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (Is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("shop is closed"));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stock.fruits[2]} was selected`);
    await time(0);
    console.log(`production has started`);
    await time(2000);
    console.log(`fruits has been chopped`);
    await time(1000);
    console.log(`${stock.liquid[0]} and ${stock.liquid[1]} was added`);
    await time(1000);
    console.log(`starting the machine`);
    await time(2000);
    console.log(`${stock.holder[0]}  was selected`);
    await time(3000);
    console.log(`${stock.toppings[0]} was added for toppings`);
    await time(1000);
    console.log(`icecream was served`);
  } catch (error) {
    console.log("customer left", error);
  } finally {
    console.log("day ended shop is closed");
  }
}

kitchen();
