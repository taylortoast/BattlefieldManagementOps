const OBJECTIVES = [
  {
    id: 1,
    title: "Bearing and Range",
    description:
      "Calculate bearing and range to marked target points using the scenario map.",
    image: "images/1A.png",
    questions: [
      {
        id: 1,
        type: "multi-blank-spoken",
        text: "Using the map, determine the magnetic bearing and range for each numbered position.",
        items: [
          { id: 1, bearingParts: ["zero", "one", "zero"], rangeText: "fifty" },
          {
            id: 2,
            bearingParts: ["zero", "four", "zero"],
            rangeText: "ninety",
          },
          {
            id: 3,
            bearingParts: ["one", "zero", "zero"],
            rangeText: "one hundred forty",
          },
          {
            id: 4,
            bearingParts: ["one", "eight", "zero"],
            rangeText: "seventy",
          },
          {
            id: 5,
            bearingParts: ["two", "five", "zero"],
            rangeText: "one hundred twenty",
          },
          {
            id: 6,
            bearingParts: ["three", "two", "zero"],
            rangeText: "one hundred ten",
          },
        ],
        explanation:
          "Enter the bearing as three spoken words and the range as spoken text.",
      },
    ],
  },
  {
    id: 2,
    title: "Lat / Long",
    description: "Identify and convert latitude and longitude coordinates.",
    image: "images/2A.png",
    questions: [
      {
        id: 1,
        type: "single-input",
        text: "What is the latitude of the target in decimal degrees?",
        answers: ["34.1250", "34.125"],
        explanation: "Latitude is 34.1250° N.",
      },
      {
        id: 2,
        type: "single-input",
        text: "What is the longitude of the target in decimal degrees?",
        answers: ["-86.7500", "-86.75"],
        explanation: "Longitude is -86.7500° W.",
      },
      {
        id: 3,
        type: "single-input",
        text: "Provide the full coordinate pair as latitude, longitude.",
        answers: ["34.125,-86.75", "34.1250,-86.7500", "34.125 -86.75"],
        explanation: "Accepted format: 34.125, -86.75.",
      },
    ],
  },
  {
    id: 3,
    title: "MGRS",
    description: "Read and plot Military Grid Reference System coordinates.",
    image: "images/3A.png",
    questions: [
      {
        id: 1,
        type: "single-input",
        text: "What is the Grid Zone Designator (GZD) for the target location?",
        answers: ["38s"],
        explanation: "Grid Zone Designator is 38S.",
      },
      {
        id: 2,
        type: "single-input",
        text: "What are the two-letter 100,000m square identifier letters?",
        answers: ["yc"],
        explanation: "The 100,000m square identifier is YC.",
      },
      {
        id: 3,
        type: "single-input",
        text: "Provide the full 10-digit MGRS coordinate for the target.",
        answers: ["38syc1234567890", "38s yc 12345 67890", "38syc 1234567890"],
        explanation: "Full MGRS: 38SYC1234567890.",
      },
    ],
  },
  {
    id: 4,
    title: "GARS",
    description: "Identify Global Area Reference System grid cells.",
    image: "images/4A.png",
    questions: [
      {
        id: 1,
        type: "single-input",
        text: "What is the 3-digit longitude band number for the GARS cell containing the target?",
        answers: ["280"],
        explanation: "Longitude band is 280.",
      },
      {
        id: 2,
        type: "single-input",
        text: "What is the 2-letter latitude band designator for the GARS cell?",
        answers: ["kk"],
        explanation: "Latitude band is KK.",
      },
      {
        id: 3,
        type: "single-input",
        text: "Give the full GARS 15-minute cell designation.",
        answers: ["280kk32", "280kk 32"],
        explanation: "Full designation: 280KK32.",
      },
    ],
  },
  {
    id: 5,
    title: "CGRS",
    description: "Apply Common Geographic Reference System conventions.",
    image: "images/5A.png",
    questions: [
      {
        id: 1,
        type: "single-input",
        text: "What is the 1-degree CGRS cell designation for the target?",
        answers: ["42g"],
        explanation: "The 1-degree cell is 42G.",
      },
      {
        id: 2,
        type: "single-input",
        text: "Identify the 15-minute sub-cell within the CGRS 1-degree cell.",
        answers: ["c3"],
        explanation: "The sub-cell is C3.",
      },
      {
        id: 3,
        type: "single-input",
        text: "Give the full CGRS designation combining the 1-degree cell and 15-minute sub-cell.",
        answers: ["42gc3", "42g c3"],
        explanation: "Full CGRS: 42GC3.",
      },
    ],
  },
];

