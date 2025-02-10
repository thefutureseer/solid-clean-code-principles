# PYTHON
# The Open/Closed Principle states 
# that a class should be open for extension 
# but closed for modification. This means 
# that we should be able to add new 
# functionality without modifying existing 
# code, which we achieve using inheritance 
# and polymorphism.

# Example of clean SOLID code:
import math

# Base Shape class
class Shape:
    def __init__(self, color="black"):
        self.color = color  # All shapes have a color

    def draw(self):
        """Default draw method to be overridden in subclasses."""
        print(f"Drawing a shape with color: {self.color}")

    def change_color(self, new_color):
        """Method to change the color of the shape."""
        self.color = new_color
        print(f"The color of the shape has been changed to: {self.color}")

# Circle class extends Shape
class Circle(Shape):
    def __init__(self, radius, color="black"):
        super().__init__(color)  # Call the parent constructor to set the color
        self.radius = radius  # Circle-specific property: radius

    def draw(self):
        """Circle-specific draw method"""
        print(f"Drawing a circle with radius {self.radius} and color: {self.color}")
        print(f"Area of circle: {math.pi * self.radius ** 2}")

    def resize(self, new_radius):
        """Method to resize the circle by changing the radius"""
        self.radius = new_radius
        print(f"The radius of the circle has been changed to: {self.radius}")

# Rectangle class extends Shape
class Rectangle(Shape):
    def __init__(self, width, height, color="black"):
        super().__init__(color)  # Call the parent constructor to set the color
        self.width = width  # Rectangle-specific property: width
        self.height = height  # Rectangle-specific property: height

    def draw(self):
        """Rectangle-specific draw method"""
        print(f"Drawing a rectangle with width {self.width}, height {self.height}, and color: {self.color}")
        print(f"Area of rectangle: {self.width * self.height}")

    def resize(self, new_width, new_height):
        """Method to resize the rectangle by changing width and height"""
        self.width = new_width
        self.height = new_height
        print(f"The dimensions of the rectangle have been changed to: {self.width}x{self.height}")

# Square class extends Rectangle
class Square(Rectangle):
    def __init__(self, side_length, color="black"):
        # A square is a special case of a rectangle where width and height are equal
        super().__init__(side_length, side_length, color)

    def draw(self):
        """Square-specific draw method"""
        print(f"Drawing a square with side length {self.width} and color: {self.color}")
        print(f"Area of square: {self.width ** 2}")

    def resize(self, new_side_length):
        """Method to resize the square by changing side length"""
        self.width = new_side_length
        self.height = new_side_length
        print(f"The side length of the square has been changed to: {self.width}")

# Usage

# Create a Circle object, draw it, and modify its properties
circle = Circle(5, "red")
circle.draw()
circle.resize(10)
circle.draw()
circle.change_color("blue")
circle.draw()

# Create a Rectangle object, draw it, and modify its properties
rectangle = Rectangle(4, 6, "blue")
rectangle.draw()
rectangle.resize(8, 10)
rectangle.draw()

# Create a Square object, draw it, and modify its properties
square = Square(4, "green")
square.draw()
square.resize(6)
square.draw()
square.change_color("yellow")
square.draw()