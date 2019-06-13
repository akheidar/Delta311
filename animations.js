//JS code for managing user interactions for prototype
var loginBtn = document.querySelector(".login-btn");
var header = document.querySelector(".header");
var loginForm = document.querySelector(".loginForm");

//content for the login screen
var loginScreen = [header, loginForm];

//Stuff to do when user clicks the login button
loginBtn.addEventListener('click', function() {
  (function() {
    //apply the screenTransition keyframe animation to each element in the login screen
    loginScreen.forEach(function(el) {
      el.style.animation = "screenTransition 1.0s forwards";
    });
    //overwrite the animation of the login button
    loginBtn.style.animationName = "none";
    loginBtn.style.animation = "screenTransition 1.0s forwards";
  })();

  //When user clicks the login button, scale the overlay to make room for the options menu
  //Also stop the wave animation
  setTimeout(function() {
    var overlay = document.querySelector(".container");
    overlay.style.animation = "moveWater 0.5s forwards";
  }, 200);
});

//Get the refresh button
var refresh = document.querySelector(".refresh-btn");

//Reload the prototype when user clicks the reload button
refresh.addEventListener('click', function() {
  location.reload(true);
});
