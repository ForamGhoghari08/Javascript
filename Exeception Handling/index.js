
const Divide = (a, b) => {
    if (a == 0) {
        throw new Error("Invalid division a")
    }

    if (b == 0) {
        throw new Error("Invalid division b")
    }

    return a / b
}
console.log("Starting");

try {
    console.log(Divide(10, 0))
}
catch (error) {
    console.log("error : ")
}

console.log("Working")