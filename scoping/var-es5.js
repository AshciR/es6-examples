// In ES5 there is only one type of variable scope; function scope
for (var i = 0; i < 10; i++){
  console.log(i)
}
console.log('after loop', i);

/* The code block below shows an example of variables
being function scoped. If you move line 14
after the counter() call you'll get a runtime error. */
// function counter(){
//   for (var i = 0; i < 10; i++){
//     console.log(i)
//   }
//   console.log('after loop', i);
// }
// counter()

/* To counteract the scoping problem people would
use immideately invoked function expressions (IIFEs) */
// (function (){
//   for (var i = 0; i < 10; i++){
//     console.log(i)
//   }
//   console.log('after loop', i);
// })()

// N.B. Don't forget to mention variable hoisting!
