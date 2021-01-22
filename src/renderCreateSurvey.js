import addQuestionToSurvey from "./addQuestionToSurvey";
import addEventsCreateSurveyBtns from "./addEventsCreateSurveyBtns";
import renderQuestions from "./renderQuestions";
import renderSurveyControlPanel from "./renderSurveyControlPanel";

const renderCreateSurvey = () => {
  document.getElementById("app-container").innerHTML = document.getElementById("create-survey").innerHTML;
  document.getElementById("logo").addEventListener("click", renderSurveyControlPanel);
  addEventsCreateSurveyBtns(); // add events 'Add Question', 'Send survey', 'Cancel'
  addQuestionToSurvey(); // add one question by default
  renderQuestions();
};

export default renderCreateSurvey;
