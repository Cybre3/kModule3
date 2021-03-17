class Circle {
    constructor(radius) {
        this._radius = radius;
    }

    get radius(){
        return this._radius;
    }
}

let c = new Circle(3);
console.log(c.radius);