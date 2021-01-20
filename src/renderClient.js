import stringToHTML from "./stringToHTML";
import crudder from "./crudder";
import renderRespondSurvey from "./renderRespondSurvey";
import renderLogin from "./renderLogin";
import renderRegister from "./renderRegister";

const Surveys = crudder("api/surveys");

const createSurveyElement = (survey) => {
  return stringToHTML(`
      <div class="survey-card" id="s-${survey._id}">
        <div class="survey-title">${survey.title}</div>
        <div class="survey-creator">Created by ${survey.user_email}</div>
        <div class="survey-questions-quantity">Questions: ${survey.questions.length}</div>
        <div class="survey-btns">
          <a class="responses-btn" id="respond-${survey._id}">Submit response</a>
        </div>
    `);
};

const renderClient = () => {
  const appContainer = document.getElementById("app-container");
  const surveyClientTemplate = document.getElementById("surveys-client");
  appContainer.innerHTML = surveyClientTemplate.innerHTML;

  // add event login button
  document.getElementById("login-btn").addEventListener("click", renderLogin);

  // add event register button
  document.getElementById("register-btn").addEventListener("click", renderRegister);

  Surveys.get().then((res) => {
    const surveyElements = res.map(createSurveyElement);
    const surveysContainer = document.getElementById("surveys-container");
    // add elements to container
    surveyElements.forEach((s) => surveysContainer.appendChild(s));
    // add event handler to button respond survey
    res.forEach((s) => {
      const respondSurveyBtn = document.getElementById(`respond-${s._id}`);
      respondSurveyBtn.addEventListener("click", () => renderRespondSurvey(s));
    });
  });
};

export default renderClient;
