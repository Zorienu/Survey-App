import renderQuestionType from "./renderQuestionType";
import renderSurveyControlPanel from "./renderSurveyControlPanel";
import sendSurveyToDB from "./sendSurveyToDB";

// add events to each question
const renderQuestions = () => {
  const surveyQuestions = document.querySelectorAll(".survey-question");

  surveyQuestions.forEach((q) => {
    const questionType = q.querySelector(".question-type");
    questionType.addEventListener("change", () => {
      renderQuestionType(questionType.value, q);
    });

    // add event to delete question
    const questionDeleteBtn = q.querySelector(".delete-question");
    questionDeleteBtn.addEventListener("click", () => q.remove());
  });
};

// add events 'add question', 'send survey' & 'cancel'
const addEventsSurveyBtns = () => {
  // add question button
  const addQuestionBtn = document.getElementById("add-question-btn");

  addQuestionBtn.addEventListener("click", () => {
    const questionsContainer = document.getElementById("questions-container");
    const questionTemplate = document.getElementById("survey-question-template");
    questionsContainer.innerHTML += questionTemplate.innerHTML;
    renderQuestions(); // call every time a question is added
  });

  // send survey button
  const sendSurveyBtn = document.getElementById("send-survey");
  sendSurveyBtn.addEventListener("click", sendSurveyToDB);

  // cancel button
  const cancelBtn = document.getElementById("cancel-survey");
  cancelBtn.addEventListener("click", renderSurveyControlPanel);
};

const renderCreateSurvey = () => {
  document.getElementById("app-container").innerHTML = document.getElementById("create-survey").innerHTML;
  addEventsSurveyBtns();
  renderQuestions();
};

export default renderCreateSurvey;
