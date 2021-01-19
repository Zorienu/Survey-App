import stringToHTML from "./stringToHTML";
// add and delete options to multiple choice questions

const addEventDeleteOptionBtn = (question) => {
  const deleteBtns = question.querySelectorAll(".del-answer");

  // just one option => hide delete button
  if (deleteBtns.length === 1) return (deleteBtns[0].style.display = "none");
  else deleteBtns[0].style.display = "inline";

  deleteBtns.forEach((b) => {
    b.addEventListener("click", () => {
      b.parentElement.remove();
      addEventDeleteOptionBtn(question);
    });
  });
};

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
