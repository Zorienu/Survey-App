import stringToHTML from "./stringToHTML";
import addEventDeleteOptionBtn from "./addEventDeleteOptionBtn";
// add and delete options to 'multiple choice' questions

const addAnswerOption = (question) => {
  const addOptionBtn = question.querySelector(".add-option");

  addEventDeleteOptionBtn(question);

  addOptionBtn.addEventListener("click", () => {
    const questionAnswers = question.querySelector(".answers");
    const newAnswer = stringToHTML(`
      <div>
        <input type="radio" disabled>
        <input class="question-answer" type="text" placeholder="Option">
        <a class="del-answer"><i class="fas fa-eraser"></i></a>
      </div>
    `);
    questionAnswers.appendChild(newAnswer);
    addEventDeleteOptionBtn(question);
  });
};

export default addAnswerOption;
