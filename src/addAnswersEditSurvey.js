import stringToHTML from "./stringToHTML";

const addAnswersEditSurvey = (q) => {
  const answerContainer = document.getElementById(`a-${q.code}`);
  const textAnswer = `
        <div>
          <input class="question-answer" type="text" placeholder="Answer text" disabled>
        </div>
  `;
  if (q.question_type === "text") return (answerContainer.innerHTML = textAnswer);

  // adding radio button answers
  q.answers.forEach((a) => {
    const newRadioAnswer = stringToHTML(`
      <div>
      <input type="radio" disabled>
      <input class="question-answer" type="text" placeholder="Option" value="${a}">
      <a class="del-answer"><i class="fas fa-eraser"></i></a>
      </div>
    `);
    answerContainer.appendChild(newRadioAnswer);
  });
};

export default addAnswersEditSurvey;
