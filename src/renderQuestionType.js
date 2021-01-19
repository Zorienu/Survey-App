import addAnswerOption from "./addAnswerOption";

const renderQuestionType = (type, question) => {
  const answers = question.querySelector(".answers-container");

  if (type === "radio") {
    const element = document.getElementById("multiple-choice-template");
    answers.innerHTML = element.innerHTML;
    addAnswerOption(question);
  } else if (type === "text") {
    const element = document.getElementById("text-template");
    answers.innerHTML = element.innerHTML;
  }
};

export default renderQuestionType;
