/* 
d=(x2−x1)2+(y2−y1)2
*/

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        // let { x: x1, y: y1 } = p1;
        // let { x: x2, y: y2 } = p2;
        let xDiff = a.x - b.x;
        let yDiff = a.y - b.y;
        
        // return Math.sqrt(((x2 − x1) ** 2) + ((y2 − y1) ** 2));
        return Math.sqrt(xDiff ** 2 - yDiff ** 2);
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
