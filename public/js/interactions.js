/* eslint-disable no-unused-vars */
console.log("Its Connecdhsdghsfghjfgted!");

// DOM Elements:
// Quiz Page:
var questionList = document.getElementById("questionList");


// Create Quiz Questions
var questionBank = [
  "question 1",
  "question 2",
  "question 3",
  "question 4",
];



function displayQuestions(){
  for (var i = 0; i < questionBank.length; i++){
    console.log("Ran display questions")
    //Creates a div:
    var questionDiv = document.createElement("div");
    questionDiv.classList.add("questionDiv");
    questionDiv.setAttribute("id",`Question-${i}`);

    // Add the question text:
    var questionText = document.createElement("p");
    questionText.textContent = questionBank[i];
    questionText.classList.add("questionText");
    questionText.setAttribute("id", `Question-Text-${i}`);
    questionDiv.appendChild(questionText);
    console.log(`The question is ${questionBank[i]}`)
    console.log(`questionList is ${questionList}`)
    console.log(`questionDiv is ${questionDiv}`)

    // Appends created items to the question div:
    questionList.appendChild(questionDiv);
  }
}



displayQuestions();

