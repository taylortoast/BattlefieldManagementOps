//TODO: Fix result submission button. Submission function is not working.
//TODO: Need to defer all question evaluations to the final results page. The final results page should only be displayed after submission of all questions.
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
    title: "Bearing and Range",
    description:
      "Drag each marker to its correct position according to the provided bearing and range posistions.",
    //Official Answers:
    // 1. two two zero, range thirty
    // 2. one zero zero, range fifty
    // 3. zero five zero, range one hundred thirty
    // 4. one two zero, range one hundred twenty
    // 5. three one zero, range sixty
    // 6. one one zero, range eighty

    image: "images/1A2.png",
    questions: [
      {
        id: 1,
        type: "multi-blank-spoken",
        text: "Using the map, determine the magnetic bearing and range for each numbered position.",
        items: [
          //TODO: Need to create question items here simular to question id:2 items, but with a change. Users will be required to place dragable objects onto the image. Each dragable object placement should return a relative latitude and longitude position of the dragable object. There will be six objects, displayed in a side panel, from which the user can select, drag to target position, and place. Again this will commit the latitude and longitude coordinates to the question's answer. This question will therefore have a six part answer. The answers will be in the same shape as question id:2's answers. Static answers will be coded in to determine correctness. I would suggest creating a grid of cells for possition tracking that can be overlayed on to the provided image. Dragging the object to the specified cell and dropping/placing the object on that cell will determine a user's answer as correct. The dragable object will consist of a provided image of a dot. All dragable objects will use the same image. This question can be of the type dragable. Each target point's required latitude and longitude will be provided within the qa panel. The placement of all six dragable objects will be required before the student can submit their answer. The user will not be provided the evaluation of the question until the final results page, which is seen after all questions are completed.
        ],
        explanation:
          "Enter the bearing as three spoken words and the range as spoken text.",
      },
    ],
  },
  {
    id: 3,
    title: "Lat / Long Static",
    description: "Identify and convert latitude and longitude coordinates.",
    image: "images/2A.png",
    questions: [
      {
        id: 1,
        type: "multi-blank",
        text: "Latitude/Longitude Coordinates for each target?",
        //Official Answers:
        //1. 2945S 08115E
        //2. 2930S 08430E
        //3. 3015S 08530E
        //4. 3145S 08315E
        //5. 3115S 08545E
        //6. 3245S 08445E
        items: [
          { id: 1, label: "Target 1", latitude: "2945", longitude: "08115" },
          { id: 2, label: "Target 2", latitude: "2930", longitude: "08430" },
          { id: 3, label: "Target 3", latitude: "3015", longitude: "08530" },
          { id: 4, label: "Target 4", latitude: "3145", longitude: "08315" },
          { id: 5, label: "Target 5", latitude: "3115", longitude: "08545" },
          { id: 6, label: "Target 6", latitude: "3245", longitude: "08445" },
        ],
        explanation:
          "Determine Latitude/Longitude Coordinates for the marked positions.",
      },
    ],
  },
  {
    id: 4,
    title: "Lat / Long Dynamic",
    description:
      "Drag each marker to its correct latitude and longitude coordinates.",
    image: "images/2A2.png",
    questions: [
      {
        id: 1,
        type: "dragable",
        text: "Latitude/Longitude Coordinates for each target?",
        //Official Answers:
        //1. 16S FL 2884 4964
        //2. 16S FL 3156 4913
        //3. 16S FL 3315 4906
        //4. 16S FL 3000 4860
        //5. 16S FL 2828 4744
        //6. 16S FL 3368 4791
        items: [
          //TODO: Need to create question items here simular to question id:2 items, but with a change. Users will be required to place dragable objects onto the image. Each dragable object placement should return a relative latitude and longitude position of the dragable object. There will be six objects, displayed in a side panel, from which the user can select, drag to target position, and place. Again this will commit the latitude and longitude coordinates to the question's answer. This question will therefore have a six part answer. The answers will be in the same shape as question id:2's answers. Static answers will be coded in to determine correctness. I would suggest creating a grid of cells for possition tracking that can be overlayed on to the provided image. Dragging the object to the specified cell and dropping/placing the object on that cell will determine a user's answer as correct. The dragable object will consist of a provided image of a dot. All dragable objects will use the same image. This question can be of the type dragable. Each target point's required latitude and longitude will be provided within the qa panel. The placement of all six dragable objects will be required before the student can submit their answer. The user will not be provided the evaluation of the question until the final results page, which is seen after all questions are completed.
        ],
        explanation:
          "Plot the following Lat/Long Position. Ensure you label you plots with the corresponding number.",
      },
    ],
  },
  {
    id: 5,
    title: "MGRS Coordinates Static",
    description: "Identify and convert 10-meter MGRS Coordinates.",
    image: "images/3A.png",
    questions: [
      {
        id: 1,
        type: "multi-blank",
        text: "Determine MGRS Coordinates for each marked postition",
        //Official Answers:
        //1. 16S FL 2884 4964
        //2. 16S FL 3156 4913
        //3. 16S FL 3315 4906
        //4. 16S FL 3000 4860
        //5. 16S FL 2828 4744
        //6. 16S FL 3368 4791

        items: [
          { id: 1, label: "Postition 1", latitude: "2945", longitude: "08115" },
          { id: 2, label: "Postition 2", latitude: "2930", longitude: "08430" },
          { id: 3, label: "Postition 3", latitude: "3015", longitude: "08530" },
          { id: 4, label: "Postition 4", latitude: "3145", longitude: "08315" },
          { id: 5, label: "Postition 5", latitude: "3115", longitude: "08545" },
          { id: 6, label: "Postition 6", latitude: "3245", longitude: "08445" },
        ],
        explanation:
          "Determine GARS Coordinates for the corresponding numbers.",
      },
    ],
  },
  {
    id: 6,
    title: "MGRS Coordinates Dynamic",
    description: "Drag each marker to its correct 10-meter MGRS Coordinates.",
    //Research guidance on MGRS Coordinates. Check MGRS_Coordinate_Guide.md
    image: "images/3A2.png",
    questions: [
      {
        id: 1,
        type: "dragable",
        text: "Determine MGRS Coordinates for each marked postition",
        //Official Answers:
        //1. 16SFL29734966
        //2. 16SFL32074967
        //3. 16SFL28174820
        //4. 16SFL31364870
        //5. 16SFL30764757
        //6. 16SFL31624730
        items: [
          //TODO: Need to create question items here simular to question id:4 items, but with a change. Users will be required to place dragable objects onto the image. Each dragable object placement should return a relative latitude and longitude position of the dragable object. There will be six objects, displayed in a side panel, from which the user can select, drag to target position, and place. Again this will commit the latitude and longitude coordinates to the question's answer. This question will therefore have a six part answer. The answers will be in the same shape as question id:2's answers. Static answers will be coded in to determine correctness. I would suggest creating a grid of cells for possition tracking that can be overlayed on to the provided image. Dragging the object to the specified cell and dropping/placing the object on that cell will determine a user's answer as correct. The dragable object will consist of a provided image of a dot. All dragable objects will use the same image. This question can be of the type dragable. Each target point's required latitude and longitude will be provided within the qa panel. The placement of all six dragable objects will be required before the student can submit their answer. The user will not be provided the evaluation of the question until the final results page, which is seen after all questions are completed.
        ],
        explanation:
          "Plot the following MGRS coordinates. Ensure you label you plots with the corresponding number.",
      },
    ],
  },
  {
    id: 7,
    title: "Global Area Reference System Static",
    description:
      "Identify and convert GARS Coordinates for the corresponding numbers.",
    image: "images/4A.png",
    questions: [
      {
        id: 1,
        type: "multi-blank",
        text: "Determine GARS Coordinates for the corresponding numbers.",
        //Official Answers:
        // 1. 184KZ35
        // 2. 184LC46
        // 3. 183KZ29
        // 4. 184LB11
        // 5. 185KZ42
        // 6. 183LA23
        items: [
          { id: 1, label: "Postition 1", latitude: "2945", longitude: "08115" },
          { id: 2, label: "Postition 2", latitude: "2930", longitude: "08430" },
          { id: 3, label: "Postition 3", latitude: "3015", longitude: "08530" },
          { id: 4, label: "Postition 4", latitude: "3145", longitude: "08315" },
          { id: 5, label: "Postition 5", latitude: "3115", longitude: "08545" },
          { id: 6, label: "Postition 6", latitude: "3245", longitude: "08445" },
        ],
        explanation:
          "Determine GARS Coordinates for the corresponding numbers.",
      },
    ],
  },
  {
    id: 8,
    title: "Global Area Reference System Dynamic",
    description:
      "Drag each marker to its correct GARS Coordinates for the corresponding numbers.",
    //Research guidance on GARS Coordinates. Check GARS_Coordinate_Guide.md
    image: "images/4A2.png",
    questions: [
      {
        id: 1,
        type: "dragable",
        text: "Determine GARS Coordinates for the corresponding numbers.",
        //Official Answers:
        // 1. 185LC13
        // 2. 183LB27
        // 3. 185LA14
        // 4. 183KZ22
        // 5. 185KZ38
        // 6. 184LC48
        items: [
          //TODO: Need to create question items here simular to question id:4 items, but with a change. Users will be required to place dragable objects onto the image. Each dragable object placement should return a relative latitude and longitude position of the dragable object. There will be six objects, displayed in a side panel, from which the user can select, drag to target position, and place. Again this will commit the latitude and longitude coordinates to the question's answer. This question will therefore have a six part answer. The answers will be in the same shape as question id:2's answers. Static answers will be coded in to determine correctness. I would suggest creating a grid of cells for possition tracking that can be overlayed on to the provided image. Dragging the object to the specified cell and dropping/placing the object on that cell will determine a user's answer as correct. The dragable object will consist of a provided image of a dot. All dragable objects will use the same image. This question can be of the type dragable. Each target point's required latitude and longitude will be provided within the qa panel. The placement of all six dragable objects will be required before the student can submit their answer. The user will not be provided the evaluation of the question until the final results page, which is seen after all questions are completed.
        ],
        explanation:
          "Plot the following GARS Position. Ensure you label you plots with the corresponding number.",
      },
    ],
  },
  {
    id: 9,
    title: "Common Grid Reference System Static",
    description:
      "Identify and convert CGRS Coordinates for the corresponding numbers.",
    image: "images/5A.png",
    questions: [
      {
        id: 1,
        type: "multi-blank",
        text: "Determine CGRS Coordinates for the corresponding numbers.",
        //Official Answers:
        // 1. 1B2NW
        // 2. 2B5NE
        // 3. 1A2SW
        // 4. 2C3NE
        // 5. 3C5NE
        // 6. 2B7SW
        items: [
          { id: 1, label: "Postition 1", latitude: "2945", longitude: "08115" },
          { id: 2, label: "Postition 2", latitude: "2930", longitude: "08430" },
          { id: 3, label: "Postition 3", latitude: "3015", longitude: "08530" },
          { id: 4, label: "Postition 4", latitude: "3145", longitude: "08315" },
          { id: 5, label: "Postition 5", latitude: "3115", longitude: "08545" },
          { id: 6, label: "Postition 6", latitude: "3245", longitude: "08445" },
        ],
        explanation:
          "Plot the following CGRS Position. Ensure you label you plots with the corresponding number.",
      },
    ],
  },
  {
    id: 10,
    title: "Common Grid Reference System Dynamic",
    description:
      "Drag each marker to its correct CGRS Coordinates for the corresponding numbers.",
    //Research guidance on CGRS Coordinates. Check CGRS_Coordinate_Guide.md
    image: "images/5A2.png",
    questions: [
      {
        id: 1,
        type: "dragable",
        text: "Determine CGRS Coordinates for the corresponding numbers.",
        //Official Answers:
        // 1. 1C2SE
        // 2. 3C6NE
        // 3. 1A6SW
        // 4. 3B7NE
        // 5. 2C4NW
        // 6. 3B9SW
        items: [
          //TODO: Need to create question items here simular to question id:4 items, but with a change. Users will be required to place dragable objects onto the image. Each dragable object placement should return a relative latitude and longitude position of the dragable object. There will be six objects, displayed in a side panel, from which the user can select, drag to target position, and place. Again this will commit the latitude and longitude coordinates to the question's answer. This question will therefore have a six part answer. The answers will be in the same shape as question id:2's answers. Static answers will be coded in to determine correctness. I would suggest creating a grid of cells for possition tracking that can be overlayed on to the provided image. Dragging the object to the specified cell and dropping/placing the object on that cell will determine a user's answer as correct. The dragable object will consist of a provided image of a dot. All dragable objects will use the same image. This question can be of the type dragable. Each target point's required latitude and longitude will be provided within the qa panel. The placement of all six dragable objects will be required before the student can submit their answer. The user will not be provided the evaluation of the question until the final results page, which is seen after all questions are completed.
        ],
        explanation:
          "Plot the following CGRS Position. Ensure you label you plots with the corresponding number.",
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

function createMultiBlankMarkup(question, savedValues = [], disabled = false) {
  const instruction = question.instructions
    ? `<p class="question-help">${escapeHtml(question.instructions)}</p>`
    : "";

  const rows = question.items
    .map((item, index) => {
      const values = savedValues[index] || { latitude: "", longitude: "" };
      return `
      <div class="multi-blank-row">
        <div class="multi-blank-label">${escapeHtml(item.label || `Item ${item.id}`)}</div>
        <label class="field-stack">
          <span>Latitude</span>
          <input
            class="multi-blank-input"
            type="text"
            inputmode="numeric"
            data-field="latitude"
            data-index="${index}"
            placeholder="e.g. 30"
            value="${escapeHtml(values.latitude || "")}"
            ${disabled ? "disabled" : ""}
          />
        </label>
        <label class="field-stack">
          <span>Longitude</span>
          <input
            class="multi-blank-input"
            type="text"
            inputmode="numeric"
            data-field="logitude"
            data-index="${index}"
            placeholder="e.g. 08145"
            value="${escapeHtml(values.longitude || "")}"
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

function getMultiBlankValues(question) {
  return question.items.map((_, index) => {
    const latitudeInput = els.questionForm.querySelector(
      `[data-field="latitude"][data-index="${index}"]`,
    );
    const logitudeInput = els.questionForm.querySelector(
      `[data-field="logitude"][data-index="${index}"]`,
    );
    return {
      latitude: latitudeInput ? latitudeInput.value.trim() : "",
      longitude: logitudeInput ? logitudeInput.value.trim() : "",
    };
  });
}

function buildMultiBlankResult(question, userEntries) {
  let correctCount = 0;

  question.items.forEach((item, index) => {
    const entry = userEntries[index] || { latitude: "", longitude: "" };
    const latitudeCorrect = checkAnswer(entry.latitude, item.latitudeAnswers);
    const longitudeCorrect = checkAnswer(
      entry.longitude,
      item.longitudeAnswers,
    );
    if (latitudeCorrect && longitudeCorrect) {
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
