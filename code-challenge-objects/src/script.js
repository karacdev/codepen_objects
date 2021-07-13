// 1 - white rabbit
const rabbit = { 
  color: "white",
  checkWatch() {
    console.log(`A ${this.color} rabbit checks his watch and exclaims, 'I\'m late!'`);
  }
};
rabbit.checkWatch();

// 2 - spaceship
const spaceship = { 
  name: "Millennium",
  launch() {
    console.log(`You have launched the spaceship ${this.name}`);
  }
};
 spaceship.launch(); 

// 3 - shopping cart
/*const cart = {
  contents: [],
  add.Item(item)
};
cart.addItem("laptop");
console.log("The cart contains:", cart.contents);*/

 //4 - lever
const lever  = {
  stamp: "ACME",
  pull() {
    console.log(`An anvil stamped​ ${this.stamp} drops on your head.`)
  }
};
lever.pull();

// 5 - Your object here
const kitten = {
  food: "treats",
  pull() {
    console.log(`The kitten loves ${this.food}.`)
  }
};
kitten.pull();