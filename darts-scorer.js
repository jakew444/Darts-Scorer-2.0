let homePage = document.getElementById("home-page-body");
let gamePage = document.getElementById("game-page-body");

if (homePage) {
    enableBtn();
    document.getElementById("start-match-button").onclick = function() {
        setsRadio();
        legsRadio();
        startScoreRadio(); 
        assigningPlayerName();
        throwFirst();
    } 
} else if (gamePage) {
    gamePageInput();
    runGame();
}
























function enableBtn() {
    let setsRadioBtns = [
        document.querySelector("#sets-radio-1"),
        document.querySelector("#sets-radio-2"),
        document.querySelector("#sets-radio-3")
    ];
    let setsSelected = false;

    let legsRadioBtns = [
        document.querySelector("#legs-radio-1"),
        document.querySelector("#legs-radio-2"),
        document.querySelector("#legs-radio-3"),
        document.querySelector("#legs-radio-4"),
        document.querySelector("#legs-radio-5")
    ];
    let legsSelected = false;

    let scoreRadioBtns = [
        document.querySelector("#start-radio-1"),
        document.querySelector("#start-radio-2")
    ];
    let scoreSelected = false;

    let throwRadioBtns = [
        document.querySelector("#throw-radio-1"),
        document.querySelector("#throw-radio-2")
    ];
    let throwSelected = false;

    let startButton = document.querySelector("#start-match-button");

    for (let i = 0; i < setsRadioBtns.length; i++) {
        setsRadioBtns[i].addEventListener('click', function () {
            setsSelected = true;
            checkAllSelected();
        });
    }

    for (let i = 0; i < legsRadioBtns.length; i++) {
        legsRadioBtns[i].addEventListener('click', function () {
            legsSelected = true;
            checkAllSelected();
        });
    }

    for (let i = 0; i < scoreRadioBtns.length; i++) {
        scoreRadioBtns[i].addEventListener('click', function () {
            scoreSelected = true;
            checkAllSelected();
        });
    }

    for (let i = 0; i < throwRadioBtns.length; i++) {
        throwRadioBtns[i].addEventListener('click', function () {
            throwSelected = true;
            checkAllSelected();
        });
    }

    function checkAllSelected() {
        if (setsSelected && legsSelected && scoreSelected && throwSelected) {
            startButton.disabled = false;
        }
    }
}










function setsRadio () {
    if (document.getElementById("sets-radio-1").checked) {
        localStorage.setItem("best-of-sets", document.getElementById("sets-radio-1").value);
        localStorage.setItem("winning-sets", 1);
    } else if (document.getElementById("sets-radio-2").checked) {
        localStorage.setItem("best-of-sets", document.getElementById("sets-radio-2").value);
        localStorage.setItem("winning-sets", 2);
    } else if (document.getElementById("sets-radio-3").checked) {
        localStorage.setItem("best-of-sets", document.getElementById("sets-radio-3").value);
        localStorage.setItem("winning-sets", 3);
    }
}
function legsRadio () {
    if (document.getElementById("legs-radio-1").checked) {
        localStorage.setItem("first-to-legs", document.getElementById("legs-radio-1").value);
    } else if (document.getElementById("legs-radio-2").checked) {
        localStorage.setItem("first-to-legs", document.getElementById("legs-radio-2").value);
    } else if (document.getElementById("legs-radio-3").checked) {
        localStorage.setItem("first-to-legs", document.getElementById("legs-radio-3").value);
    } else if (document.getElementById("legs-radio-4").checked) {
        localStorage.setItem("first-to-legs", document.getElementById("legs-radio-4").value);
    } else if ((document.getElementById("legs-radio-5").checked)) {
        localStorage.setItem("first-to-legs", document.getElementById("legs-radio-5").value);
    }
}

function startScoreRadio () {
    if (document.getElementById("start-radio-1").checked) {
        localStorage.setItem("starting-score", document.getElementById("start-radio-1").value);
    } else if (document.getElementById("start-radio-2").checked) {
        localStorage.setItem("starting-score", document.getElementById("start-radio-2").value);
    }
}
function assigningPlayerName () {
    localStorage.setItem("player-one-name", document.querySelector(".player-one-input-box").value);
    localStorage.setItem("player-two-name", document.querySelector(".player-two-input-box").value);

    if (document.querySelector(".player-one-input-box").value === '') {
        localStorage.setItem("player-one-name", "Player 1");
    }
    if (document.querySelector(".player-two-input-box").value === '') {
        localStorage.setItem("player-two-name", "Player 2");
    }
}
function throwFirst () {
    if (document.getElementById("throw-radio-1").checked) {
        localStorage.setItem("throw-first", 1);
    } else if (document.querySelector("#throw-radio-2").checked) {
        localStorage.setItem("throw-first", 2)
    }
}











