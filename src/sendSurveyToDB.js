import crudder from "./crudder";
import renderSurveyControlPanel from "./renderSurveyControlPanel";

const sendSurveyToDB = () => {
  const user = JSON.parse(localStorage.getItem("user"));
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
  // send survey to DB
  const Survey = crudder("api/surveys");
  Survey.create(survey).then(console.log);

  // return to survey control panel
  renderSurveyControlPanel();
};

export default sendSurveyToDB;
