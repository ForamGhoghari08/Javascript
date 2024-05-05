function toLowerCase(char) {
    return char.toLowerCase();
}

function wordToLowerCase(word) {
    let lowerCaseWord = '';
    for (let i = 0; i < word.length; i++) {
        lowerCaseWord += toLowerCase(word[i]);
    }
    return lowerCaseWord;
}

function arrayToLowerCase(array) {
    let lowerCaseArray = [];
    for (let i = 0; i < array.length; i++) {
        lowerCaseArray.push(wordToLowerCase(array[i]));
    }
    return lowerCaseArray;
}

let array = ["RED", "AND", "WHITE"];
let lowerCaseArray = arrayToLowerCase(array);
console.log(lowerCaseArray.join('\n'));
