import addEventsCreateSurveyBtns from "./addEventsCreateSurveyBtns";
import addEventDeleteOptionBtn from "./addEventDeleteOptionBtn";
import addQuestionEditSurvey from "./addQuestionEditSurvey";
import addAnswersEditSurvey from "./addAnswersEditSurvey";
import renderQuestions from "./renderQuestions";
import addAnswerOption from "./addAnswerOption";
// edit an already created survey

const editSurvey = (s) => {
  const appContainer = document.getElementById("app-container");
  const createSurveyTemplate = document.getElementById("create-survey");
  appContainer.innerHTML = createSurveyTemplate.innerHTML;

  // set survey title
  document.querySelector(".create-survey-title").value = s.title;

  // add questions
  const questionsContainer = document.getElementById("questions-container");
  s.questions.forEach((q, index) => {
    addQuestionEditSurvey(q);
    addAnswersEditSurvey(q);
  });

  // adding events to questions' buttons
  const DOMQuestions = document.querySelectorAll(".survey-question");
  DOMQuestions.forEach((q) => {
    if (q.querySelector(".question-type").value === "radio") {
      addEventDeleteOptionBtn(q);
      addAnswerOption(q);
    }
  });

  renderQuestions(); // change question type and delete question
  addEventsCreateSurveyBtns("update", s._id); // 'add question', 'send survey' & 'cancel'
};

export default editSurvey;
