const btnPlusUs = document.getElementById("btnPlusUs");
const btnLessUs = document.getElementById("btnLessUs");
const btnPlusThey = document.getElementById("btnPlusThey");
const btnLessThey = document.getElementById("btnLessThey");
const btnReset = document.querySelector(".btnReset");

const scoreboardUs = document.querySelector(".sectionUs h2");
const scoreboardThey = document.querySelector(".sectionThey h2");
const scoreboardWinUs = document.querySelector(".winUs p");
const scoreboardWinThey = document.querySelector(".winThey p");

let scoreUs = 0;
let scoreThey = 0;
let gameWinsUs = 0;
let gameWinsThey = 0;

const resetAll = () => {
  scoreUs = 0;
  scoreThey = 0;
  gameWinsUs = 0;
  gameWinsThey = 0;
  scoreboardUs.innerHTML = 0;
  scoreboardThey.innerHTML = 0;
  scoreboardWinUs.innerHTML = 0;
  scoreboardWinThey.innerHTML = 0;
};

const resetScoreboard = () => {
  scoreUs = 0;
  scoreThey = 0;
  scoreboardUs.innerHTML = 0;
  scoreboardThey.innerHTML = 0;
};
resetScoreboard();

const addScoreUs = () => {
  scoreUs++;
  scoreboardUs.innerHTML = scoreUs;

  if (scoreUs >= 12) {
    resetScoreboard();
    alert("Nós Vencemos");
    gameWinsUs++;
    scoreboardWinUs.innerHTML = gameWinsUs;
  }
};
const addScoreThey = () => {
  scoreThey++;
  scoreboardThey.innerHTML = scoreThey;

  if (scoreThey >= 12) {
    resetScoreboard();
    alert("Eles Venceram");
    gameWinsThey++;
    scoreboardWinThey.innerHTML = gameWinsThey;
  }
};

const lessScoreUs = () => {
  scoreUs--;
  scoreUs < 0 ? (scoreUs = 0) : (scoreboardUs.innerHTML = scoreUs);
};
const lessScoreThey = () => {
  scoreThey--;
  scoreThey < 0 ? (scoreThey = 0) : (scoreboardThey.innerHTML = scoreThey);
};

btnPlusUs.addEventListener("click", addScoreUs);
btnLessUs.addEventListener("click", lessScoreUs);
btnPlusThey.addEventListener("click", addScoreThey);
btnLessThey.addEventListener("click", lessScoreThey);
btnReset.addEventListener("click", resetAll);
