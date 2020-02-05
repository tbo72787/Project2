/* eslint-disable no-unused-vars */
console.log("Its Connecdhsdghsfghjfgted!");

// DOM Elements:
// Quiz Page:
var questionList = document.getElementById("questionList");


// Create Quiz Questions
var questionBank = [
  {
    question: "Sports are very important to me",
    answer1:  "DISAGREE",
    answer2:  "AGREE"
  },{
    question: "greatly prefer talking to someone in person rather than over the phone or through text messages",
    answer1:  "LIBERAL",
    answer2:  "CONSERVATIVE"
  }, {
    question: "The probability of me liking a person is heavily influenced by whether or not we share musical tastes",
    answer1:  "DISAGREE",
    answer2:  "AGREE"
  },{
    question: "I usually check my phone",
    answer1:  "NEVER",
    answer2:  "CONSTANTLY"
  },{
    question: "It is important to me that I look good, and I like the way I look",
    answer1:  "AGREE",
    answer2:  "DISAGREE"
  },{
    question: "On my day off, I prefer to",
    answer1:  "STAY AT HOME",
    answer2:  "GO OUT"
  },{
    question: "I greatly enjoy finding and trying new food",
    answer1:  "EWWWW",
    answer2:  "ABSOLUTELY!"
  },{
    question: "Technology is extemely important to our lives in the modern age",
    answer1:  "EWWWW",
    answer2:  "ABSOLUTELY!"
  },{
    question: "I believe everyone should work towards conserving and protecting the environment",
    answer1:  "NAH",
    answer2:  "ABSOLUTELY!"
  }
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
    questionText.textContent = questionBank[i].question;
    questionText.classList.add("questionText");
    questionText.setAttribute("id", `Question-Text-${i}`);
    questionDiv.appendChild(questionText);
    console.log(`The question is ${questionBank[i]}`)
    console.log(`questionList is ${questionList}`)
    console.log(`questionDiv is ${questionDiv}`)

    // Add the slider:
    var slider = document.createElement("div");
    slider.innerHTML =  `<input id="slider51" class="slider" type="range" min="1" max="5" data-rangeslider>`;
    questionDiv.appendChild(slider);

    // Add Slider Labels:
    var sliderLabelsRow = document.createElement("div");
        sliderLabelsRow.classList.add("row");
    var answer1Div = document.createElement("div");
        answer1Div.classList.add("rangeLabels");
        answer1Div.classList.add("answer1");
        answer1Div.textContent = questionBank[i].answer1;
    var answer2Div = document.createElement("div");
        answer2Div.classList.add("rangeLabels");
        answer2Div.classList.add("answer2");
        answer2Div.textContent = questionBank[i].answer2;
    
    sliderLabelsRow.appendChild(answer1Div);
    sliderLabelsRow.appendChild(answer2Div);
    questionDiv.appendChild(sliderLabelsRow)
    

    // Appends created items to the question div:
    questionList.appendChild(questionDiv);
  }
}





                // <div class="row">
                //   <div class="rangeLabels disagree">DISAGREE</div>
                //   <div class="rangeLabels agree">AGREE</div>
                // </div>

displayQuestions();

