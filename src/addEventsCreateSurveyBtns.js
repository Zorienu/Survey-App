import sendSurveyToDB from "./sendSurveyToDB";
import renderQuestions from "./renderQuestions";
import renderSurveyControlPanel from "./renderSurveyControlPanel";
import addQuestionToSuvey from "./addQuestionToSurvey";
// add events to 'Add Quesiton', 'Send survey' and 'Cancel' buttons
// in 'Create survey' form

const addEventsCreateSurveyBtns = (mode = "create", id = null) => {
  // add question button
  const addQuestionBtn = document.getElementById("add-question-btn");

  addQuestionBtn.addEventListener("click", () => {
    addQuestionToSuvey();
    renderQuestions(); // call every time a question is added
  });

  // send survey button
  const sendSurveyBtn = document.getElementById("send-survey");
  sendSurveyBtn.addEventListener("click", () => sendSurveyToDB(id));

  // cancel button
  const cancelBtn = document.getElementById("cancel-survey");
  cancelBtn.addEventListener("click", renderSurveyControlPanel);
};

export default addEventsCreateSurveyBtns;
