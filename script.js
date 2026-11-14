// ========================================================
// LOLO'S WEBSITE — PERSONAL SETTINGS
// ========================================================
const HER_NAME = "MY BUBBLES🤏";
const COUNTDOWN_TITLE = "Counting down to your birthday with you ♡";
const SPECIAL_DATE = "2026-12-25T00:00:00+02:00"; // Egypt Time (UTC+2)
const PREVIEW_KEY = "bishoy"; // Use ?preview=bishoy to bypass the lock anytime

// Personalize these questions with real memories and inside jokes.
// "correct" must match one of the answers exactly.
const QUIZ = [
  {
    question: "When was the day we held hands?",
    answers: ["11/10", "10/10", "9/10"],
    correct: "10/10",
    message: "Eh el shataraa dyy ♡♡"
  },
  {
    question: "Eh hoa aktr wa2t bnb2a m7tagen b3d feeh?",
    answers: ["Lma bnshof tt m3 b3d", "Lma bnb2a bara", "Lma bnb2a met5an2en"],
    correct: "Lma bnb2a met5an2en",
    message: "Kda kda bab2a m7tagek tol el wa2t 7ata lw eh 💗"
  },
  {
    question: "Which da we added back each other on snap ?",
    answers: ["5/3", "6/3", "7/3"],
    correct: "5/3",
    message: "There's still so much more of our story to write 💗💗"
  }
];

// ========================================================
// WEBSITE LOGIC — no need to change below this line
// ========================================================
document.title = `For ${HER_NAME} ♡`;
document.getElementById("herName").textContent = HER_NAME;
document.getElementById("footerName").textContent = `Made for ${HER_NAME} ♡`;
document.getElementById("countdownLabel").textContent = COUNTDOWN_TITLE;

document.getElementById("openLetter").addEventListener("click", () => {
  const letter = document.getElementById("letterText");
  const isOpen = letter.classList.toggle("show");
  document.getElementById("openLetter").textContent = isOpen ? "Close your letter" : "دوسيني هنا تاني";
  document.getElementById("letterTeaser").style.display = isOpen ? "none" : "block";
});

let quizIndex = 0;
function renderQuestion() {
  const q = QUIZ[quizIndex];
  document.getElementById("quizProgress").textContent = `QUESTION ${quizIndex + 1} OF ${QUIZ.length}`;
  document.getElementById("question").textContent = q.question;
  document.getElementById("feedback").textContent = "";
  document.getElementById("nextQuestion").style.display = "none";
  const answers = document.getElementById("answers");
  answers.innerHTML = "";
  q.answers.forEach(answer => {
    const button = document.createElement("button");
    button.className = "answer";
    button.textContent = answer;
    button.addEventListener("click", () => {
      [...answers.children].forEach(b => b.disabled = true);
      document.getElementById("feedback").textContent =
        answer === q.correct ? q.message : "Not quite — but you still get all my love. ♡";
      document.getElementById("nextQuestion").style.display = "inline-block";
    });
    answers.appendChild(button);
  });
}
document.getElementById("nextQuestion").addEventListener("click", () => {
  quizIndex++;
  if (quizIndex >= QUIZ.length) {
    document.getElementById("quizProgress").textContent = "QUIZ COMPLETE ♡";
    document.getElementById("question").textContent = "You made it to the end!";
    document.getElementById("answers").innerHTML = "";
    document.getElementById("feedback").textContent = "Your prize: a reminder that you are loved more than this little quiz can say. 💗";
    document.getElementById("nextQuestion").style.display = "none";
  } else renderQuestion();
});
renderQuestion();

// ========================================================
// UNIFIED COUNTDOWN & LOCKDOWN LOGIC (EGYPT TIME UTC+2)
// ========================================================
const target = new Date(SPECIAL_DATE).getTime();
const lockScreen = document.getElementById("lockdown-screen");
const urlParams = new URLSearchParams(window.location.search);
const isPreview = urlParams.get("preview") === PREVIEW_KEY;

if (lockScreen) {
  if (isPreview) {
    lockScreen.style.display = "none";
  } else {
    document.body.style.overflow = "hidden";
  }
}

function updateCountdown() {
  const distance = target - Date.now();
  if (Number.isNaN(target)) {
    document.getElementById("countdownLabel").textContent = "Please set a valid date in script.js.";
    return;
  }

  if (distance <= 0) {
    ["days", "hours", "minutes", "seconds"].forEach(id => {
      document.getElementById(id).textContent = "0";
      const lockEl = document.getElementById(`lock-${id}`);
      if (lockEl) lockEl.textContent = "0";
    });
    document.getElementById("countdownLabel").textContent = "Our special day is here! ♡";

    if (lockScreen && !isPreview) {
      lockScreen.style.display = "none";
      document.body.style.overflow = "auto";
    }
    return;
  }

  const d = Math.floor(distance / 86400000);
  const h = Math.floor((distance % 86400000) / 3600000);
  const m = Math.floor((distance % 3600000) / 60000);
  const s = Math.floor((distance % 60000) / 1000);

  // Update main page countdown
  document.getElementById("days").textContent = d;
  document.getElementById("hours").textContent = h;
  document.getElementById("minutes").textContent = m;
  document.getElementById("seconds").textContent = s;

  // Update lockdown screen countdown
  if (lockScreen && !isPreview) {
    document.getElementById("lock-days").textContent = d;
    document.getElementById("lock-hours").textContent = h;
    document.getElementById("lock-minutes").textContent = m;
    document.getElementById("lock-seconds").textContent = s;
  }
}

updateCountdown();
setInterval(updateCountdown, 1000);
