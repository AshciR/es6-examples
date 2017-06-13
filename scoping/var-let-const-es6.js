// In ES6 they introduced two new keywords which allows us
// to limit the scope of our variables, let and const
var i = 9999
console.log('the value of i before the loop:', i)
for (let i = 0; i < 10; i++){
  console.log(i)
}

// Use to demonstrate the variable hoisting and how
// let still limits the scope
// if (true){
//   let i = 7777 // change this to var and you'll see the final value change
// }

// should be the inital b/c 'i' was limited to inside the loop
console.log('after loop', i)
