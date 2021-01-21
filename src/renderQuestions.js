import renderQuestionType from "./renderQuestionType";
//add events to each question

const renderQuestions = () => {
  const surveyQuestions = document.querySelectorAll(".survey-question");

  // when question type is changed => render answer's template
  surveyQuestions.forEach((q) => {
    const questionType = q.querySelector(".question-type");
    questionType.addEventListener("change", () => {
      renderQuestionType(questionType.value, q);
    });

    // add event to delete question
    const questionDeleteBtn = q.querySelector(".delete-question");
    questionDeleteBtn.addEventListener("click", () => q.remove());
  });
};

export default renderQuestions;
