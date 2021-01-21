import stringToHTML from "./stringToHTML";

const addQuestionEditSurvey = (q) => {
  const questionsContainer = document.getElementById("questions-container");
  const element = stringToHTML(`
    <div class="survey-question">
      <div class="question">
        <input class="question-text" type="text" placeholder="Untitled question" value="${q.question}">
        <select class="question-type question-type-select">
          <option value="radio" ${q.question_type === "radio" ? "selected" : ""}>Multiple choice</option>
          <option value="text" ${q.question_type === "text" ? "selected" : ""}>Text</option>
        </select>
      </div>

      <div class="answers-container">
        <div class="answers" id="a-${q.code}"></div>
        ${
          q.question_type === "radio"
            ? `
          <div class="add-answer-container">
            <input type="radio" disabled>
            <a class="add-option">Add option</a>
          </div> `
            : ""
        }
      </div>

      <div class="div-delete-question">
        <a class="delete-question"><i class="far fa-trash-alt"></i></a>
      </div>
    </div>
  `);
  questionsContainer.appendChild(element);
};

export default addQuestionEditSurvey;
