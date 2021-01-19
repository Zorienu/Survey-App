import crudder from "./crudder";

const sendSurveyToDB = () => {
  const surveyTitle = document.querySelector(".create-survey-title").value || "Survey title";

  // survey public or not
  const surveyPublic = document.getElementById("public-survey").value == "true";

  const questions = document.querySelectorAll(".survey-question");
  console.log(questions);
};

export default sendSurveyToDB;
