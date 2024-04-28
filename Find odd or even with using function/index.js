function checkNumber(number) {
    if (number % 2 === 0) {
        return "it's an een number";
    } else {
        return "it's an odd number";
    }
}

let number = 4;
console.log(checkNumber(number)); 
