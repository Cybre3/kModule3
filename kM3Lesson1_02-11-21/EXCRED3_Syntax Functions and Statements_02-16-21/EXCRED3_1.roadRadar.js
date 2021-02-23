function main(arr) {
    let [speed, area] = arr;
    let speedLimitsKmh = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    };

    if (speed > speedLimitsKmh[area] + 40) {
        console.log(`reckless driving`);
    } else if (speed > speedLimitsKmh[area] + 20) {
        console.log(`excessive speeding`);
    } else if (speed > speedLimitsKmh[area]) {
        console.log(`speeding`);
    }
}

main([40, 'city']);
main([21, 'residential']);
main([120, 'interstate']);
main([200, 'motorway']);
