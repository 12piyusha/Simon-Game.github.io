var buttonColours=["red","blue","green","yellow"];
var gamepattern=[];

//3. At the top of the game.js file, create a new empty array with the name userClickedPattern.
var userClickedPattern=[];

//1. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
var started=false;


//2. Create a new variable called level and start at level 0.
var level=0;

//1. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence()
$(document).keypress(function(){
    if(!started){
     //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
     $("#level-title").text("Level " + level);
     nextSequence();
     started = true;
    }
});

//1. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
$(".btn").click(function(){
      //2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
     var userChosenColour=$(this).attr("id");

       //4. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern
     userClickedPattern.push(userChosenColour);
     playsound(userChosenColour);
     animatePress(userChosenColour);
    //  console.log(userClickedPattern);

      //2. Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.
      checkAnswer(userClickedPattern.length-1);

})

//1. Create a new function called checkAnswer(), it should take one input with the name currentLevel
function checkAnswer(currentLevel){
    if(gamepattern[currentLevel]===userClickedPattern[currentLevel])
    {
       console.log("success");
        //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
        if (userClickedpattern.length === gamepattern.length)
         //5. Call nextSequence() after a 1000 millisecond delay.
         setTimeout(function () {
            nextSequence();
          }, 1000);

    } else {

    console.log("wrong");
     //1. In the sounds folder, there is a sound called wrong.mp3, play this sound if the user got one of the answers wrong.
     playsound("wrong");

     //2. In the styles.css file, there is a class called "game-over", apply this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.
     $("body").addClass("game-over");
     setTimeout(function () {
       $("body").removeClass("game-over");
     }, 200);

     //3. Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.
     $("#level-title").text("Game Over, Press Any Key to Restart");

      //2. Call startOver() if the user gets the sequence wrong.
      startOver();
  }

}
function nextsequence(){
    var randomNumber=Math.floor(Math.random()*4);
    var  randomChosenColour=buttonColours[randomNumber];
    gamepattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
     playsound(randomChosenColour);
     animatePress(randomChosenColour);
}
function playsound(name)
{
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();
}
//1. Create a new function called animatePress(), it should take a single input parameter called currentColour.

function animatePress(currentColour){
    //2. Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
    $("#"+currentColour).addClass("pressed");
 
    //3. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed")
    },100);

}
//1. Create a new function called startOver().
function startOver() {

    //3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
    level = 0;
    gamePattern = [];
    started = false;
  }
  