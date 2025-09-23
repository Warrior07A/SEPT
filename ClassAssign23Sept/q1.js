// Q1. Triangle class with area
// Description: Create a Triangle class that stores base and height. Add a method to calculate its area.
// const t = new Triangle(10, 5);
// console.log("Triangle area:", t.area());  //OP: Triangle area: 25

class Triangle{
    constructor(b,h){
        this.b=b;
        this.h=h;
    }
    area(){
        return(1/2*this.b*this.h);
    }
}


const t = new Triangle(10, 5);
console.log("Triangle area:", t.area());  //OP: Triangle area: 25