function playerNames() {
    document.querySelector(".player-one-title").innerHTML = localStorage.getItem("player-one-name");
    document.querySelector(".player-two-title").innerHTML = localStorage.getItem("player-two-name");
    document.querySelector(".player-one-match-title").innerHTML = localStorage.getItem("player-one-name");
    document.querySelector(".player-two-match-title").innerHTML = localStorage.getItem("player-two-name");
}
function gamePageInput () {
    let sets = localStorage.getItem("best-of-sets");
    sets = parseInt(sets);
    document.querySelector(".selected-sets").innerHTML = "Sets: best of " + sets;
    let legs = localStorage.getItem("first-to-legs");
    legs = parseInt(legs);
    document.querySelector(".selected-legs").innerHTML = "Legs: first to " + legs;
    let startScore = localStorage.getItem("starting-score");
    document.querySelector(".player-one-score").innerHTML = startScore;
    document.querySelector(".player-two-score").innerHTML = startScore;
}
function assigningThrow () {
    let turn = localStorage.getItem("throw-first");
    let playerOneLegs = document.querySelector(".player-one-total-legs").innerHTML;
    let playerTwoLegs = document.querySelector(".player-two-total-legs").innerHTML;
    playerOneLegs = parseInt(playerOneLegs);
    playerTwoLegs = parseInt(playerTwoLegs);
    let playerOneSetCount = document.querySelector(".player-one-total-sets").innerHTML;
    let playerTwoSetCount = document.querySelector(".player-two-total-sets").innerHTML;
    playerOneSetCount = parseInt(playerOneSetCount);
    playerTwoSetCount = parseInt(playerTwoSetCount);

    let totalSetCount = playerOneSetCount + playerTwoSetCount;
    let totalLegCount = playerOneLegs + playerTwoLegs;


    if (turn === '1') {
        document.querySelector("#player-two-button").disabled = true;  
        if (totalSetCount === 0 || totalSetCount === 2 || totalSetCount === 4) {
            if (totalLegCount % 2 === 0) {
            document.querySelector("#player-one-button").disabled = false; 
            document.querySelector("#player-two-button").disabled = true;
            } else {
            document.querySelector("#player-one-button").disabled = true; 
            document.querySelector("#player-two-button").disabled = false;
            }
        } else {
            if (totalLegCount % 2 === 0) {
                document.querySelector("#player-one-button").disabled = true; 
                document.querySelector("#player-two-button").disabled = false;
                } else {
                document.querySelector("#player-one-button").disabled = false; 
                document.querySelector("#player-two-button").disabled = true;
                }
        }
    } else if (turn === '2') {
        document.querySelector("#player-two-button").disabled = true;  
        if (totalSetCount === 0 || totalSetCount === 2 || totalSetCount === 4) {
            if (totalLegCount % 2 === 0) {
            document.querySelector("#player-two-button").disabled = false; 
            document.querySelector("#player-one-button").disabled = true;
            } else {
            document.querySelector("#player-two-button").disabled = true; 
            document.querySelector("#player-one-button").disabled = false;
            }
        } else {
            if (totalLegCount % 2 === 0) {
                document.querySelector("#player-two-button").disabled = true; 
                document.querySelector("#player-one-button").disabled = false;
                } else {
                document.querySelector("#player-two-button").disabled = false; 
                document.querySelector("#player-one-button").disabled = true;
                }
        }
    } 
} 
















