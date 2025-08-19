
function cookFood(food, callback) {
  console.log(`cooking ${food}...`);
  setTimeout(() => {
    console.log(`${food} is ready!`);
    callback();
  }, 2000);
}

function serveFood() {
  console.log("Serving the food to the customer!");
}
cookFood("pizza", serveFood);
