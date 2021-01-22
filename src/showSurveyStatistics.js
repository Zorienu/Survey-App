import showSurveyResponses from "./showSurveyResponses";
import stringToHTML from "./stringToHTML";
import renderSurveyControlPanel from "./renderSurveyControlPanel";

const drawPiechart = (answers, questionCode) => {
  google.charts.load("current", { packages: ["corechart"] });
  google.charts.setOnLoadCallback(drawChart);

  //// Draw the chart and set the chart values
  function drawChart() {
    let data = new google.visualization.DataTable();
    data.addColumn("string", "Answers");
    data.addColumn("number", "quantity");
    data.addRows(answers);

    // Optional; add a title and set the width and height of the chart
    const chartContainer = document.getElementById(`answers-${questionCode}`);
    let options = { title: "", width: chartContainer.offsetWidth, height: 200 };

    // Display the chart inside the <div> element with id="piechart"
    let chart = new google.visualization.PieChart(chartContainer);
    chart.draw(data, options);
  }
};

const showTextAnswers = (answers, questionCode) => {
  answers.forEach((a) => {
    const e = stringToHTML(`<div class="text-answer">${a}</div>`);
    const container = document.getElementById(`answers-${questionCode}`);
    container.appendChild(e);
  });
};

const addQuestion = (q) => {
  return stringToHTML(`
      <div class="s-question">
        <div class="question-title">${q.question}</div>
        <div id="answers-${q.code}"
      </div>
  `);
};

const showSurveyStatistics = (s, users) => {
  const appContainer = document.getElementById("app-container");
  const statisticsTemplate = document.getElementById("survey-statistics");
  appContainer.innerHTML = statisticsTemplate.innerHTML;
  document.getElementById("logo").addEventListener("click", renderSurveyControlPanel);
  // set title
  document.getElementById("survey-title").innerText = s.title;

  // add event 'show individual responses' button
  const showIndividualResponsesBtn = document.getElementById("change-mode");
  showIndividualResponsesBtn.addEventListener("click", () => showSurveyResponses(s));

  // add questions
  const surveyContainer = document.getElementById("survey-container");

  // iterate over survey questions
  s.questions.forEach((q, i) => {
    // obtain the answer of each user for the question
    let questionAnswers = [];
    users.forEach((user) => {
      questionAnswers.push(user.answers[i].answer);
    });

    // obtain the quantity of answers for each option
    let responsesQuantity = [];
    q.answers.forEach((a) => {
      responsesQuantity.push([a, questionAnswers.filter((ans) => ans == a).length]);
    });

    surveyContainer.appendChild(addQuestion(q, responsesQuantity));
    if (q.question_type === "radio") drawPiechart(responsesQuantity, i);
    else if (q.question_type === "text") showTextAnswers(questionAnswers, i);
  });
};

export default showSurveyStatistics;