const appState = {
  currentView: "landing",
  currentObjectiveId: null,
  currentQuestionIndex: 0,
  protractorVisible: false,
  scores: buildInitialScores(),
};

const views = {
  landing: document.getElementById("view-landing"),
  objective: document.getElementById("view-objective"),
  results: document.getElementById("view-results"),
};

const els = {
  cardGrid: document.getElementById("card-grid"),
  navObjectives: document.getElementById("nav-objectives"),
  headerLabel: document.getElementById("header-objective-label"),
  btnHome: document.getElementById("btn-home"),
  btnToggleProtr: document.getElementById("btn-toggle-protractor"),
  scenarioImg: document.getElementById("scenario-img"),
  protractorImg: document.getElementById("protractor-img"),
  imageSection: document.getElementById("image-section"),
  questionCounter: document.getElementById("question-counter"),
  questionText: document.getElementById("question-text"),
  questionForm: document.getElementById("question-form"),
  btnSubmit: document.getElementById("btn-submit-answer"),
  feedbackBlock: document.getElementById("feedback-block"),
  feedbackText: document.getElementById("feedback-text"),
  btnNext: document.getElementById("btn-next-question"),
  progressList: document.getElementById("progress-list"),
  resultsTbody: document.querySelector("#results-table tbody"),
  overallScore: document.getElementById("overall-score"),
  overallPct: document.getElementById("overall-pct"),
  btnBackLanding: document.getElementById("btn-back-landing"),
  btnRestart: document.getElementById("btn-restart"),
};

function buildInitialScores() {
  return Object.fromEntries(
    OBJECTIVES.map((objective) => [objective.id, { correct: 0, answered: [] }]),
  );
}

function navigateTo(viewName) {
  Object.values(views).forEach((view) => view.classList.add("hidden"));
  views[viewName].classList.remove("hidden");
  appState.currentView = viewName;
  if (viewName === "landing") {
    els.headerLabel.textContent = "";
  }
}

function getObjective(objectiveId) {
  return OBJECTIVES.find((objective) => objective.id === objectiveId);
}

function getCurrentObjective() {
  return getObjective(appState.currentObjectiveId);
}

function getCurrentQuestion() {
  const objective = getCurrentObjective();
  return objective.questions[appState.currentQuestionIndex];
}

function getQuestionWeight(question) {
  return ["multi-blank", "multi-blank-spoken"].includes(question.type)
    ? question.items.length
    : 1;
}

function renderLandingCards() {
  els.cardGrid.innerHTML = OBJECTIVES.map(
    (objective) => `
    <article class="obj-card">
      <div class="card-number">${String(objective.id).padStart(2, "0")}</div>
      <h2 class="card-title">${objective.title}</h2>
      <p class="card-desc">${objective.description}</p>
      <button class="btn-start" type="button" data-objective="${objective.id}">Start</button>
    </article>
  `,
  ).join("");
}

function renderObjectiveNav() {
  els.navObjectives.innerHTML = OBJECTIVES.map((objective) => {
    const score = appState.scores[objective.id];
    const allAnswered = score.answered.length === objective.questions.length;
    return `
      <li>
        <a href="#" class="nav-link ${objective.id === appState.currentObjectiveId ? "active" : ""} ${allAnswered ? "completed" : ""}" data-objective="${objective.id}">
          ${objective.id}. ${objective.title}
        </a>
      </li>
    `;
  }).join("");
}

