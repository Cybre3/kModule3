function Rectangle(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
}

Rectangle.prototype.calcArea = function() {
    return this.width * this.height;
};

Rectangle.prototype.define = 'I am a Rectangle';

let rect1 = new Rectangle(4, 5, 'red');
let rect2 = new Rectangle(4, 5, 'red');
let rect3 = new Rectangle(4, 5, 'red');
let rect4 = new Rectangle(4, 5, 'red');
let rect5 = new Rectangle(4, 5, 'red');
console.log(rect1);
console.log(rect1.width); // 4
console.log(rect1.height); // 5
console.log(rect1.color); // Red
console.log(rect1.calcArea()); // 20
console.log(rect1.define);
