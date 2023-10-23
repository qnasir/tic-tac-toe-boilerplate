/// list down all the winning combinations

let winningCombinations = [
    [1, 2, 3],   //vertical
    [4, 5, 6],   //vertical
    [7, 8, 9],   //vertical
    [1, 4, 7],   //horizontal
    [2, 5, 8],   //horizontal
    [3, 6, 9],   //horizontal
    [1, 5, 9],   //diagonal
    [3, 5, 7],   //diagonal
]

// accessing all boxes
let boxelement = document.querySelectorAll(".box")

// providing event listener to all the boxes
for (elem of boxelement) {
    elem.addEventListener("click", handleClick);
}

let click = 0;
let isWon = false;
let xAttempts = [];
let oAttempts = [];

function handleClick(event){
    console.log(event.target.id)
    let id = event.target.id;
    let ptag = document.createElement("p");
    ptag.style.color = "#FAB201"
    ptag.textContent = "X";
    boxelement[id-1].appendChild(ptag)

    if (click%2 == 0) {
        ptag.textContent = "X"
        click++
        xAttempts.push(parseInt(id));
        result(xAttempts, "X")
    } else {
        ptag.textContent = "O"
        click++
        oAttempts.push(parseInt(id));
        result(oAttempts, "O")
    }
}

let resultBox = document.getElementById("result")
let messageBox = document.getElementById("message")

function result(playerArray, player) {
    for (let i=0; i<winningCombinations.length; i++) {
        let check = true;
        for (let j=0; j<winningCombinations[i].length; j++) {
            if(playerArray.includes(winningCombinations[i][j]) == false ) {
                check = false;
                break;
            }
        }
        if (check == true) {
            isWon = true;
            resultBox.style.visibility = "visible"
            messageBox.textContent = player + " " + "Won the match"
        }
    }
    
    if (click == 9 && isWon == false) {
        resultBox.style.visibility = "visible"
        messageBox.textContent = "It's a Draw"
    }

}

// refreshing page through button
let btn = document.getElementById("button").addEventListener("click", ()=>{
    location.reload();
    //history.go(0)
})