function loadObjective(objectiveId) {
  appState.currentObjectiveId = objectiveId;
  appState.currentQuestionIndex = 0;

  const objective = getCurrentObjective();
  els.headerLabel.textContent = `Objective ${objective.id}: ${objective.title}`;
  els.scenarioImg.src = objective.image;
  els.scenarioImg.alt = objective.title;

  renderObjectiveNav();
  resetProtractor();
  navigateTo("objective");
  loadQuestion(0);
}

function createSingleInputMarkup(savedValue = "", disabled = false) {
  return `
    <textarea id="single-answer-input" class="answer-input" placeholder="Type your answer here..." ${disabled ? "disabled" : ""}>${escapeHtml(savedValue)}</textarea>
  `;
}

function createMultiBlankMarkup(question, savedValues = [], disabled = false) {
  const instruction = question.instructions
    ? `<p class="question-help">${escapeHtml(question.instructions)}</p>`
    : "";

  const rows = question.items
    .map((item, index) => {
      const values = savedValues[index] || { bearing: "", range: "" };
      return `
      <div class="multi-blank-row">
        <div class="multi-blank-label">${escapeHtml(item.label || `Item ${item.id}`)}</div>
        <label class="field-stack">
          <span>Bearing</span>
          <input
            class="multi-blank-input"
            type="text"
            inputmode="numeric"
            data-field="bearing"
            data-index="${index}"
            placeholder="e.g. 010"
            value="${escapeHtml(values.bearing || "")}"
            ${disabled ? "disabled" : ""}
          />
        </label>
        <label class="field-stack">
          <span>Range</span>
          <input
            class="multi-blank-input"
            type="text"
            inputmode="numeric"
            data-field="range"
            data-index="${index}"
            placeholder="e.g. 50"
            value="${escapeHtml(values.range || "")}"
            ${disabled ? "disabled" : ""}
          />
        </label>
      </div>
    `;
    })
    .join("");

  return `${instruction}<div class="multi-blank-wrap">${rows}</div>`;
}

function createMultiBlankSpokenMarkup(
  question,
  savedValues = [],
  disabled = false,
) {
  const rows = question.items
    .map((item, index) => {
      const values = savedValues[index] || {
        bearingParts: ["", "", ""],
        rangeText: "",
      };
      return `
      <div class="multi-blank-row spoken-row">
        <div class="multi-blank-label">${escapeHtml(item.label || `Item ${item.id}`)}</div>
        <label class="field-stack">
          <span>Bearing</span>
          <div class="spoken-bearing-group">
            ${[0, 1, 2]
              .map(
                (partIndex) => `
              <input class="multi-blank-input spoken-bearing-input" type="text"
                data-field="bearing-part" data-index="${index}" data-part="${partIndex}"
                value="${escapeHtml(values.bearingParts?.[partIndex] || "")}"
                ${disabled ? "disabled" : ""} />
            `,
              )
              .join("")}
          </div>
        </label>
        <label class="field-stack">
          <span>Range</span>
          <input class="multi-blank-input" type="text"
            data-field="range-text" data-index="${index}"
            value="${escapeHtml(values.rangeText || "")}"
            ${disabled ? "disabled" : ""} />
        </label>
      </div>
    `;
    })
    .join("");

  return `<div class="multi-blank-wrap">${rows}</div>`;
}

function getMultiBlankSpokenValues(question) {
  return question.items.map((_, index) => ({
    bearingParts: [0, 1, 2].map((partIndex) => {
      const input = els.questionForm.querySelector(
        `[data-field="bearing-part"][data-index="${index}"][data-part="${partIndex}"]`,
      );
      return input ? input.value.trim() : "";
    }),
    rangeText:
      els.questionForm
        .querySelector(`[data-field="range-text"][data-index="${index}"]`)
        ?.value.trim() || "",
  }));
}

