console.log("Welcome to rock, paper, scissors")
let user = parseInt((prompt("Choose either rock, paper, or scissors by typing 1, 2, or 3 respectively for your choice")))
let youChose = "You chose "
function name (user) {
    if (user == 1) {
        return(youChose + "rock")
    }
    else if (user == 2) {
        return(youChose + "paper")
    }
    else if (user == 3) {
        return(youChose + "scissors")
    }
    else {
        return("null")
    }
}
console.log(name(user))
let userscore = 0
let AIscore = 0
let AI = 0
let Draw = 0
function randomNum(max) {
    return(Math.floor(Math.random() * max))
}

function game (user, AI, userscore, Aiscore) {
    AI = randomNum(3)
    if(user == AI) {
        return(Draw++)
    }
    else if(user == 1) { /* If user picked rock */
        if(user < AI) {

        }
    }
}


