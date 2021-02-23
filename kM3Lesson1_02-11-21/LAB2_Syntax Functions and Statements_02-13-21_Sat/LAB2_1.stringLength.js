function main(str1, str2, str3) {
    let sum = str1.length + str2.length + str3.length;
    let average = sum / 3;
    console.log(`${sum}\n${Math.floor(average)}`);
}

main('chocolate', 'ice cream', 'cake');
main('pasta', '5', '22.3');