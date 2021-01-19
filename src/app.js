import "./css/styles.css";
import "./css/navbar.css";
import "./css/surveys-cards.css";
import "./css/create-survey.css";

import renderSurveys from "./renderSurveys";
import renderCreateSurvey from "./renderCreateSurvey";

const renderSurveyControlPanel = () => {
  const appContainer = document.getElementById("app-container");
  const surveysControlPanelTemplate = document.getElementById("survey-control-panel");
  appContainer.innerHTML = surveysControlPanelTemplate.innerHTML;

  renderSurveys();

  const addSurveyBtn = document.getElementById("add-survey-btn");
  addSurveyBtn.addEventListener("click", renderCreateSurvey);
};

const renderApp = () => {
  renderSurveyControlPanel();
};

window.onload = () => {
  //renderApp();
  document.getElementById("app-container").innerHTML = document.getElementById("create-survey").innerHTML;
  renderCreateSurvey();
};
