import "./css/styles.css";
import "./css/navbar.css";
import "./css/surveys-cards.css";
import "./css/create-survey.css";
import "./css/survey-client.css";
import "./css/resolve-survey.css";

import renderSurveyControlPanel from "./renderSurveyControlPanel";
import renderCreateSurvey from "./renderCreateSurvey";
import renderClient from "./renderClient";
import renderLogin from "./renderLogin";

//const renderLogin = () => {
//renderClient();
//};

const renderApp = () => {
  renderSurveyControlPanel();
};

window.onload = () => {
  //renderApp();
  //renderClient();
  renderLogin();
  //renderCreateSurvey();
};
