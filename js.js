//create a callback

function boilingMilk(callback) {
  console.log('milk is boiling...')
  setTimeout(() => {
    console.log('add tea powder');
    callback()    
  }, 1000);  
}

function addTeaPowder(callback) {
  console.log('tea powder added');
  setTimeout(() => {
    console.log('now add sugar');
    callback()
  }, 1000)
}

function addSugar(callback){
  console.log('sugar added');
  setTimeout(() => {
    console.log('turn of the gas before milk spill');
    callback()    
  }, 1000)  
}

function turnOff() {
  console.log('gas offed');
}

// boilingMilk(() => {
//   addTeaPowder(() => {
//     addSugar(() => {
//       turnOff()
//     })
//   })
// })

// Create your own callback chain:  Simulate ordering pizza:
// Prepare dough.
// Add toppings.
// Bake pizza.
// Deliver pizza.

function preparePizza(next) {
  console.log('preparing...');
  // setTimeout(() => next(null), 1000)
  return new Promise(resolve => setTimeout(resolve, 1000))
}

function addToppings(next){
  console.log('adding toppings...');
  // setTimeout(() => next('Out of cheese :('), 1000)
  return new Promise(resolve => setTimeout(resolve, 1000))
}

function bake(next){
  console.log('baking...');
  // setTimeout(() => next(null), 1000)
  return new Promise(resolve => setTimeout(resolve, 1000))
}

function deliver(err) {
  if (err) console.log(`oops!, ${err}`);
  else console.log('finally delivered.');  
}

// preparePizza((err) => {
//   if (err) return deliver(err)
//   addToppings((err) => {
//     if (err) return deliver(err)
//     bake((err) => {
//       if (err) return deliver(err)
//       deliver()
//     })
//   })
// })

preparePizza()
  .then(addToppings).then(bake).then(deliver).catch(err => console.error('Oops, ${err}'))

//__________________________________________________________________________


// function sayHello(name) {
//   return `Hello, ${name}!`;
// }

let sayHello = name => `Hello, ${name}!`
console.log(sayHello('Labeeb'));

// function sum(a, b) {
//   const result = a + b;
//   return result;
// }


let sum = (a, b) => {
  const result = a+b 
  return result
}

console.log(sum(0, 7))

//______________________________________________________________


