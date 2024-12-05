// //hoisting
// greet()
// console.log(b);
// console.log(a);


// function greet(){
//   console.log('hello world')
// }

// let a = 10
// var b = 20

for(let i=0;i<10;i++){
  setTimeout(()=>{
      console.log(i)
  },1000)
}

for(var i=0;i<10;i++){
  setTimeout(()=>{
      console.log(i)
  },1000)
}


let num=0;
console.log(num++)
console.log(++num)
console.log(num)



function counter(){
  let count = 0
  function a (){
      return count++
  }
  return a
}
let b = counter()
console.log(b())
console.log(b())
console.log(b()) 