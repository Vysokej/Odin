console.log("test")

let number = parseInt(prompt("Input a number"))

for (let i = 1; i <= number; i++) {
    if (i % 2 === 0 && i % 6 === 0 ) {
        console.log(i + " is a super number!")
    }
    else if (i % 3 === 0) {
        console.log(i + " is dividable by 3") 
    }
    else if (i % 4 === 0) {
        console.log(i + " is dividable by 4...")
    }
    else {
        console.log(i + " is a bad number")
    }
}