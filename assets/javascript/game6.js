// CRYSTAL COLLECTOR

// ==================================


$(document).ready(function () {

    //window.onload = function () {
    // This variable holds the number of points the user has accumulated.

    var userTotal = 0;
    console.log("User Total initiated: ", userTotal);

    var randomTotal = 0;

    // The variables that hold the values of the crystals
    var randTopazVal = 0;
    var randRubyVal = 0;
    var randAmethystVal = 0;
    var randEmeraldVal = 0;

    // The variables that hold the numbers of wins and losses
    var win = 0;
    document.getElementById("wins_number").innerHTML = win;
    var loss = 0;
    document.getElementById("losses_number").innerHTML = loss;

    // Declaring the functions that generate the random value for the user to match and random values of the crystals
    generateRandomTotal();
    genRandTopazVal();
    genRandRubyVal();
    genRandAmethystVal();
    genRandEmeraldVal();

    // This calls the generateRandomTotal function, which generates a random total and displays it on the page when the page loads

    function generateRandomTotal() {
        randomTotal = Math.floor((Math.random() * 120) + 19);
        console.log("The random total the user tries to match " + randomTotal);
        document.getElementById("total_score_number").innerHTML = 0;
        document.getElementById("demo").innerHTML = randomTotal;
    }

    // Generates a random value for the Topaz button

    function genRandTopazVal() {
        randTopazVal = Math.floor((Math.random() * 11) + 1);
        console.log("line 50 - Topaz value: " + randTopazVal);
    }

    // Generates a random value for the Ruby button

    function genRandRubyVal() {
        randRubyVal = Math.floor((Math.random() * 11) + 1);
        console.log("Ruby value: " + randRubyVal);
    }

    // // Generates a random value for the Amethyst button

    function genRandAmethystVal() {
        randAmethystVal = Math.floor((Math.random() * 11) + 1);
        console.log("Amethyst value: " + randAmethystVal);
    }

    // // Generates a random value for the Emerald button

    function genRandEmeraldVal() {
        randEmeraldVal = Math.floor((Math.random() * 11) + 1);
        console.log("Emerald value " + randEmeraldVal)
    }

    function check() {
        if (userTotal === randomTotal) {
            win++;
            document.getElementById("wins_number").innerHTML = win;
            document.querySelector("#game_result_box").style.backgroundColor = "green";
            document.querySelector("#game_result_box").style.border = "double";
            document.querySelector("#game_result_box").style.width = "450px";
            document.getElementById("game_result_box").innerHTML = "You've won! Click the New Game button to play again.";
        }

        if (userTotal > randomTotal) {
            loss++;
            document.getElementById("losses_number").innerHTML = loss;
            document.querySelector("#game_result_box").style.backgroundColor = "red";
            document.querySelector("#game_result_box").style.border = "double";
            document.querySelector("#game_result_box").style.font = "30px";
            document.querySelector("#game_result_box").style.width = "620px";
            document.getElementById("game_result_box").innerHTML = "Sorry, you went over the number. Click the New Game button to play again.";
            
        }
    }
/*
    $("newGame").on('click', function (event) {
        generateRandomTotal();
        genRandTopazVal();
        genRandRubyVal();
        genRandAmethystVal()
        genRandEmeraldVal()
    })
*/



    // The next four functions add the value of a crystal button to the user's total when user clicks button

    $("#topaz").on("click", function (event) {
        console.log("User Total before Topaz added: ", + userTotal);
        userTotal += randTopazVal;
        document.getElementById("total_score_number").innerHTML = userTotal;
        console.log("Total after clicking Topaz: " + userTotal);
        check();
    })

    $("#ruby").on("click", function (event) {
        userTotal += randRubyVal;
        document.getElementById("total_score_number").innerHTML = userTotal;
        check();
    })

    $("#amethyst").on("click", function (event) {
        userTotal += randAmethystVal;
        document.getElementById("total_score_number").innerHTML = userTotal;
        check();
    })

    $("#emerald").on("click", function (event) {
        userTotal += randEmeraldVal;
        document.getElementById("total_score_number").innerHTML = userTotal;
        check();
    })

    $("#newGame").on('click', function (event) {
        document.querySelector("#game_result_box").style.backgroundColor = "blueviolet";
        document.querySelector("#game_result_box").style.border = "none";
        userTotal = 0;
        document.getElementById("total_score_number").innerHTML = userTotal;
        document.getElementById("game_result_box").innerHTML = " ";
        generateRandomTotal();
        genRandTopazVal();
        genRandRubyVal();
        genRandAmethystVal();
        genRandEmeraldVal();
    })

    // The two conditionals below give the result of a game and tell the user to click the New Game button to start again

    /*if (userTotal === randomTotal); {
        document.getElementById("game_result_box").innerHTML = "Congratulations--you've won this game! Click the New Game button to play again.";
    }

    if (userTotal > randomTotal); {
        document.getElementById("game_result_box").innerHTML = "Sorry, your total went above the number. Click the New Game button to play again.";
    }
    */
})










//}//end Window OnLoad












