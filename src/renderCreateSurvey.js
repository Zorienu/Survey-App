import crudder from "./crudder";
import stringToHTML from "./stringToHTML";
import renderQuestionType from "./renderQuestionType";

const renderCreateSurvey = () => {
  const surveyQuestions = document.querySelectorAll(".survey-question");

  surveyQuestions.forEach((q) => {
    const questionType = q.querySelector("#question-type");
    questionType.addEventListener("change", () => {
      renderQuestionType(questionType.value, q);
    });
  });
};

export default renderCreateSurvey;
