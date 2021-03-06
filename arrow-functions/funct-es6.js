const vacationSpots = [
  {name: "Jamaica", cost: 500.00, climate: "Warm"},
  {name: "Ireland", cost: 400.00, climate: "Mild"},
  {name: "Maldives",   cost: 1000.00, climate: "Warm"},
  {name: "Alaska", cost: 800.00, climate: "Cold"},
  {name: "Rome", cost: 700.00, climate: "Mild"}
]
console.log(vacationSpots);

// Cool thing about arrow functions, they allow you to remove the boilerplate
// code like 'function', and leave the business logic you care about.
const mildCheapSpots = vacationSpots
  .filter((spots) => {
    return spots.climate === "Mild"
  })
  .filter((spots) => {
    return spots.cost <= 500.00
  })
console.log("\nThe mild and cheap vacations are:", mildCheapSpots);

// // But wait, there's more! If the logic fits on one line, you can further remove
// // the 'return' statement, curly brackets, and the parameter parentheses.
// const mildCheapSpots = vacationSpots
//   .filter(spots => spots.climate === "Mild")
//   .filter(spots => spots.cost <= 500.00)
// console.log("\nThe mild and cheap vacations are:", mildCheapSpots);
