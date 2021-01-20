import crudder from "./crudder.js";
import stringToHTML from "./stringToHTML.js";
import showSurveyResponses from "./showSurveyResponses";
import editSurvey from "./editSurvey";

const Surveys = crudder("api/surveys");
let user;

const createSurveyElement = (survey) => {
  // add edit and delete buttons to survey card if the user is the owner
  let editAndDeleteBtns = "";
  if (user.email === survey.user_email) {
    editAndDeleteBtns = `
      <a class="modify-btn" id="edit-${survey._id}"><i class="fas fa-pencil-alt"></i></a>
      <a class="delete-btn" id="del-${survey._id}"><i class="far fa-trash-alt"></i></a>
    `;
  }

  return stringToHTML(`
      <div class="survey-card" id="s-${survey._id}">
        <div class="survey-title">${survey.title}</div>
        <div class="survey-creator">Created by ${survey.user_name}</div>
        <div class="survey-questions-quantity">Questions: ${survey.questions.length}</div>
        <div class="survey-btns">
          <a class="responses-btn" id="res-${survey._id}">Responses</a>
          ${editAndDeleteBtns}
        </div>
    `);
};

const addEventHandlers = (survey) => {
  const responsesBtn = document.getElementById(`res-${survey._id}`);
  responsesBtn.addEventListener("click", () => showSurveyResponses(survey));

  if (user.email !== survey.user_email) return; // return if not from the owner
  const editBtn = document.getElementById(`edit-${survey._id}`);
  editBtn.addEventListener("click", () => editSurvey(survey));

  const delBtn = document.getElementById(`del-${survey._id}`);
  delBtn.addEventListener("click", () => {
    Surveys.del(survey._id);
    document.getElementById(`s-${survey._id}`).remove();
  });
};

const renderSurveys = () => {
  user = JSON.parse(localStorage.getItem("user"));
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
