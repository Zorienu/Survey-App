import "./css/styles.css";
import "./css/navbar.css";
import "./css/surveys-cards.css";
import "./css/create-survey.css";

import renderSurveyControlPanel from "./renderSurveyControlPanel";
import renderCreateSurvey from "./renderCreateSurvey";

const renderApp = () => {
  renderSurveyControlPanel();
};

window.onload = () => {
  //renderApp();
  renderCreateSurvey();
};
