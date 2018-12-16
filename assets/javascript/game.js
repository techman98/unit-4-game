$(document).ready(function () {

    var compChoice = Math.floor(Math.random() * 120) + 19;
    var storedNum = 0;
    var ranNum;
    var wins = 0;
    var losses = 0;
    console.log("Get to " + compChoice);

    $(".crystal").each(function (index) {
        ranNum = Math.floor(Math.random() * 12) + 1;
        $(this).data("value", ranNum);
        console.log("Gem # " + index + "value is " + ranNum)

    })

    $(".crystal").on("click", function () {


        if (storedNum > compChoice) {
            alert("You fucking suck.");
            losses++
            $("#losses").text(losses);


        } else if (storedNum === compChoice) {
            $("#winStatement").text("You fucking don't suck!");
            wins++
            $("#wins").text(wins);

        } else {
            storedNum = storedNum + ($(this).data().value);
            console.log("Your score is " + storedNum);

        }
    })

})