function buildMultiBlankSpokenResult(question, userEntries) {
  let correctCount = 0;

  question.items.forEach((item, index) => {
    const entry = userEntries[index] || {
      bearingParts: ["", "", ""],
      rangeText: "",
    };
    const bearingCorrect =
      entry.bearingParts.length === 3 &&
      entry.bearingParts.every(
        (part, i) => normalize(part) === normalize(item.bearingParts[i]),
      );
    const rangeCorrect =
      normalize(entry.rangeText) === normalize(item.rangeText);

    if (bearingCorrect && rangeCorrect) correctCount += 1;
  });

  return {
    type: question.type,
    isFullyCorrect: correctCount === question.items.length,
    correctCount,
    totalCount: question.items.length,
    userEntries,
  };
}

function loadQuestion(index) {
  appState.currentQuestionIndex = index;
  const objective = getCurrentObjective();
  const question = objective.questions[index];
  const storedResult = appState.scores[objective.id].answered[index];
  const isAnswered = storedResult !== undefined;

  els.questionCounter.textContent = `Question ${index + 1} of ${objective.questions.length}`;
  els.questionText.textContent = question.text;

  if (question.type === "multi-blank") {
    els.questionForm.innerHTML = createMultiBlankMarkup(
      question,
      storedResult?.userEntries || [],
      isAnswered,
    );
  } else if (question.type === "multi-blank-spoken") {
    els.questionForm.innerHTML = createMultiBlankSpokenMarkup(
      question,
      storedResult?.userEntries || [],
      isAnswered,
    );
  } else {
    els.questionForm.innerHTML = createSingleInputMarkup(
      storedResult?.userInput || "",
      isAnswered,
    );
  }

  els.btnSubmit.disabled = isAnswered;

  if (isAnswered) {
    showStoredFeedback(question, storedResult);
  } else {
    els.feedbackBlock.classList.add("hidden");
    els.feedbackBlock.classList.remove("correct", "incorrect");
    focusFirstInput();
  }

  renderProgressSidebar();
  renderObjectiveNav();
}

function showStoredFeedback(question, result) {
  els.feedbackBlock.classList.remove("hidden", "correct", "incorrect");
  els.feedbackBlock.classList.add(
    result.isFullyCorrect ? "correct" : "incorrect",
  );

  if (["multi-blank", "multi-blank-spoken"].includes(question.type)) {
    els.feedbackText.textContent = result.isFullyCorrect
      ? `Correct! ${result.correctCount}/${result.totalCount} entries correct. ${question.explanation}`
      : `Submitted. ${result.correctCount}/${result.totalCount} entries correct. ${question.explanation}`;
  } else {
    els.feedbackText.textContent = result.isFullyCorrect
      ? `Correct! ${question.explanation}`
      : `Incorrect. ${question.explanation}`;
  }
}

