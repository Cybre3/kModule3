function main() {
    return {
        add: (vect1, vect2) => {
            let [x1, y1] = vect1;
            let [x2, y2] = vect2;
            console.log(`[ ${x1 + x2}, ${y1 + y2} ]`);
        },
        multiply: (vect1, scalar) => {
            let [x1, y1] = vect1;
            console.log(`[ ${x1 * scalar}, ${y1 * scalar} ]`);
        },
        length: vect1 => {
            let [x1, y1] = vect1;
            let addSquared = ((x1 ** 2) + (y1 ** 2));
            console.log(`${Math.sqrt(addSquared)}`);
        },
        dot: (vect1, vect2) => {
            let [x1, y1] = vect1;
            let [x2, y2] = vect2;
            console.log(`${(x1 * y1) + (x2 * y2)}`);
        },
        cross: (vect1, vect2) => {
            let [x1, y1] = vect1;
            let [x2, y2] = vect2;
            console.log(`${(x1 * y2) - (y1 * x2)}`);
        },
    };
}

solution = main();
solution.add([1, 1], [1, 0]);
solution.multiply([3.5, -2], 2);
solution.length([3, -4]);
solution.dot([1, 0], [0, -1]);
solution.cross([3, 7], [1, 0]);