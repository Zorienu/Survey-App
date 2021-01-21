const addEventDeleteOptionBtn = (question) => {
  const deleteBtns = question.querySelectorAll(".del-answer");
  // just one option => hide delete button
  if (deleteBtns.length === 1) return (deleteBtns[0].style.display = "none");
  else deleteBtns[0].style.display = "inline";

  deleteBtns.forEach((b) => {
    b.addEventListener("click", () => {
      b.parentElement.remove(); // delete answer
      addEventDeleteOptionBtn(question);
    });
  });
};

export default addEventDeleteOptionBtn;
