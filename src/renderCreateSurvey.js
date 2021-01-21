import addQuestionToSurvey from "./addQuestionToSurvey";
import addEventsCreateSurveyBtns from "./addEventsCreateSurveyBtns";
import renderQuestions from "./renderQuestions";

const renderCreateSurvey = () => {
  document.getElementById("app-container").innerHTML = document.getElementById("create-survey").innerHTML;
  addEventsCreateSurveyBtns(); // add events 'Add Question', 'Send survey', 'Cancel'
  addQuestionToSurvey(); // add one question by default
  renderQuestions();
};

export default renderCreateSurvey;
