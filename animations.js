//JS code for managing user interactions for prototype
var bg = document.querySelector(".mainframe");
var reportBtn = document.querySelector(".report-btn");
var header = document.querySelector(".header");
var questions = document.querySelector(".container-questions");
var progressBar = document.querySelector(".progress-bar");

//content for the welcome screen
var welcomeScreen = [header];

//Stuff to do when user clicks the New Report button
reportBtn.addEventListener('click', function() {
  (function() {
    //apply the screenTransition keyframe animation to each element in the login screen
    welcomeScreen.forEach(function(el) {
      el.style.animation = "screenTransition 1.0s forwards";
    });
    //overwrite the animation of the login button
    reportBtn.style.animationName = "none";
    reportBtn.style.animation = "screenTransition 1.0s forwards";
  })();

  //When user clicks the login button, scale the overlay to make room for the options menu
  //Also stop the wave animation
  setTimeout(function() {
    var overlay = document.querySelector(".container-welcome");
    overlay.style.animation = "moveWater 0.5s forwards";
    bg.style.animation = "changeBG1 0.5s forwards";
    questions.style.animation = "questionsTransitionIn 0.5s 0.5s forwards";
    progressBar.style.display = "block";
    progressTransition(0);
  }, 200);
});

//Get the refresh button
var refresh = document.querySelector(".refresh-btn");

//Reload the prototype when user clicks the reload button
refresh.addEventListener('click', function() {
  location.reload(true);
});

//content grabbers for questions
var q1 = document.querySelector(".container-questions .questions .q1");
var q2 = document.querySelector(".container-questions .questions .q2");
var q3 = document.querySelector(".container-questions .questions .q3");
var nextQ1 = document.querySelector(".container-questions .questions .q1 .next-btn");
var nextQ2 = document.querySelector(".container-questions .questions .q2 .next-btn");
var nextQ3 = document.querySelector(".container-questions .questions .q3 .next-btn");

//function which manages the transition between two questions
function qTransition(q_before, q_after) {
  q_before.style.animation = "questionsTransitionOut 0.5s ease-in forwards"
  setTimeout(function() {q_before.style.display = "none";}, 800);
  q_after.style.animation = "questionsTransitionIn 0.5s 1.0s forwards";
  q_after.style.display = "block";
}

//function which manages the growth of the progress bar
function progressTransition(stage) {
  if(stage === 0) {
    progressBar.style.animation = "progressAppear 0.5s forwards";
  } else {
    progressBar.style.animation = "progressInc" + stage + " 0.5s forwards";
  }
}

var review = document.querySelector(".container-review");

//code for going from question 1 to question 2
nextQ1.addEventListener("click", function() {
  qTransition(q1, q2);
  progressTransition(1);
});


//code for going from question 2 to question 3
nextQ2.addEventListener("click", function() {
  qTransition(q2, q3);
  progressTransition(2);
});

//code for going from completed questions to form submission review
nextQ3.addEventListener("click", function() {
  var micro = document.querySelector(".container-questions .micro-copy");
  micro.style.animation = "questionsTransitionOut 0.3s ease-out forwards";
  console.log(bg.style.backgroundColor);
  bg.style.animation = "changeBG2 0.5s 0.2s forwards";
  q3.style.animation = "questionsTransitionOut 0.5s ease-in forwards";
  progressTransition(3);
});
