import crudder from "./crudder";

const editSurvey = (s) => {
  console.table(s);
  const appContainer = document.getElementById("app-container");
  const createSurveyTemplate = document.getElementById("create-survey");
  appContainer.innerHTML = createSurveyTemplate.innerHTML;
};

export default editSurvey;
