import crudder from "./crudder.js";
import stringToHTML from "./stringToHTML.js";
import showSurveyResponses from "./showSurveyResponses";
import editSurvey from "./editSurvey";

const Surveys = crudder("api/surveys");

const createSurveyElement = (survey) => {
  return stringToHTML(`
      <div class="survey-card" id="s-${survey._id}">
        <div class="survey-title">${survey.title}</div>
        <div class="survey-creator">Created by ${survey.user_email}</div>
        <div class="survey-questions-quantity">Questions: ${survey.questions.length}</div>
        <div class="survey-btns">
          <a class="responses-btn" id="res-${survey._id}">Responses</a>
          <a class="modify-btn" id="edit-${survey._id}"><i class="fas fa-pencil-alt"></i></a>
          <a class="delete-btn" id="del-${survey._id}"><i class="far fa-trash-alt"></i></a>
        </div>
    `);
};

const addEventHandlers = (survey) => {
  const responsesBtn = document.getElementById(`res-${survey._id}`);
  responsesBtn.addEventListener("click", () => showSurveyResponses(survey));

  if (!survey.public) return; // return if not from the owner
  const editBtn = document.getElementById(`edit-${survey._id}`);
  editBtn.addEventListener("click", editSurvey);

  const delBtn = document.getElementById(`del-${survey._id}`);
  delBtn.addEventListener("click", () => {
    Surveys.del(survey._id);
    document.getElementById(`s-${survey._id}`).remove();
  });
};

const renderSurveys = () => {
  Surveys.get().then((res) => {
    const surveyElements = res.map(createSurveyElement);
    const surveysContainer = document.getElementById("surveys-container");
    // add elements to container
    surveyElements.forEach((s) => surveysContainer.appendChild(s));
    // add event handlers to buttons
    res.forEach((s) => addEventHandlers(s));
  });
};

export default renderSurveys;
