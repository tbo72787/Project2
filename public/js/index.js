/* eslint-disable no-multi-spaces */
/* eslint-disable indent */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */


// DOM Elements
  // Sections
  var pageSplashPage   = document.getElementById("pageSplashPage");
  var pageSignIn       = document.getElementById("pageSignIn");
  var pageSignUpForm   = document.getElementById("pageSignUpForm");
// User Form Buttons
  var buttonToSignUpForm = document.getElementById("buttonToSignUpForm");
  var buttonToSignInForm = document.getElementById("buttonToSignInForm");
  var buttonBackHome     = document.getElementById("buttonBackHome");
  var buttonBackHome2     = document.getElementById("buttonBackHome2");
  var buttonSubmitForm = document.getElementById("buttonSubmitForm");
// User Form Inputs  
  var $submitBtn = $("#submit");
  var $userName = $("#user-name");
  var $userAge = $("#user-age");
  var $userGender = $("#user-gender");
  var $userEmail = $("#user-email");
  var $userPicture = $("#user-picture");



// DISPLAY THE CORRECT DIVS:
// ==============================================================
function displaySectionsOnPageLoad(){
pageSplashPage.style.display = "block";
pageSignIn.style.display = "none";
pageSignUpForm.style.display = "none";
}

buttonToSignUpForm.onclick = function(){
pageSplashPage.style.display = "none";
pageSignIn.style.display = "none";
pageSignUpForm.style.display = "block";
};

buttonToSignInForm.onclick = function(){
pageSignIn.style.display = "block";
pageSplashPage.style.display = "none";
pageSignUpForm.style.display = "none";
};

buttonBackHome.onclick = displaySectionsOnPageLoad;
buttonBackHome2.onclick = displaySectionsOnPageLoad;





// The API object contains methods for each kind of request we'll make
var API = {
saveUser: function(data) {
  return $.ajax({
    headers: {
      "Content-Type": "application/json"
    },
    type: "POST",
    url: "api/users",
    data: JSON.stringify(data)
  });
},
saveSurvey: function(data) {
  return $.ajax({
    headers: {
      "Content-Type": "application/json"
    },
    type: "POST",
    url: "api/surveys",
    data: JSON.stringify(data)
  });
}
};

// Debug this in a bit...
// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleUserSubmit = function(event) {
event.preventDefault();

var user = {
  name: $userName.val().trim(),
  age: $userAge.val(),
  gender: $userGender.val(),
  email: $userEmail.val().trim(),
  picture: $userPicture.val().trim()
};

if (!(user.name && user.age && user.gender && user.email && user.picture)) {
  alert("You must complete the form!");
  return;
}

API.saveUser(user);

var ansArr = [];
for (var i = 1; i < 11; i++) {
  var newVal = $("#a" + i);
  ansArr.push(newVal);
}

var survey = {
  name: $userName.val().trim(),
  survey: ansArr
};

API.saveSurvey(survey);
};



// Add event listeners to the submit and delete buttons
// buttonSubmitForm.on("click", handleUserSubmit);



// RUN
// ==============================================================
displaySectionsOnPageLoad();
