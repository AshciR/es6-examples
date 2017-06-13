// let allows reassignment after variable creation
let x = 1
x = 2
console.log(x)

// const does not allow reassignment.
// if you're familiar with Java, consider it as equivalent of 'final' variable
// const y = 1
// y = 2 // this is going to through a RTE because y value can't be reassigned
// console.log(y)

// However, b/c it can't be reassigned doesn't mean it's not mutable
const z = {
  point: 3
}
z.point = 4 // realize that we can change the value inside the object
console.log(z);

// Note that we're still not allowed to reassign the object though
z = {
  point: 5
}
