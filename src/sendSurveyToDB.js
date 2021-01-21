import crudder from "./crudder";
import renderSurveyControlPanel from "./renderSurveyControlPanel";
// if an 'id' is passed, then update, if not, create

const sendSurveyToDB = (id) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");
  let survey = {
    title: "",
    public: true,
    user_email: user.email,
    user_name: user.name,
    code: Math.floor(Math.random() * 1000),
    questions: [],
  };

  survey.title = document.querySelector(".create-survey-title").value || "Survey title";
  // survey public or not
  survey.public = document.getElementById("public-survey").value == "true";

  let questionCode = 0;
  const questions = document.querySelectorAll(".survey-question");
  questions.forEach((q) => {
    const question = {
      question: "",
      answers: [],
      code: questionCode,
      question_type: "",
    };

    question.question = q.querySelector(".question-text").value;
    question.question_type = q.querySelector(".question-type").value;

    questionCode++;

    if (question.question_type === "radio") {
      const answers = q.querySelectorAll(".question-answer");
      answers.forEach((a) => {
        question.answers.push(a.value);
      });
    }

    survey.questions.push(question);
  });
  // send survey to DB ( update or create survey )
  // if 'id' is not 'null', then update
  const Survey = crudder("api/surveys");
  if (id) Survey.update(id, { title: survey.title, questions: survey.questions }, token).then(renderSurveyControlPanel);
  else Survey.create(survey).then(renderSurveyControlPanel);
  // return to survey control panel
};

export default sendSurveyToDB;
