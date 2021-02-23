function main(stringArr) {
    let delimiter = stringArr.pop();
    console.log(stringArr.join(delimiter));
}

main(['One', 'Two', 'Three', 'Four', 'Five', '-']);
