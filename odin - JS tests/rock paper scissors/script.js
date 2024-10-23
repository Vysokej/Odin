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
/* 1 = rock / 2 = paper / 3 = scissors */
function game (user, AI) { /* if a is returned, AI won, if b then otherwise */ 
    /* Ths function can be optimised, inclused lots of repetitions, can be improved, not going to bother rn */
    AI = randomNum(3) /* This chooses randomly AI's gesture */
    if(user == AI) {
        return(Draw++)
    }
    else if(user == 1) { /* If user picked rock */
        if(AI == 2) {
            return("a")
        }
        else if (AI = 3) {
            return("b")
        }
    }
    else if(user == 2) { /* User chose paper */
        if(AI = 1) {
            return("b")
        }
        if(AI = 3) {
            return("a")
        }
    }
    else if(user == 3) { /* user chose scissors */
        if(AI == 1) {
            return("a")
        }
        if(AI == 2) {
            return("b")
        }
    }
}
function decide (userscore, AIscore) {
    if (game(user, AI) == a) {
        AIscore++
    }
}


 