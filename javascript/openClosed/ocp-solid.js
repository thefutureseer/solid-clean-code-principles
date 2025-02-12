//Open / Close
//Open to extention, closed to change or modification
//Needs to be able to be extend functionality without modifying code
//Achieved through polymorphism (e.g., inheritance, interfaces, or composition).

// GOOD because class circle can't be used for another class like square, 
// nor rectangle or mix match so we put them in 
// there own reusable class and extend them that way
//No need to modify the code in the module when done properly
// Base Shape class
class Shape {
  //All shapes will have whats on this/constructor.
  constructor(color = "black") {
    this.color = color; // All shapes will have a color
  }

  // Default draw method (to be overwritten in subclass)
  draw() {
    console.log(`Drawing a shape with color: ${this.color}`);
  }

  // Method to change the color of the shape
  changeColor(newColor) {
    this.color = newColor;
    console.log(`The color of the shape has been changed to: ${this.color}`);
  }
}

// Circle class extends Shape
class Circle extends Shape {
  constructor(radius, color = "black") {
    super(color); // Call the parent constructor to set the color
    this.radius = radius; // Circle/class -specific property: radius
  }

  // Circle-specific draw method
  draw() {
    console.log(`Drawing a circle with radius ${this.radius} and color: ${this.color}`);
    console.log(`Area of circle: ${Math.PI * this.radius * this.radius}`);
  }

  // Method to resize the circle by changing the radius
  resize(newRadius) {
    this.radius = newRadius;
    console.log(`The radius of the circle has been changed to: ${this.radius}`);
  }
}

// Rectangle class extends Shape
class Rectangle extends Shape {
  constructor(width, height, color = "black") {
    super(color); // Call the parent constructor to set the color with super func
    this.width = width; // Rectangle-specific property: width
    this.height = height; // Rectangle-specific property: height
  }

  // Rectangle-specific draw method
  draw() {
    console.log(`Drawing a rectangle with width ${this.width}, height ${this.height}, and color: ${this.color}`);
    console.log(`Area of rectangle: ${this.width * this.height}`);
  }

  // Method to resize the rectangle by changing width and height
  resize(newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
    console.log(`The dimensions of the rectangle have been changed to: ${this.width}x${this.height}`);
  }
}

// Square class extends Rectangle
// Square is just a special case of Rectangle where width and height are equal
class Square extends Rectangle {
  constructor(sideLength, color = "black") {
    // Call the parent constructor and overwrite with equal width and height
    super(sideLength, sideLength, color); 
  }

  // Square-specific draw method
  draw() {
    console.log(`Drawing a square with side length ${this.width} and color: ${this.color}`);
    console.log(`Area of square: ${this.width * this.width}`);
  }

  // Method to resize the square by changing side length
  resize(newSideLength) {
    this.width = newSideLength;
    this.height = newSideLength;
    console.log(`The side length of the square has been changed to: ${this.width}`);
  }
}

// Usage

// Create a circle, draw it, and modify its properties
const circle = new Circle(5, "red");
circle.draw(); 
// Output:
// Drawing a circle with radius 5 and color: red
// Area of circle: 78.53981633974483

circle.resize(10); 
// Output: 
// The radius of the circle has been changed to: 10
circle.draw(); 
// Output:
// Drawing a circle with radius 10 and color: red
// Area of circle: 314.1592653589793

circle.changeColor("blue");
// Output:
// The color of the shape has been changed to: blue
circle.draw(); 
// Output:
// Drawing a circle with radius 10 and color: blue
// Area of circle: 314.1592653589793

// Create a rectangle, draw it, and modify its properties
const rectangle = new Rectangle(4, 6, "blue");
rectangle.draw(); 
// Output:
// Drawing a rectangle with width 4, height 6, and color: blue
// Area of rectangle: 24

rectangle.resize(8, 10);
// Output:
// The dimensions of the rectangle have been changed to: 8x10
rectangle.draw(); 
// Output:
// Drawing a rectangle with width 8, height 10, and color: blue
// Area of rectangle: 80

// Create a square, draw it, and modify its properties
const square = new Square(4, "green");
square.draw(); 
// Output:
// Drawing a square with side length 4 and color: green
// Area of square: 16

square.resize(6);
// Output:
// The side length of the square has been changed to: 6
square.draw(); 
// Output:
// Drawing a square with side length 6 and color: green
// Area of square: 36

square.changeColor("yellow");
// Output:
// The color of the shape has been changed to: yellow
square.draw(); 
// Output:
// Drawing a square with side length 6 and color: yellow
// Area of square: 36


//BAD Example 
// JavaScript code:
//Requires modification
//Too many different functions in one class
//Using a string this way is not good for scaling
// class Shape {
//  draw(builtInShape) {
//   if(builtInShape === "circle") {
//     console.log("cirlcle");
//   } else if(builtInShape === "rectangle") {
//     console.log("rectangle");
//   } else if(builtInShape === "square") {
//     console.log("square")
//   } else {
//     console.log("unknown class")
//   }
//  }
// };

var iceCreamFlavor = ["choc", "vanil"];
var iceCreamMaker = {
  makeIceCream(flavor){
    if(iceCreamFlavors.indexOf(flavor) > -1){
      console.log("success")
    } else {
      console.log("failed ")
    }
  }

}