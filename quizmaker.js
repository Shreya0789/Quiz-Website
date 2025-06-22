let quiz = JSON.parse(localStorage.getItem("quiz") || "[]");
function addQuestion() {
  const q = {
    question: document.getElementById("question").value,
    options: [
      document.getElementById("optA").value,
      document.getElementById("optB").value
    ],
    correct: document.getElementById("correct").value.toUpperCase()
  };
  quiz.push(q);
  localStorage.setItem("quiz", JSON.stringify(quiz));
  render();
}
function render() {
  const ul = document.getElementById("questionsList");
  ul.innerHTML = "";
  quiz.forEach((q, i) => {
    ul.innerHTML += `<li>Q${i+1}: ${q.question}</li>`;
  });
}
render();