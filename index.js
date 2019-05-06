// Add your Circle class here
const pi = Math.PI

class Circle {
    constructor(radius) {
        this.radius = radius 
    }

   get diameter() {
        return this.radius * 2
   }

   get circumference() {
       return this.diameter * pi
   }

   get area() {
       return this.radius * this.radius * pi
   }

   set diameter(diameter) {
      return this.radius = diameter / 2; 
   }

   set circumference(circumference) {
       return this.radius = circumference / (pi * 2);
   }

}