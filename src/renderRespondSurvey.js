import stringToHTML from "./stringToHTML";
import renderClient from "./renderClient";
import sendAnswerToDB from "./sendAnswerToDB";

const addEventsSubmitResponse = (survey) => {
  const submitBtn = document.getElementById("submit-response");
  submitBtn.addEventListener("click", () => sendAnswerToDB(survey));
  const cancelBtn = document.getElementById("cancel-response");
  cancelBtn.addEventListener("click", () => renderClient());
};

const addQuestion = (q) => {
  if (q.question_type === "radio") {
    const answers = q.answers.map(
      (a) => `
      <input class="radio-s-res" type="radio" value="${a}" name="${q.code}">
      <label for="${a}">${a}</label></br>`
    );
    return stringToHTML(`
      <div class="s-question">
        <div class="question-title">${q.question}</div>
        ${answers.join("")}
      </div>
    `);
  } else if (q.question_type === "text") {
    return stringToHTML(`
      <div class="s-question">
        <div class="question-title">${q.question}</div>
        <input class="text-s-res" type="text" placeholder="Your answer">
      </div>
    `);
  }
};

const renderRespondSurvey = (survey) => {
  const appContainer = document.getElementById("app-container");
  const respondSurveyTemplate = document.getElementById("respond-survey");
  appContainer.innerHTML = respondSurveyTemplate.innerHTML;

  // set survey title
  document.getElementById("survey-title").innerText = survey.title;

  // add questions
  const surveyContainer = document.getElementById("survey-container");
  survey.questions.forEach((q) => {
    surveyContainer.appendChild(addQuestion(q));
  });

  // add events 'submit' & 'cancel' buttons
  addEventsSubmitResponse(survey);
};

export default renderRespondSurvey;
