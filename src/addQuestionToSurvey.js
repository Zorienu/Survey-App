import stringToHTML from "./stringToHTML";
// add a question to survey form

const addQuestionToSurvey = () => {
  const questionsContainer = document.getElementById("questions-container");
  const questionTemplate = document.getElementById("survey-question-template");
  // instead of doing a.innerHTML = b.innerHTML...
  // innerHTML is string, convert to element preventing rebuild the entire DOM
  const newQuestionNode = stringToHTML(questionTemplate.innerHTML);
  questionsContainer.appendChild(newQuestionNode);
};

export default addQuestionToSurvey;
