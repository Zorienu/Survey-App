import crudder from "./crudder";
import stringToHTML from "./stringToHTML";
import showSurveyStatistics from "./showSurveyStatistics";

const Answers = crudder("api/answers");

// iterate map over userAns and render each question TODO
const addQuestion = (q, userAns) => {
  if (q.question_type === "radio") {
    const answers = q.answers.map(
      (a) => `
    <input class="radio-s-res" type="radio" value="${a}" name="${q.code}" ${a === userAns.answer ? "checked" : ""} disabled>
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
        <input class="text-s-res" type="text" placeholder="Your answer" value="${userAns.answer}" disabled>
      </div>
    `);
  }
};

const removeQuestionChildren = (container) => {
  const questions = container.querySelectorAll(".s-question");
  for (let q of questions) q.parentNode.removeChild(q);
};

const showSurveyResponses = (s) => {
  console.log(s);
  const appContainer = document.getElementById("app-container");

  Answers.getById(s.code).then((answers) => {
    appContainer.innerHTML = document.getElementById("survey-responses").innerHTML;
    // set survey title
    document.getElementById("survey-title").innerText = s.title;

    // add event 'show statistics' button
    const showStatisticsBtn = document.getElementById("change-mode");
    showStatisticsBtn.addEventListener("click", () => showSurveyStatistics(s, answers));

    // set user selector
    const userSelector = document.getElementById("user-select");
    const userOptions = answers.map((a, i) => `<option value="${i}">${a.user_name} - ${a.user_email}`);
    userSelector.innerHTML = userOptions.join("");

    // when the user is changed, render the answers
    userSelector.addEventListener("change", () => {
      // adding questions
      const surveyContainer = document.getElementById("survey-container");
      removeQuestionChildren(surveyContainer);
      const selectedUser = answers[userSelector.value]; // get answers of selected user

      s.questions.forEach((q, index) => {
        surveyContainer.appendChild(addQuestion(q, selectedUser.answers[index]));
      });
    });

    // select the first user option
    userSelector.dispatchEvent(new Event("change"));
  });
};

export default showSurveyResponses;
