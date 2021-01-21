import crudder from "./crudder";
import stringToHTML from "./stringToHTML";

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

const showSurveyResponses = (s) => {
  console.log(s);
  const appContainer = document.getElementById("app-container");

  Answers.getById(s.code).then((answers) => {
    console.log(answers);
    appContainer.innerHTML = document.getElementById("survey-responses").innerHTML;
    // set survey title
    document.getElementById("survey-title").innerText = s.title;

    // adding questions
    const surveyContainer = document.getElementById("survey-container");
    const selectedUser = answers[1];
    console.warn(selectedUser.answers);
    s.questions.forEach((q, index) => {
      surveyContainer.appendChild(addQuestion(q, selectedUser.answers[index]));
    });
  });
};

export default showSurveyResponses;