function normalize(value) {
  return String(value)
    .toLowerCase()
    .replace(/\boh\b/g, "zero")
    .replace(/\bfor\b/g, "four")
    .replace(/\bto\b/g, "two")
    .replace(/°/g, "")
    .replace(/,/g, "")
    .replace(/-/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function checkAnswer(userValue, acceptedAnswers) {
  const normalized = normalize(userValue);
  return acceptedAnswers.some((answer) => normalize(answer) === normalized);
}

function getSingleInputValue() {
  const input = document.getElementById("single-answer-input");
  return input ? input.value.trim() : "";
}

function getMultiBlankValues(question) {
  return question.items.map((_, index) => {
    const bearingInput = els.questionForm.querySelector(
      `[data-field="bearing"][data-index="${index}"]`,
    );
    const rangeInput = els.questionForm.querySelector(
      `[data-field="range"][data-index="${index}"]`,
    );
    return {
      bearing: bearingInput ? bearingInput.value.trim() : "",
      range: rangeInput ? rangeInput.value.trim() : "",
    };
  });
}

function buildSingleInputResult(question, userInput) {
  const isCorrect = checkAnswer(userInput, question.answers);
  return {
    type: question.type,
    isFullyCorrect: isCorrect,
    correctCount: isCorrect ? 1 : 0,
    totalCount: 1,
    userInput,
  };
}

function buildMultiBlankResult(question, userEntries) {
  let correctCount = 0;

  question.items.forEach((item, index) => {
    const entry = userEntries[index] || { bearing: "", range: "" };
    const bearingCorrect = checkAnswer(entry.bearing, item.bearingAnswers);
    const rangeCorrect = checkAnswer(entry.range, item.rangeAnswers);
    if (bearingCorrect && rangeCorrect) {
      correctCount += 1;
    }
  });

  return {
    type: question.type,
    isFullyCorrect: correctCount === question.items.length,
    correctCount,
    totalCount: question.items.length,
    userEntries,
  };
}

function storeQuestionResult(objectiveId, questionIndex, result) {
  const score = appState.scores[objectiveId];
  score.answered[questionIndex] = result;
  score.correct = score.answered.reduce(
    (sum, entry) => sum + (entry ? entry.correctCount : 0),
    0,
  );
}
function submitAnswer() {
  const objective = getCurrentObjective();
  const question = getCurrentQuestion();
  const existingResult =
    appState.scores[objective.id].answered[appState.currentQuestionIndex];
  if (existingResult) return;

  let result;

  if (question.type === "multi-blank") {
    const userEntries = getMultiBlankValues(question);
    if (!userEntries.some((e) => e.bearing || e.range)) return;
    result = buildMultiBlankResult(question, userEntries);
  } else if (question.type === "multi-blank-spoken") {
    const userEntries = getMultiBlankSpokenValues(question);
    if (!userEntries.some((e) => e.bearingParts.some(Boolean) || e.rangeText))
      return;
    result = buildMultiBlankSpokenResult(question, userEntries);
  } else {
    const userInput = getSingleInputValue();
    if (!userInput) return;
    result = buildSingleInputResult(question, userInput);
  }

  storeQuestionResult(objective.id, appState.currentQuestionIndex, result);
  disableCurrentInputs();
  els.btnSubmit.disabled = true;
  showStoredFeedback(question, result);
  renderProgressSidebar();
  renderObjectiveNav();
}

function disableCurrentInputs() {
  els.questionForm.querySelectorAll("input, textarea").forEach((element) => {
    element.disabled = true;
  });
}

function renderProgressSidebar() {
  const objective = getCurrentObjective();
  const score = appState.scores[objective.id];

  els.progressList.innerHTML = objective.questions
    .map((question, index) => {
      const result = score.answered[index];
      let label = `Q${index + 1}: —`;
      let className = "progress-item";

      if (result) {
        if (["multi-blank", "multi-blank-spoken"].includes(question.type)) {
          label = `Q${index + 1}: ${result.correctCount}/${result.totalCount} correct`;
          className += result.isFullyCorrect
            ? " correct"
            : result.correctCount > 0
              ? " partial"
              : " incorrect";
        } else {
          label = `Q${index + 1}: ${result.isFullyCorrect ? "Correct" : "Incorrect"}`;
          className += result.isFullyCorrect ? " correct" : " incorrect";
        }
      }

      return `<li class="${className}">${label}</li>`;
    })
    .join("");
}

function renderResults() {
  els.resultsTbody.innerHTML = "";

  let totalCorrect = 0;
  let totalPossible = 0;

  OBJECTIVES.forEach((objective) => {
    const score = appState.scores[objective.id];
    const objectiveTotal = objective.questions.reduce(
      (sum, question) => sum + getQuestionWeight(question),
      0,
    );
    const objectiveCorrect = score.correct;
    totalCorrect += objectiveCorrect;
    totalPossible += objectiveTotal;

    const percent =
      objectiveTotal > 0
        ? Math.round((objectiveCorrect / objectiveTotal) * 100)
        : 0;
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>Obj ${objective.id}: ${objective.title}</td>
      <td>${objectiveCorrect} / ${objectiveTotal}</td>
      <td>${percent}%</td>
    `;
    els.resultsTbody.appendChild(row);
  });

  const overallPercent =
    totalPossible > 0 ? Math.round((totalCorrect / totalPossible) * 100) : 0;
  els.overallScore.textContent = `${totalCorrect} / ${totalPossible}`;
  els.overallPct.textContent = `${overallPercent}%`;
}

function goToNextQuestion() {
  const objective = getCurrentObjective();
  const nextIndex = appState.currentQuestionIndex + 1;

  if (nextIndex >= objective.questions.length) {
    renderResults();
    navigateTo("results");
    return;
  }

  loadQuestion(nextIndex);
}

function initProtractor() {
  const protractor = els.protractorImg;
  const container = els.imageSection;
  let dragging = false;
  let startX = 0;
  let startY = 0;
  let posX = 80;
  let posY = 80;

  protractor.style.left = `${posX}px`;
  protractor.style.top = `${posY}px`;

  protractor.addEventListener("mousedown", (event) => {
    dragging = true;
    startX = event.clientX - posX;
    startY = event.clientY - posY;
    protractor.style.cursor = "grabbing";
    event.preventDefault();
  });

  document.addEventListener("mousemove", (event) => {
    if (!dragging) return;

    const rect = container.getBoundingClientRect();
    const maxX = rect.width - protractor.offsetWidth;
    const maxY = rect.height - protractor.offsetHeight;

    posX = Math.max(0, Math.min(event.clientX - rect.left - startX, maxX));
    posY = Math.max(0, Math.min(event.clientY - rect.top - startY, maxY));

    protractor.style.left = `${posX}px`;
    protractor.style.top = `${posY}px`;
  });

  document.addEventListener("mouseup", () => {
    if (!dragging) return;
    dragging = false;
    protractor.style.cursor = "grab";
  });
}

function resetProtractor() {
  els.protractorImg.style.left = "80px";
  els.protractorImg.style.top = "80px";
}

function focusFirstInput() {
  const firstInput = els.questionForm.querySelector("textarea, input");
  if (firstInput) firstInput.focus();
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function resetTraining() {
  appState.currentObjectiveId = null;
  appState.currentQuestionIndex = 0;
  appState.scores = buildInitialScores();
  els.feedbackBlock.classList.add("hidden");
  els.feedbackBlock.classList.remove("correct", "incorrect");
  renderObjectiveNav();
  navigateTo("landing");
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const startButton = event.target.closest(".btn-start");
    if (startButton) {
      loadObjective(Number(startButton.dataset.objective));
      return;
    }

    const navLink = event.target.closest(".nav-link");
    if (navLink) {
      event.preventDefault();
      loadObjective(Number(navLink.dataset.objective));
    }
  });

  els.btnHome.addEventListener("click", () => navigateTo("landing"));
  els.btnBackLanding.addEventListener("click", () => navigateTo("landing"));
  els.btnRestart.addEventListener("click", resetTraining);
  els.btnSubmit.addEventListener("click", submitAnswer);
  els.btnNext.addEventListener("click", goToNextQuestion);

  els.btnToggleProtr.addEventListener("click", () => {
    appState.protractorVisible = !appState.protractorVisible;
    els.protractorImg.classList.toggle("hidden", !appState.protractorVisible);
    els.btnToggleProtr.textContent = appState.protractorVisible
      ? "Hide Protractor"
      : "Show Protractor";
  });

  els.questionForm.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" || event.shiftKey) return;
    if (event.target.tagName === "TEXTAREA") {
      event.preventDefault();
      submitAnswer();
      return;
    }
    if (event.target.tagName === "INPUT") {
      event.preventDefault();
      submitAnswer();
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderLandingCards();
  renderObjectiveNav();
  initProtractor();
  bindEvents();
  navigateTo("landing");
});
