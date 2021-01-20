import crudder from "./crudder";
import renderClient from "./renderClient";
const Answers = crudder("api/answers");

let answer = {
  user_email: "",
  user_name: "",
  survey_code: 0,
  answers: [],
};

const submitSurveyResponse = (survey) => {
  answer.user_email = document.getElementById("user-email").value;
  answer.user_name = document.getElementById("user-name").value;
  answer.survey_code = survey.code;

  if (!answer.user_email || !answer.user_name) return alert("You should provide your information");

  const questions = document.querySelectorAll(".s-question");
  questions.forEach((q, index) => {
    const inputs = q.getElementsByTagName("input");

    if (inputs.length === 1)
      answer.answers.push({
        code: index,
        answer: inputs[0].value,
      });
    else
      for (let i of inputs) {
        if (i.checked)
          return answer.answers.push({
            code: index,
            answer: i.value,
          });
      }
  });
  Answers.create(answer).then(console.log);
  renderClient();
};

export default submitSurveyResponse;
