import addAnswerOption from "./addAnswerOption";

const renderQuestionType = (type, question) => {
  const answers = question.querySelector(".answers-container");
  let element = "";
  if (type === "radio") {
    element = document.getElementById("multiple-choice-template");
    answers.innerHTML = element.innerHTML;
    addAnswerOption(question);
  } else if (type === "text") {
    element = document.getElementById("text-template");
    answers.innerHTML = element.innerHTML;
  }
};

export default renderQuestionType;
