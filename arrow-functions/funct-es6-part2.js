const vacationSpots = [
  {name: "Jamaica", cost: 500.00, climate: "Warm"},
  {name: "Ireland", cost: 400.00, climate: "Mild"},
  {name: "Maldives",   cost: 1000.00, climate: "Warm"},
  {name: "Alaska", cost: 800.00, climate: "Cold"},
  {name: "Rome", cost: 700.00, climate: "Mild"}
]
console.log(vacationSpots);

// Now we know about arrow functions,
// Let's refactor this example to use them
const costOfWarmCountries = vacationSpots
  .filter(function(spots){
    return spots.climate === "Warm"
  })
  .map(function(spots){
    return spots.cost
  })
  .reduce(function(prev, value){
    return (prev || 0) + value
  })
console.log("\nThe cost to visit the warm countries is:", costOfWarmCountries);
