const quiz = JSON.parse(localStorage.getItem("quiz"));
let index = 0;
let time = 30;
let timer;

function startTimer() {
  time = 30;
  document.getElementById("time").textContent = time;
  clearInterval(timer);
  timer = setInterval(() => {
    time--;
    document.getElementById("time").textContent = time;
    if (time === 0) {
      next();
    }
  }, 1000);
}

function loadQuestion() {
  if (index >= quiz.length) return finish();
  document.getElementById("question").textContent = quiz[index].question;
  const ul = document.getElementById("options");
  ul.innerHTML = "";
  quiz[index].options.forEach((opt, i) => {
    const label = String.fromCharCode(65 + i);
    ul.innerHTML += `<li><input type="radio" name="opt" value="${label}"> ${label}) ${opt}</li>`;
  });
  startTimer();
}

function next() {
  const selected = document.querySelector('input[name="opt"]:checked');
  const userAns = selected ? selected.value : "";
  const correct = quiz[index].correct;
  alert(userAns === correct ? "✅ Correct!" : `❌ Wrong! Correct: ${correct}`);
  index++;
  loadQuestion();
}

function finish() {
  alert("🎉 Quiz Finished!");
  clearInterval(timer);
  document.body.innerHTML = "<h2>Quiz Completed!</h2>";
}
loadQuestion();