class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get diameter() {
        return 2 * this.radius;
    }
    set diameter(diameter) {
        this.radius = diameter / 2;
    }
    get area() {
        return Math.PI * this.radius * this.radius;
    }
}

const cir1 = new Circle(4);
console.log(cir1.diameter);
console.log(cir1.radius0