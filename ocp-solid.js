//Open / Close
//Open to extention, closed to change
//Needs to be able to be extend functionality without modifying code

// GOOD
abstract class Shape {
  abstract void draw();
}

class Circle extends Shape {
  void draw() { System.out.println("Drawing Circle"); }
}

class Rectangle extends Shape {
  void draw() { System.out.println("Drawing Rectangle"); }
}




//BAD
// class Shape {
//   void draw() {
//       System.out.println("Drawing shape");
//   }
// }

