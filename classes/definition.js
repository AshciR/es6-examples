// How to define classes prior to ES6 (the dark days...)
function Shape(id, x, y){
  this.id = id;
  this.move(x,y);
};

Shape.prototype.move = function (x, y) {
  this.x = x;
  this.y = y;
};

var square = new Shape('square', 2, 2);
console.log(square);

var rectangle = new Shape('rectangle', 4, 2);
console.log(rectangle);

// How to define classes in ES6 (Thank God!)
class ES6Shape {
  constructor(id, x, y) {
    this.id = id
    this.move(x, y)
  }
  move(x, y){
    this.x = x
    this.y = y
  }
}

const newSquare = new ES6Shape('new square', 2, 2);
console.log(newSquare);

var newRectangle = new ES6Shape('new rectangle', 4, 2);
console.log(newRectangle);
