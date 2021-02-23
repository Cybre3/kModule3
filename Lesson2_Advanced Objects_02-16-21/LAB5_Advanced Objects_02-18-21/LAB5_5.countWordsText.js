function main(arr) {

    let text = arr[0];
    let regex = /\w+/g;

    //Object
    let words = {};

    let wordsArr = text.match(regex);

    wordsArr.forEach(word => {
        let match = wordsArr.filter(a => a == word);
        words[word] = match.length;
    });

    console.log(JSON.stringify(words));
}

main(["Far too slow, you're far too slow."]);
main(['JS devs use Node.js for server-side JS.--JS for devs']);