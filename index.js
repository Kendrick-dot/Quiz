
Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    title: "Coding 101",
    showProgressBar: "bottom",
    showTimerPanel: "top",
    maxTimeToFinishPage: 10,
    maxTimeToFinish: 25,
    firstPageIsStarted: true,
    startSurveyText: "Start Quiz",
    pages: [
        {
            questions: [
                {
                    type: "html",
                    html: "You are about to start quiz. <br/>Please click on <b>'Start Quiz'</b> button when you are ready."
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
            
                    title: "What does html stand for?",
                    choices: [
                        "hydraulics that make light", "higher text made for learning", "hypertext markup language", "high texting made for language", "all of the above"
                    ],
                    correctAnswer: "hypertext markup language"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    
                    title: "What is responsible for the colors, aesthetics, fonts, and visual layouts of a webpage?",
                    
                    choices: [
                        "html", "css", "java", "javascript"
                    ],
                    correctAnswer: "css"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
            
                    title: "The process of fixing broken code is called ...",
                
                    choices: [
                        "mechanics", "debugging", "fixing", "inspecting"
                    ],
                    correctAnswer: "debugging"
                }
            ]
        }
    ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });

$("#surveyElement").Survey({model: survey});