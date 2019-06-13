//JS code for managing user interactions for prototype
var reportBtn = document.querySelector(".report-btn");
var header = document.querySelector(".header");
var question = document.querySelector(".container-questions");

//content for the login screen
var welcomeScreen = [header];

//Stuff to do when user clicks the login button
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
    var bg = document.querySelector(".mainframe");
    overlay.style.animation = "moveWater 0.5s forwards";
    bg.style.animation = "changeBG 0.5s forwards";
    question.style.animation = "questionsTransition 0.5s 0.5s forwards";
  }, 200);
});

//Get the refresh button
var refresh = document.querySelector(".refresh-btn");

//Reload the prototype when user clicks the reload button
refresh.addEventListener('click', function() {
  location.reload(true);
});
