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
  setTimeout(() => next(), 1000)
}

function addToppings(next){
  console.log('adding toppings...');
  setTimeout(() => {next()}, 1000)
}

function bake(next){
  console.log('baking...');
  setTimeout(() => next(), 1000)
}

function deliver() {
  console.log('finally delivered.');
}

preparePizza(() => {
  addToppings(() => {
    bake(() => {
      deliver()
    })
  })
})