function scoring () {
    let playerOneScore = document.querySelector(".player-one-score").innerHTML;
    let playerTwoScore = document.querySelector(".player-two-score").innerHTML;
    let playerOneLegs = document.querySelector(".player-one-total-legs").innerHTML;
    let playerTwoLegs = document.querySelector(".player-two-total-legs").innerHTML;
    let legsInSet = localStorage.getItem("first-to-legs")
    let playerOneSetCount = document.querySelector(".player-one-total-sets").innerHTML;
    let playerTwoSetCount = document.querySelector(".player-two-total-sets").innerHTML;
    let setsRequired = localStorage.getItem("winning-sets");
    let startScore = localStorage.getItem("starting-score");


    playerOneScore = parseInt(playerOneScore);
    playerTwoScore = parseInt(playerTwoScore);
    playerOneLegs = parseInt(playerOneLegs);
    playerTwoLegs = parseInt(playerTwoLegs);
    legsInSet = parseInt(legsInSet);
    playerOneSetCount = parseInt(playerOneSetCount);
    playerTwoSetCount = parseInt(playerTwoSetCount);
    setsRequired = parseInt(setsRequired);
    startScore = parseInt(startScore);


    document.querySelector("#player-one-button").onclick = function () {

        let playerOneTurn = document.querySelector("#player-one-turn").value; 
        playerOneTurn = parseInt(playerOneTurn);

        if (!playerOneTurn || playerOneTurn > 180 || playerOneTurn < 0) {
            document.querySelector("#player-one-button").disabled = false; 
            document.querySelector("#player-two-button").disabled = true;
            alert("Enter valid score");
            document.querySelector("#player-one-turn").value = '';
        } else if (playerOneTurn > playerOneScore || playerOneScore - playerOneTurn === 1 || playerOneScore > 170 && playerOneScore - playerOneTurn <= 1) {
            alert("Score busted");
            document.querySelector("#player-one-button").disabled = true; 
            document.querySelector("#player-two-button").disabled = false;
            document.querySelector("#player-one-turn").value = '';
        } else {
            playerOneScore = playerOneScore - playerOneTurn;
            document.querySelector(".player-one-score").innerHTML = playerOneScore;
            document.querySelector(".player-one-previous-score").innerHTML = playerOneTurn;
            document.querySelector("#player-one-turn").value = '';
            if (playerOneScore !== 0) {
                document.querySelector("#player-one-button").disabled = true; 
                document.querySelector("#player-two-button").disabled = false;
            }
        }
        
        if (playerOneScore === 0) {
            playerOneScore = startScore;
            playerTwoScore = startScore;
            document.querySelector(".player-one-score").innerHTML = playerOneScore;
            document.querySelector(".player-two-score").innerHTML = playerTwoScore;
            playerOneLegs++;
            document.querySelector(".player-one-total-legs").innerHTML = playerOneLegs;
            document.querySelector(".player-two-previous-score").innerHTML = '---';
            document.querySelector(".player-one-previous-score").innerHTML = '---';
            assigningThrow();
        
            if (playerOneLegs === legsInSet) {
                playerOneSetCount++;
                document.querySelector(".player-one-total-sets").innerHTML = playerOneSetCount;
                playerOneLegs = 0;
                playerTwoLegs = 0;
                document.querySelector(".player-one-total-legs").innerHTML = playerOneLegs;
                document.querySelector(".player-two-total-legs").innerHTML = playerTwoLegs;
                assigningThrow();
        
                if(playerOneSetCount === setsRequired) {
                    let playerOneName = localStorage.getItem("player-one-name");
                    alert(playerOneName + " wins " + playerOneSetCount + " sets to " + playerTwoSetCount);
                }
            }
        } 
    }

    document.querySelector("#player-two-button").onclick = function () {

        let playerTwoTurn = document.querySelector("#player-two-turn").value; 
        playerTwoTurn = parseInt(playerTwoTurn);


        if (!playerTwoTurn || playerTwoTurn > 180 || playerTwoTurn < 0) {
            alert("Enter valid score");
            document.querySelector("#player-two-turn").value = '';
        } else if (playerTwoTurn > playerTwoScore || playerTwoScore - playerTwoTurn === 1 || playerTwoScore > 170 && playerTwoScore - playerTwoTurn <= 1) {
            alert("Score busted");
            document.querySelector("#player-one-button").disabled = false; 
            document.querySelector("#player-two-button").disabled = true;
            document.querySelector("#player-two-turn").value = '';
        } else {
            playerTwoScore = playerTwoScore - playerTwoTurn;
            document.querySelector(".player-two-score").innerHTML = playerTwoScore;
            document.querySelector(".player-two-previous-score").innerHTML = playerTwoTurn; 
            document.querySelector("#player-two-turn").value = '';

            if (playerTwoScore !== 0) {
                document.querySelector("#player-one-button").disabled = false; 
                document.querySelector("#player-two-button").disabled = true;
            }
        }

        if (playerTwoScore === 0) {
            playerOneScore = startScore;
            playerTwoScore = startScore;
            document.querySelector(".player-one-score").innerHTML = playerOneScore;
            document.querySelector(".player-two-score").innerHTML = playerTwoScore;
            let playerTwoLegs = document.querySelector(".player-two-total-legs").innerHTML;
            playerTwoLegs++;
            document.querySelector(".player-two-total-legs").innerHTML = playerTwoLegs;
            document.querySelector(".player-two-previous-score").innerHTML = '---';
            document.querySelector(".player-one-previous-score").innerHTML = '---';
            assigningThrow();

            if (playerTwoLegs === legsInSet) {
                playerTwoSetCount++;
                document.querySelector(".player-two-total-sets").innerHTML = playerTwoSetCount;
                playerOneLegs = 0;
                playerTwoLegs = 0;
                document.querySelector(".player-one-total-legs").innerHTML = playerOneLegs;
                document.querySelector(".player-two-total-legs").innerHTML = playerTwoLegs;
                assigningThrow();

                if(playerTwoSetCount === setsRequired) {
                    let playerTwoName = localStorage.getItem("player-two-name");
                    alert(playerTwoName + " wins " + playerTwoSetCount + " sets to " + playerOneSetCount);
                }
            }
        }
    }
}




























function gamePageScore () {
    scoring();
}
















function runGame() {
    playerNames();
    gamePageScore();
    assigningThrow();
}



