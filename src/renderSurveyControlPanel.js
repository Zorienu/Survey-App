import renderSurveys from "./renderSurveys";
import renderCreateSurvey from "./renderCreateSurvey";
import renderClient from "./renderClient";

const renderSurveyControlPanel = () => {
  const appContainer = document.getElementById("app-container");
  const surveysControlPanelTemplate = document.getElementById("survey-control-panel");
  appContainer.innerHTML = surveysControlPanelTemplate.innerHTML;

  // set nav bar logged user message
  const user = JSON.parse(localStorage.getItem("user"));
  const loggedMessage = `You're logged as ${user.name}`;
  document.getElementById("nav-bar-logged-message").innerText = loggedMessage;

  // set event navbar logout button
  const logoutBtn = document.getElementById("nav-bar-logout-btn");
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("token");
    renderClient();
  });

  renderSurveys();
  const addSurveyBtn = document.getElementById("add-survey-btn");
  addSurveyBtn.addEventListener("click", renderCreateSurvey);
};

export default renderSurveyControlPanel;
