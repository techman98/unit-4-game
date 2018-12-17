$(document).ready(function () {

    var compChoice = Math.floor(Math.random() * 120) + 19;
    var storedNum = 0;
    var ranNum;
    var wins = 0;
    var losses = 0;
    $("#Goal").text(compChoice);

    //Sets a random number value to each instance of .crystal
    $(".crystal").each(function (index) {
        ranNum = Math.floor(Math.random() * 12) + 1;
        $(this).data("value", ranNum);

    })
    //When user clicks the game checks certain conditions before executing.
    $(".crystal").on("click", function () {


        if (storedNum > compChoice) {
            $("#endGameStatement").text("Now you've gone and done it. The big, green, gem troll is after you now. You greedy bastard.");
            losses++
            $("#losses").text(losses);
            storedNum = 0;
            compChoice = Math.floor(Math.random() * 120) + 19;
            //I copied the function here, because I couldn't find out how to call a function that doesn't have a name.
            $(".crystal").each(function (index) {
                ranNum = Math.floor(Math.random() * 12) + 1;
                $(this).data("value", ranNum);

            })
            $("#Score").text(storedNum);
            $("#Goal").text(compChoice);

        } else if (storedNum === compChoice) {
            $("#endGameStatement").text("Look at you! Ballin' like a G.");
            wins++
            $("#wins").text(wins);
            storedNum = 0;
            compChoice = Math.floor(Math.random() * 120) + 19;
            //Read above comment
            $(".crystal").each(function (index) {
                ranNum = Math.floor(Math.random() * 12) + 1;
                $(this).data("value", ranNum);

            })
            $("#Score").text(storedNum);
            $("#Goal").text(compChoice);

        } else {
            storedNum = storedNum + ($(this).data().value);
            $("#Score").text(storedNum);

        }
    })

})