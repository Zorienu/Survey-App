import renderSurveys from "./renderSurveys";
import renderCreateSurvey from "./renderCreateSurvey";

const renderSurveyControlPanel = () => {
  const appContainer = document.getElementById("app-container");
  const surveysControlPanelTemplate = document.getElementById("survey-control-panel");
  appContainer.innerHTML = surveysControlPanelTemplate.innerHTML;

  renderSurveys();
  console.log("aqui");
  const addSurveyBtn = document.getElementById("add-survey-btn");
  console.log(addSurveyBtn);
  addSurveyBtn.addEventListener("click", renderCreateSurvey);
};

export default renderSurveyControlPanel;
