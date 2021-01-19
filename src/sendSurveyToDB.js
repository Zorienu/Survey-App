import crudder from "./crudder";

const sendSurveyToDB = () => {
  let survey = {
    title: "",
    public: true,
    user_email: "temp@mail.com",
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
  console.log(survey);
  const Survey = crudder("api/surveys");
  Survey.create(survey).then(console.log);
};

export default sendSurveyToDB;
