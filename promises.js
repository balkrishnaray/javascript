let stock = {
  fruits: ["apple", "banana", "grapes", "orange"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let Is_shop_open = true;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (Is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("Our shop is closed"));
    }
  });
};

order(2000, () => console.log(`${stock.fruits[1]} was selected`))
  .then(() => {
    return order(0, () => console.log("production has started"));
  })

  .then(() => {
    return order(2000, () => console.log("the fruit was chopped"));
  })

  .then(() => {
    return order(1000, () => {
      console.log(`${stock.liquid[0]} and ${stock.liquid[1]} was selected`);
    });
  })

  .then(() => {
    return order(1000, () => console.log("Start the machine"));
  })

  .then(() => {
    return order(2000, () =>
      console.log(`${stock.holder[2]} was selected as holder`)
    );
  })

  .then(() => {
    return order(3000, () =>
      console.log(`${stock.toppings[0]} was selected as toppings`)
    );
  })

  .then(() => {
    return order(2000, () => console.log("Ice-cream is served"));
  })

  .catch(() => {
    console.log("Our customer left");
  });
