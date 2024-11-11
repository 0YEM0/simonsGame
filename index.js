var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"]
var userClickedPattern = [];
var level = 0;

function sounds(yourColor) {

    switch (yourColor) {
        case "red":
            var redV = new Audio("./sounds/red.mp3")
            redV.play()
            break;
        
        case "green":
            var greenV = new Audio("./sounds/green.mp3")
            greenV.play()
            break;  
    
        case "blue":
            var blueV = new Audio("./sounds/blue.mp3")
            blueV.play()
            break;
        
        case "yellow":
            var yellowV = new Audio("./sounds/yellow.mp3")
            yellowV.play()
            break;
    
        default: console.error();
            break;
       }
       
}

function nextSequence() {
   var randomNumber = Math.floor(Math.random()*4);
   var randomChosenColour = buttonColours[randomNumber];
   gamePattern.push(randomChosenColour);
   $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
   sounds(randomChosenColour);
   level++;
   $("#level-title").text("lEVEL "+ level);

}

$(".btn").on("click", function handler() {
   var userChosenColour = this.id;
   userClickedPattern.push(userChosenColour);
   sounds(userChosenColour);

   $("#"+userChosenColour).fadeOut(100).fadeIn(100);
    checkAnswer(userClickedPattern.length-1);
   } )

$("html").on("keypress", function(yourKey) {
    
    if (level < 1) {
        nextSequence();
        
    } 

})

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {

        console.log("success")
        if (userClickedPattern.length == gamePattern.length){
        setTimeout(() => {
         nextSequence();
         userClickedPattern = [];
        }, 1000);
        }
    } 
    
    else{
        
        $("body").addClass("game-over");
        var worng = new Audio("./sounds/wrong.mp3");
        worng.play();
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 100);
        $("#level-title").text("انتهت اللعبه٫ اضغط اي مفتاح للمحاولة مره اخرى");
        level = 0;
        gamePattern = [];
        userClickedPattern = [];
        
    }
    
}














