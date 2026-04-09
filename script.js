const OBJECTIVES = [
  {
    id: 1,
    title: "Bearing and Range Static",
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
    title: "Bearing and Range Dynamic",
    description:
      "Place each numbered marker at the correct bearing and range position on the map.",
    image: "images/1A2.png",
    questions: [
      {
        id: 1,
        type: "dragable",
        answerMode: "coordinate",
        text: "Place each numbered marker at the correct bearing and range position on the map.",
        items: [
          {
            id: 1,
            label: "Position 1",
            displayText: "two two zero, range thirty",
            targetX: 387,
            targetY: 483,
            tolerance: 25,
          },
          {
            id: 2,
            label: "Position 2",
            displayText: "one zero zero, range fifty",
            targetX: 532,
            targetY: 423,
            tolerance: 25,
          },
          {
            id: 3,
            label: "Position 3",
            displayText: "zero five zero, range one hundred thirty",
            targetX: 669,
            targetY: 180,
            tolerance: 25,
          },
          {
            id: 4,
            label: "Position 4",
            displayText: "one two zero, range one hundred twenty",
            targetX: 679,
            targetY: 562,
            tolerance: 25,
          },
          {
            id: 5,
            label: "Position 5",
            displayText: "three one zero, range sixty",
            targetX: 245,
            targetY: 374,
            tolerance: 25,
          },
          {
            id: 6,
            label: "Position 6",
            displayText: "one one zero, range eighty",
            targetX: 599,
            targetY: 471,
            tolerance: 25,
          },
        ],
        explanation:
          "Place each numbered dot at the correct bearing and range position.",
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
        fieldPlaceholders: ["e.g. 2945S", "e.g. 08115E"],
        items: [
          { id: 1, label: "Target 1", latitude: "2945S", longitude: "08115E" },
          { id: 2, label: "Target 2", latitude: "2930S", longitude: "08430E" },
          { id: 3, label: "Target 3", latitude: "3015S", longitude: "08530E" },
          { id: 4, label: "Target 4", latitude: "3145S", longitude: "08315E" },
          { id: 5, label: "Target 5", latitude: "3115S", longitude: "08545E" },
          { id: 6, label: "Target 6", latitude: "3245S", longitude: "08445E" },
        ],
        explanation:
          "Determine Latitude/Longitude Coordinates for the marked positions.",
      },
      {
        id: 2,
        type: "multi-blank",
        text: "Latitude/Longitude Coordinates for each target?",
        fieldPlaceholders: ["e.g. 2915S", "e.g. 07830W"],
        items: [
          { id: 1, label: "Target 1", latitude: "2915S", longitude: "07830W" },
          { id: 2, label: "Target 2", latitude: "2930S", longitude: "07715W" },
          { id: 3, label: "Target 3", latitude: "3030S", longitude: "08045W" },
          { id: 4, label: "Target 4", latitude: "3030S", longitude: "07615W" },
          { id: 5, label: "Target 5", latitude: "3145S", longitude: "07730W" },
          { id: 6, label: "Target 6", latitude: "3215S", longitude: "07745W" },
        ],
        explanation:
          "Determine Latitude/Longitude Coordinates for the marked positions.",
      },
      {
        id: 3,
        type: "multi-blank",
        text: "Latitude/Longitude Coordinates for each target?",
        fieldPlaceholders: ["e.g. 2845N", "e.g. 08515W"],
        items: [
          { id: 1, label: "Target 1", latitude: "2845N", longitude: "08515W" },
          { id: 2, label: "Target 2", latitude: "2715N", longitude: "08545W" },
          { id: 3, label: "Target 3", latitude: "2745N", longitude: "08145W" },
          { id: 4, label: "Target 4", latitude: "2745N", longitude: "08130W" },
          { id: 5, label: "Target 5", latitude: "2630N", longitude: "08330W" },
          { id: 6, label: "Target 6", latitude: "2515N", longitude: "08130W" },
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
      "Drag each marker to its correct latitude and longitude position on the map.",
    image: "images/2A2.png",
    questions: [
      {
        id: 1,
        type: "dragable",
        answerMode: "coordinate",
        text: "Plot the following Lat/Long positions on the map.",
        items: [
          {
            id: 1,
            label: "Position 1",
            displayText: "2930S 08330E",
            targetX: 482,
            targetY: 190,
            tolerance: 25,
          },
          {
            id: 2,
            label: "Position 2",
            displayText: "3015S 08315E",
            targetX: 449,
            targetY: 305,
            tolerance: 25,
          },
          {
            id: 3,
            label: "Position 3",
            displayText: "3115S 08415E",
            targetX: 582,
            targetY: 459,
            tolerance: 25,
          },
          {
            id: 4,
            label: "Position 4",
            displayText: "3230S 08230E",
            targetX: 350,
            targetY: 654,
            tolerance: 25,
          },
          {
            id: 5,
            label: "Position 5",
            displayText: "2915S 08545E",
            targetX: 776,
            targetY: 150,
            tolerance: 25,
          },
          {
            id: 6,
            label: "Position 6",
            displayText: "3045S 08445E",
            targetX: 647,
            targetY: 382,
            tolerance: 25,
          },
        ],
        explanation:
          "Plot the following Lat/Long positions. Ensure you label your plots with the corresponding number.",
      },
      {
        id: 2,
        type: "dragable",
        answerMode: "coordinate",
        text: "Plot the following Lat/Long positions on the map.",
        items: [
          {
            id: 1,
            label: "Position 1",
            displayText: "3015S 08045W",
            targetX: 185,
            targetY: 305,
            tolerance: 25,
          },
          {
            id: 2,
            label: "Position 2",
            displayText: "3145S 07745W",
            targetX: 582,
            targetY: 535,
            tolerance: 25,
          },
          {
            id: 3,
            label: "Position 3",
            displayText: "2930S 07830W",
            targetX: 482,
            targetY: 189,
            tolerance: 25,
          },
          {
            id: 4,
            label: "Position 4",
            displayText: "2930S 07745W",
            targetX: 580,
            targetY: 186,
            tolerance: 25,
          },
          {
            id: 5,
            label: "Position 5",
            displayText: "3045S 08045W",
            targetX: 186,
            targetY: 382,
            tolerance: 25,
          },
          {
            id: 6,
            label: "Position 6",
            displayText: "3030S 07730W",
            targetX: 614,
            targetY: 343,
            tolerance: 25,
          },
        ],
        explanation:
          "Plot the following Lat/Long positions. Ensure you label your plots with the corresponding number.",
      },
      {
        id: 3,
        type: "dragable",
        answerMode: "coordinate",
        text: "Plot the following Lat/Long positions on the map.",
        items: [
          {
            id: 1,
            label: "Position 1",
            displayText: "2830N 08345W",
            targetX: 446,
            targetY: 186,
            tolerance: 25,
          },
          {
            id: 2,
            label: "Position 2",
            displayText: "2715N 08330W",
            targetX: 482,
            targetY: 382,
            tolerance: 25,
          },
          {
            id: 3,
            label: "Position 3",
            displayText: "2545N 08415W",
            targetX: 382,
            targetY: 614,
            tolerance: 25,
          },
          {
            id: 4,
            label: "Position 4",
            displayText: "2715N 08530W",
            targetX: 219,
            targetY: 382,
            tolerance: 25,
          },
          {
            id: 5,
            label: "Position 5",
            displayText: "2530N 08545W",
            targetX: 186,
            targetY: 650,
            tolerance: 25,
          },
          {
            id: 6,
            label: "Position 6",
            displayText: "2515N 08415W",
            targetX: 382,
            targetY: 691,
            tolerance: 25,
          },
        ],
        explanation:
          "Plot the following Lat/Long positions. Ensure you label your plots with the corresponding number.",
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
        text: "Determine MGRS Coordinates for each marked position.",
        fieldLabels: ["Grid Zone + Square", "Easting / Northing"],
        fieldPlaceholders: ["e.g. 16SFL", "e.g. 28844964"],
        items: [
          {
            id: 1,
            label: "Position 1",
            latitude: "16SFL",
            longitude: "28844964",
          },
          {
            id: 2,
            label: "Position 2",
            latitude: "16SFL",
            longitude: "31564913",
          },
          {
            id: 3,
            label: "Position 3",
            latitude: "16SFL",
            longitude: "33154906",
          },
          {
            id: 4,
            label: "Position 4",
            latitude: "16SFL",
            longitude: "30004860",
          },
          {
            id: 5,
            label: "Position 5",
            latitude: "16SFL",
            longitude: "28284744",
          },
          {
            id: 6,
            label: "Position 6",
            latitude: "16SFL",
            longitude: "33684791",
          },
        ],
        explanation: "Determine MGRS Coordinates for the marked positions.",
      },
    ],
  },
  {
    id: 6,
    title: "MGRS Coordinates Dynamic",
    description:
      "Drag each marker to its correct 10-meter MGRS position on the map.",
    image: "images/3A2.png",
    questions: [
      {
        id: 1,
        type: "dragable",
        answerMode: "coordinate",
        text: "Plot the following MGRS coordinates on the map.",
        items: [
          {
            id: 1,
            label: "Position 1",
            displayText: "16SFL29734966",
            targetX: 294,
            targetY: 89,
            tolerance: 25,
          },
          {
            id: 2,
            label: "Position 2",
            displayText: "16SFL32074967",
            targetX: 586,
            targetY: 57,
            tolerance: 25,
          },
          {
            id: 3,
            label: "Position 3",
            displayText: "16SFL28174820",
            targetX: 90,
            targetY: 254,
            tolerance: 25,
          },
          {
            id: 4,
            label: "Position 4",
            displayText: "16SFL31364870",
            targetX: 498,
            targetY: 199,
            tolerance: 25,
          },
          {
            id: 5,
            label: "Position 5",
            displayText: "16SFL30764757",
            targetX: 415,
            targetY: 234,
            tolerance: 25,
          },
          {
            id: 6,
            label: "Position 6",
            displayText: "16SFL31624730",
            targetX: 523,
            targetY: 374,
            tolerance: 25,
          },
        ],
        explanation:
          "Plot the following MGRS coordinates. Ensure you label your plots with the corresponding number.",
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
        fieldLabels: ["Grid", "Quadrant"],
        fieldPlaceholders: ["e.g. 184KZ", "e.g. 35"],
        items: [
          { id: 1, label: "Position 1", latitude: "184KZ", longitude: "35" },
          { id: 2, label: "Position 2", latitude: "184LC", longitude: "46" },
          { id: 3, label: "Position 3", latitude: "183KZ", longitude: "29" },
          { id: 4, label: "Position 4", latitude: "184LB", longitude: "11" },
          { id: 5, label: "Position 5", latitude: "185KZ", longitude: "42" },
          { id: 6, label: "Position 6", latitude: "183LA", longitude: "23" },
        ],
        explanation:
          "Determine GARS Coordinates for the corresponding numbers.",
      },
    ],
  },
  {
    id: 8,
    title: "Global Area Reference System Dynamic",
    description: "Drag each marker to its correct GARS position on the map.",
    image: "images/4A2.png",
    questions: [
      {
        id: 1,
        type: "dragable",
        answerMode: "coordinate",
        text: "Plot the following GARS positions on the map.",
        items: [
          {
            id: 1,
            label: "Position 1",
            displayText: "185LC13",
            targetX: 598,
            targetY: 67,
            tolerance: 25,
          },
          {
            id: 2,
            label: "Position 2",
            displayText: "183LB27",
            targetX: 254,
            targetY: 317,
            tolerance: 25,
          },
          {
            id: 3,
            label: "Position 3",
            displayText: "185LA14",
            targetX: 539,
            targetY: 475,
            tolerance: 25,
          },
          {
            id: 4,
            label: "Position 4",
            displayText: "183KZ22",
            targetX: 286,
            targetY: 634,
            tolerance: 25,
          },
          {
            id: 5,
            label: "Position 5",
            displayText: "185KZ38",
            targetX: 571,
            targetY: 787,
            tolerance: 25,
          },
          {
            id: 6,
            label: "Position 6",
            displayText: "184LC48",
            targetX: 318,
            targetY: 444,
            tolerance: 25,
          },
        ],
        explanation:
          "Plot the following GARS positions. Ensure you label your plots with the corresponding number.",
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
        fieldLabels: ["Grid", "Quadrant"],
        fieldPlaceholders: ["e.g. 1B2", "e.g. NW"],
        items: [
          { id: 1, label: "Position 1", latitude: "1B2", longitude: "NW" },
          { id: 2, label: "Position 2", latitude: "2B5", longitude: "NE" },
          { id: 3, label: "Position 3", latitude: "1A2", longitude: "SW" },
          { id: 4, label: "Position 4", latitude: "2C3", longitude: "NE" },
          { id: 5, label: "Position 5", latitude: "3C5", longitude: "NE" },
          { id: 6, label: "Position 6", latitude: "2B7", longitude: "SW" },
        ],
        explanation:
          "Determine CGRS Coordinates for the corresponding numbers.",
      },
    ],
  },
  {
    id: 10,
    title: "Common Grid Reference System Dynamic",
    description: "Drag each marker to its correct CGRS position on the map.",
    image: "images/5A2.png",
    questions: [
      {
        id: 1,
        type: "dragable",
        answerMode: "coordinate",
        text: "Plot the following CGRS positions on the map.",
        items: [
          {
            id: 1,
            label: "Position 1",
            displayText: "1C2SE",
            targetX: 738,
            targetY: 604,
            tolerance: 25,
          },
          {
            id: 2,
            label: "Position 2",
            displayText: "3C6NE",
            targetX: 818,
            targetY: 152,
            tolerance: 25,
          },
          {
            id: 3,
            label: "Position 3",
            displayText: "1A6SW",
            targetX: 284,
            targetY: 686,
            tolerance: 25,
          },
          {
            id: 4,
            label: "Position 4",
            displayText: "3B7NE",
            targetX: 409,
            targetY: 234,
            tolerance: 25,
          },
          {
            id: 5,
            label: "Position 5",
            displayText: "2C4NW",
            targetX: 615,
            targetY: 400,
            tolerance: 25,
          },
          {
            id: 6,
            label: "Position 6",
            displayText: "3B9SW",
            targetX: 533,
            targetY: 274,
            tolerance: 25,
          },
        ],
        explanation:
          "Plot the following CGRS positions. Ensure you label your plots with the corresponding number.",
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

const dragState = {
  selectedDotId: null,
  placements: {},
};

const views = {
  landing: document.getElementById("view-landing"),
  objective: document.getElementById("view-objective"),
  results: document.getElementById("view-results"),
};

const els = {
  cardGrid: document.getElementById("card-grid"),
  viewResultsBtnArea: document.getElementById("view-results-btn-area"),
  navObjectives: document.getElementById("nav-objectives"),
  headerLabel: document.getElementById("header-objective-label"),
  btnHome: document.getElementById("btn-home"),
  btnToggleProtr: document.getElementById("btn-toggle-protractor"),
  scenarioImg: document.getElementById("scenario-img"),
  protractorImg: document.getElementById("protractor-img"),
  imageSection: document.getElementById("image-section"),
  dropGrid: document.getElementById("drop-grid"),
  coordDotsLayer: document.getElementById("coord-dots-layer"),
  imgCoordTip: document.getElementById("img-coord-tip"),
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
    hideDropGrid();
    renderLandingCards();
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
  if (!objective) return null;
  return objective.questions[appState.currentQuestionIndex];
}

function getQuestionWeight(question) {
  return question.items.length;
}

function allObjectivesAnswered() {
  return OBJECTIVES.every((objective) => {
    const score = appState.scores[objective.id];
    return (
      score.answered.length === objective.questions.length &&
      score.answered.every((a) => a !== undefined)
    );
  });
}

// --- Multi-blank ---

function createMultiBlankMarkup(question, savedValues = [], disabled = false) {
  const [label1, label2] = question.fieldLabels || ["Latitude", "Longitude"];
  const [ph1, ph2] = question.fieldPlaceholders || ["", ""];
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
          <span>${escapeHtml(label1)}</span>
          <input
            class="multi-blank-input"
            type="text"
            data-field="latitude"
            data-index="${index}"
            placeholder="${escapeHtml(ph1)}"
            value="${escapeHtml(values.latitude || "")}"
            ${disabled ? "disabled" : ""}
          />
        </label>
        <label class="field-stack">
          <span>${escapeHtml(label2)}</span>
          <input
            class="multi-blank-input"
            type="text"
            data-field="longitude"
            data-index="${index}"
            placeholder="${escapeHtml(ph2)}"
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

function getMultiBlankValues(question) {
  return question.items.map((_, index) => {
    const latInput = els.questionForm.querySelector(
      `[data-field="latitude"][data-index="${index}"]`,
    );
    const lonInput = els.questionForm.querySelector(
      `[data-field="longitude"][data-index="${index}"]`,
    );
    return {
      latitude: latInput ? latInput.value.trim() : "",
      longitude: lonInput ? lonInput.value.trim() : "",
    };
  });
}

function buildMultiBlankResult(question, userEntries) {
  let correctCount = 0;
  question.items.forEach((item, index) => {
    const entry = userEntries[index] || { latitude: "", longitude: "" };
    const latCorrect = normalize(entry.latitude) === normalize(item.latitude);
    const lonCorrect = normalize(entry.longitude) === normalize(item.longitude);
    if (latCorrect && lonCorrect) correctCount += 1;
  });
  return {
    type: question.type,
    isFullyCorrect: correctCount === question.items.length,
    correctCount,
    totalCount: question.items.length,
    userEntries,
  };
}

// --- Multi-blank-spoken ---

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

// --- Dragable ---

function createDragableMarkup(
  question,
  savedPlacements = null,
  disabled = false,
) {
  dragState.placements = {};
  dragState.selectedDotId = null;
  if (savedPlacements) {
    savedPlacements.forEach((p) => {
      if (p.fx !== undefined) {
        dragState.placements[p.id] = { fx: p.fx, fy: p.fy };
      } else if (p.row >= 0 && p.col >= 0) {
        dragState.placements[p.id] = { row: p.row, col: p.col };
      }
    });
  }

  const coordList = question.items
    .map(
      (item) => `
    <li class="dragable-coord-item">
      <span class="dragable-coord-num">${item.id}.</span>
      <span class="dragable-coord-text">${escapeHtml(item.displayText || item.label)}</span>
    </li>
  `,
    )
    .join("");

  const dots = question.items
    .map((item) => {
      const isPlaced = !!dragState.placements[item.id];
      return `
      <div class="drag-dot ${isPlaced ? "placed" : ""} ${disabled ? "disabled-dot" : ""}"
           data-dot-id="${item.id}">
        <div class="drag-dot-marker"></div>
        <span>${item.id}</span>
      </div>
    `;
    })
    .join("");

  const placedCount = Object.keys(dragState.placements).length;
  return `
    <div class="dragable-panel">
      <p class="dragable-instructions">${question.answerMode === "coordinate" ? "Click a dot below to select it, then click the map image to place it." : "Click a numbered dot below, then click the map to place it. Click a placed dot on the map to move it."}</p>
      <ul class="dragable-coord-list">${coordList}</ul>
      <p class="dragable-progress">${placedCount} / ${question.items.length} placed</p>
      <div class="dragable-dots">${dots}</div>
    </div>
  `;
}

function buildDragableResult(question) {
  let correctCount = 0;
  let userEntries;

  if (question.answerMode === "coordinate") {
    const img = els.scenarioImg;
    question.items.forEach((item) => {
      const p = dragState.placements[item.id];
      if (!p) return;
      const dx = p.fx * img.naturalWidth - item.targetX;
      const dy = p.fy * img.naturalHeight - item.targetY;
      if (Math.sqrt(dx * dx + dy * dy) <= (item.tolerance ?? 30))
        correctCount += 1;
    });
    userEntries = question.items.map((item) => ({
      id: item.id,
      fx: dragState.placements[item.id]?.fx ?? -1,
      fy: dragState.placements[item.id]?.fy ?? -1,
    }));
  } else {
    question.items.forEach((item) => {
      const p = dragState.placements[item.id];
      if (p && p.row === item.targetRow && p.col === item.targetCol)
        correctCount += 1;
    });
    userEntries = question.items.map((item) => ({
      id: item.id,
      row: dragState.placements[item.id]?.row ?? -1,
      col: dragState.placements[item.id]?.col ?? -1,
    }));
  }

  return {
    type: question.type,
    isFullyCorrect: correctCount === question.items.length,
    correctCount,
    totalCount: question.items.length,
    userEntries,
  };
}

// --- Coordinate-click layer (for circular / non-grid images) ---

function positionCoordLayer() {
  if (els.coordDotsLayer.classList.contains("hidden")) return;
  const img = els.scenarioImg;
  if (!img.naturalWidth) return;
  const imgRect = img.getBoundingClientRect();
  const containerRect = els.imageSection.getBoundingClientRect();
  els.coordDotsLayer.style.left = `${imgRect.left - containerRect.left}px`;
  els.coordDotsLayer.style.top = `${imgRect.top - containerRect.top}px`;
  els.coordDotsLayer.style.width = `${imgRect.width}px`;
  els.coordDotsLayer.style.height = `${imgRect.height}px`;
}

function showCoordLayer(question) {
  els.coordDotsLayer.classList.remove("hidden");
  els.imageSection.classList.add("coord-mode");
  if (els.scenarioImg.complete && els.scenarioImg.naturalWidth > 0) {
    requestAnimationFrame(positionCoordLayer);
  } else {
    els.scenarioImg.addEventListener(
      "load",
      () => requestAnimationFrame(positionCoordLayer),
      { once: true },
    );
  }
}

function renderCoordPlacements(question) {
  els.coordDotsLayer
    .querySelectorAll(".placed-dot-container")
    .forEach((el) => el.remove());
  Object.entries(dragState.placements).forEach(([dotIdStr, p]) => {
    if (p.fx === undefined) return;
    const dotId = Number(dotIdStr);
    const container = document.createElement("div");
    container.className = "placed-dot-container";
    container.dataset.dotId = dotId;
    container.style.left = `${p.fx * 100}%`;
    container.style.top = `${p.fy * 100}%`;
    container.innerHTML = `
      <div class="drag-dot-marker placed-marker"></div>
      <span class="placed-dot-label">${dotId}</span>
    `;
    els.coordDotsLayer.appendChild(container);
  });
}

// --- Drop grid ---

// positionDropGrid — sizes the grid overlay to the rendered image bounds,
// applying optional per-question offsets defined in native image pixels.
//
// Question properties (all optional, default 0 / null):
//   gridOffsetX  {number} — left edge of grid area in native image pixels
//   gridOffsetY  {number} — top  edge of grid area in native image pixels
//   gridWidth    {number} — width  of grid area in native image pixels (null = image width  - gridOffsetX)
//   gridHeight   {number} — height of grid area in native image pixels (null = image height - gridOffsetY)
//
// These values are scaled to the rendered image size at runtime, so calibration
// done at any window size applies correctly at all sizes.
function positionDropGrid() {
  if (els.dropGrid.classList.contains("hidden")) return;
  const img = els.scenarioImg;
  if (!img.naturalWidth) return; // image not yet loaded

  const question = getCurrentQuestion();
  const imgRect = img.getBoundingClientRect();
  const containerRect = els.imageSection.getBoundingClientRect();

  const scaleX = imgRect.width / img.naturalWidth;
  const scaleY = imgRect.height / img.naturalHeight;

  const offsetX = (question?.gridOffsetX || 0) * scaleX;
  const offsetY = (question?.gridOffsetY || 0) * scaleY;
  const gridW = question?.gridWidth
    ? question.gridWidth * scaleX
    : imgRect.width - offsetX;
  const gridH = question?.gridHeight
    ? question.gridHeight * scaleY
    : imgRect.height - offsetY;

  els.dropGrid.style.left = `${imgRect.left - containerRect.left + offsetX}px`;
  els.dropGrid.style.top = `${imgRect.top - containerRect.top + offsetY}px`;
  els.dropGrid.style.width = `${gridW}px`;
  els.dropGrid.style.height = `${gridH}px`;
}

function showDropGrid(question) {
  const grid = els.dropGrid;
  const rows = question.gridRows;
  const cols = question.gridCols;

  grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
  grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  grid.innerHTML = "";

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const cell = document.createElement("div");
      cell.className = "drop-cell";
      cell.dataset.row = r;
      cell.dataset.col = c;
      cell.title = `r:${r} c:${c}`;
      grid.appendChild(cell);
    }
  }

  renderDropPlacements(question);
  grid.classList.remove("hidden");

  // Position after layout. If the image hasn't loaded yet (first navigation
  // to this objective), wait for the load event before positioning.
  if (els.scenarioImg.complete && els.scenarioImg.naturalWidth > 0) {
    requestAnimationFrame(positionDropGrid);
  } else {
    els.scenarioImg.addEventListener(
      "load",
      () => requestAnimationFrame(positionDropGrid),
      { once: true },
    );
  }
}

function hideDropGrid() {
  els.dropGrid.classList.add("hidden");
  els.dropGrid.innerHTML = "";
  els.coordDotsLayer.classList.add("hidden");
  els.coordDotsLayer.innerHTML = "";
  els.imageSection.classList.remove("coord-mode");
}

function renderDropPlacements(question) {
  els.dropGrid
    .querySelectorAll(".placed-dot-container")
    .forEach((el) => el.remove());

  Object.entries(dragState.placements).forEach(([dotIdStr, { row, col }]) => {
    const dotId = Number(dotIdStr);
    const cell = els.dropGrid.querySelector(
      `[data-row="${row}"][data-col="${col}"]`,
    );
    if (!cell) return;

    const container = document.createElement("div");
    container.className = "placed-dot-container";
    container.dataset.dotId = dotId;
    container.innerHTML = `
      <div class="drag-dot-marker placed-marker"></div>
      <span class="placed-dot-label">${dotId}</span>
    `;
    cell.appendChild(container);
  });
}

function updateDragablePanelProgress(question) {
  const progress = els.questionForm.querySelector(".dragable-progress");
  const placedCount = Object.keys(dragState.placements).length;

  if (progress) {
    progress.textContent = `${placedCount} / ${question.items.length} placed`;
  }

  question.items.forEach((item) => {
    const dot = els.questionForm.querySelector(`[data-dot-id="${item.id}"]`);
    if (dot) dot.classList.toggle("placed", !!dragState.placements[item.id]);
  });

  els.btnSubmit.disabled = placedCount < question.items.length;
}

// --- Normalize ---

function normalize(value) {
  return String(value)
    .toLowerCase()
    .replace(/\boh\b/g, "zero")
    .replace(/\bfor\b/g, "four")
    .replace(/\bto\b/g, "two")
    .replace(/°/g, "")
    .replace(/,/g, "")
    .replace(/-/g, "")
    .replace(/\s+/g, "")
    .trim();
}

// --- Score storage ---

function storeQuestionResult(objectiveId, questionIndex, result) {
  const score = appState.scores[objectiveId];
  score.answered[questionIndex] = result;
  score.correct = score.answered.reduce(
    (sum, entry) => sum + (entry ? entry.correctCount : 0),
    0,
  );

  const objective = getObjective(objectiveId);
  console.group(
    `%c Obj ${objectiveId}: ${objective?.title} — Q${questionIndex + 1} ` +
      `| ${result.isFullyCorrect ? "✅ CORRECT" : "❌ INCORRECT"} ` +
      `(${result.correctCount} / ${result.totalCount})`,
    result.isFullyCorrect
      ? "background:#1a4a1a;color:#7fff7f;padding:2px 4px;border-radius:3px"
      : "background:#4a1a1a;color:#ff9f9f;padding:2px 4px;border-radius:3px",
  );
  console.groupEnd();
}

// --- Question loading ---

function loadQuestion(index) {
  appState.currentQuestionIndex = index;
  const objective = getCurrentObjective();
  const question = objective.questions[index];
  const storedResult = appState.scores[objective.id].answered[index];
  const isAnswered = storedResult !== undefined;

  els.questionCounter.textContent = `Question ${index + 1} of ${objective.questions.length}`;
  els.questionText.textContent = question.text;

  hideDropGrid();

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
  } else if (question.type === "dragable") {
    els.questionForm.innerHTML = createDragableMarkup(
      question,
      isAnswered ? storedResult.userEntries : null,
      isAnswered,
    );
    if (question.answerMode === "coordinate") {
      showCoordLayer(question);
      if (isAnswered) renderCoordPlacements(question);
    } else {
      showDropGrid(question);
    }
  }

  if (question.type === "dragable") {
    els.btnSubmit.disabled =
      isAnswered ||
      Object.keys(dragState.placements).length < question.items.length;
  } else {
    els.btnSubmit.disabled = isAnswered;
  }

  if (isAnswered) {
    showStoredFeedback();
  } else {
    els.feedbackBlock.classList.add("hidden");
    els.feedbackBlock.classList.remove("correct", "incorrect", "neutral");
    if (question.type !== "dragable") focusFirstInput();
  }

  renderProgressSidebar();
  renderObjectiveNav();
}

// --- Feedback (Phase 2: neutral — evaluation deferred to results page) ---

function showStoredFeedback() {
  els.feedbackBlock.classList.remove("hidden", "correct", "incorrect");
  els.feedbackBlock.classList.add("neutral");
  els.feedbackText.textContent =
    "Answer recorded. Select another objective from the sidebar, or return home when finished.";
}

// --- Submit ---

function submitAnswer() {
  const objective = getCurrentObjective();
  const question = getCurrentQuestion();
  if (!question) return;

  const existingResult =
    appState.scores[objective.id].answered[appState.currentQuestionIndex];
  if (existingResult) return;

  let result;

  if (question.type === "multi-blank") {
    const userEntries = getMultiBlankValues(question);
    if (!userEntries.some((e) => e.latitude || e.longitude)) return;
    result = buildMultiBlankResult(question, userEntries);
  } else if (question.type === "multi-blank-spoken") {
    const userEntries = getMultiBlankSpokenValues(question);
    if (!userEntries.some((e) => e.bearingParts.some(Boolean) || e.rangeText))
      return;
    result = buildMultiBlankSpokenResult(question, userEntries);
  } else if (question.type === "dragable") {
    if (Object.keys(dragState.placements).length < question.items.length)
      return;
    result = buildDragableResult(question);
  }

  if (!result) return;

  storeQuestionResult(objective.id, appState.currentQuestionIndex, result);
  disableCurrentInputs();
  els.btnSubmit.disabled = true;
  showStoredFeedback();
  renderProgressSidebar();
  renderObjectiveNav();
  renderLandingViewResultsBtn();
}

function disableCurrentInputs() {
  els.questionForm.querySelectorAll("input, textarea").forEach((el) => {
    el.disabled = true;
  });
  els.questionForm.querySelectorAll(".drag-dot").forEach((d) => {
    d.classList.add("disabled-dot");
    d.classList.remove("selected");
  });
}

// --- Progress sidebar ---

function renderProgressSidebar() {
  const objective = getCurrentObjective();
  if (!objective) return;
  const score = appState.scores[objective.id];

  els.progressList.innerHTML = objective.questions
    .map((_, index) => {
      const result = score.answered[index];
      const label = result
        ? `Q${index + 1}: Submitted`
        : `Q${index + 1}: \u2014`;
      const className = `progress-item${result ? " submitted" : ""}`;
      return `<li class="${className}">${label}</li>`;
    })
    .join("");
}

// --- Results ---

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

// --- Navigation ---

function goToNextQuestion() {
  const objective = getCurrentObjective();
  const nextIndex = appState.currentQuestionIndex + 1;

  if (nextIndex >= objective.questions.length) {
    // Objective complete — return to landing (results deferred until all objectives done)
    navigateTo("landing");
    return;
  }

  loadQuestion(nextIndex);
}

function renderLandingViewResultsBtn() {
  if (!els.viewResultsBtnArea) return;
  const completedCount = OBJECTIVES.filter((obj) => {
    const score = appState.scores[obj.id];
    return (
      score.answered.length === obj.questions.length &&
      score.answered.every((a) => a !== undefined)
    );
  }).length;
  const total = OBJECTIVES.length;

  if (completedCount === total) {
    els.viewResultsBtnArea.innerHTML = `
      <button id="btn-view-results" class="btn-primary btn-view-results" type="button">
        &#10003; All Objectives Submitted &mdash; View Results
      </button>
    `;
  } else if (completedCount > 0) {
    els.viewResultsBtnArea.innerHTML = `
      <p class="landing-progress-msg">${completedCount} / ${total} objectives submitted</p>
    `;
  } else {
    els.viewResultsBtnArea.innerHTML = "";
  }
}

function renderLandingCards() {
  els.cardGrid.innerHTML = OBJECTIVES.map((objective) => {
    const score = appState.scores[objective.id];
    const allAnswered =
      score.answered.length === objective.questions.length &&
      score.answered.every((a) => a !== undefined);
    return `
      <article class="obj-card ${allAnswered ? "obj-card--completed" : ""}">
        <div class="card-header-row">
          <div class="card-number">${String(objective.id).padStart(2, "0")}</div>
          ${allAnswered ? `<span class="card-complete-badge">&#10003; Submitted</span>` : ""}
        </div>
        <h2 class="card-title">${objective.title}</h2>
        <p class="card-desc">${objective.description}</p>
        <button class="btn-start ${allAnswered ? "btn-start--done" : ""}" type="button" data-objective="${objective.id}">
          ${allAnswered ? "Review" : "Start"}
        </button>
      </article>
    `;
  }).join("");
  renderLandingViewResultsBtn();
}

function renderObjectiveNav() {
  els.navObjectives.innerHTML = OBJECTIVES.map((objective) => {
    const score = appState.scores[objective.id];
    const allAnswered =
      score.answered.length === objective.questions.length &&
      score.answered.every((a) => a !== undefined);
    return `
      <li>
        <a href="#" class="nav-link ${objective.id === appState.currentObjectiveId ? "active" : ""} ${allAnswered ? "completed" : ""}"
           data-objective="${objective.id}">
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

// --- Protractor ---

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

// --- Utility ---

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
  dragState.placements = {};
  dragState.selectedDotId = null;
  hideDropGrid();
  els.feedbackBlock.classList.add("hidden");
  els.feedbackBlock.classList.remove("correct", "incorrect", "neutral");
  navigateTo("landing");
}

// --- Events ---

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
      return;
    }

    if (event.target.closest("#btn-view-results")) {
      renderResults();
      navigateTo("results");
      return;
    }
  });

  els.btnHome.addEventListener("click", () => navigateTo("landing"));
  els.btnBackLanding.addEventListener("click", () => navigateTo("landing"));
  els.btnRestart.addEventListener("click", resetTraining);
  els.btnSubmit.addEventListener("click", submitAnswer);
  els.btnNext.addEventListener("click", goToNextQuestion);

  window.addEventListener("resize", () => {
    const q = getCurrentQuestion();
    if (q?.type !== "dragable") return;
    if (!els.dropGrid.classList.contains("hidden")) positionDropGrid();
    if (!els.coordDotsLayer.classList.contains("hidden")) positionCoordLayer();
  });

  // Coordinate mode: place dot on image click
  els.imageSection.addEventListener("click", (event) => {
    const question = getCurrentQuestion();
    if (
      !question ||
      question.type !== "dragable" ||
      question.answerMode !== "coordinate"
    )
      return;
    if (
      appState.scores[appState.currentObjectiveId]?.answered[
        appState.currentQuestionIndex
      ]
    )
      return;

    const imgRect = els.scenarioImg.getBoundingClientRect();
    const clickX = event.clientX - imgRect.left;
    const clickY = event.clientY - imgRect.top;
    if (
      clickX < 0 ||
      clickX > imgRect.width ||
      clickY < 0 ||
      clickY > imgRect.height
    )
      return;

    const clickedContainer = event.target.closest(".placed-dot-container");

    // Click on placed dot with no selection → pick it up
    if (clickedContainer && dragState.selectedDotId === null) {
      const dotId = Number(clickedContainer.dataset.dotId);
      delete dragState.placements[dotId];
      dragState.selectedDotId = dotId;
      renderCoordPlacements(question);
      updateDragablePanelProgress(question);
      els.questionForm
        .querySelectorAll(".drag-dot")
        .forEach((d) => d.classList.remove("selected"));
      const dot = els.questionForm.querySelector(`[data-dot-id="${dotId}"]`);
      if (dot) dot.classList.add("selected");
      return;
    }

    if (dragState.selectedDotId === null) return;

    // Displace existing dot if clicking its position
    if (clickedContainer) {
      delete dragState.placements[Number(clickedContainer.dataset.dotId)];
    }

    dragState.placements[dragState.selectedDotId] = {
      fx: clickX / imgRect.width,
      fy: clickY / imgRect.height,
    };
    dragState.selectedDotId = null;
    els.questionForm
      .querySelectorAll(".drag-dot")
      .forEach((d) => d.classList.remove("selected"));
    renderCoordPlacements(question);
    updateDragablePanelProgress(question);
  });

  // Coordinate mode: pixel tooltip for calibration
  els.imageSection.addEventListener("mousemove", (event) => {
    const question = getCurrentQuestion();
    if (!question || question.answerMode !== "coordinate") {
      els.imgCoordTip.classList.add("hidden");
      return;
    }
    const img = els.scenarioImg;
    if (!img.naturalWidth) return;
    const imgRect = img.getBoundingClientRect();
    const nx = Math.round(
      ((event.clientX - imgRect.left) / imgRect.width) * img.naturalWidth,
    );
    const ny = Math.round(
      ((event.clientY - imgRect.top) / imgRect.height) * img.naturalHeight,
    );
    if (nx < 0 || nx > img.naturalWidth || ny < 0 || ny > img.naturalHeight) {
      els.imgCoordTip.classList.add("hidden");
      return;
    }
    const containerRect = els.imageSection.getBoundingClientRect();
    els.imgCoordTip.textContent = `x:${nx} y:${ny}`;
    els.imgCoordTip.style.left = `${event.clientX - containerRect.left + 14}px`;
    els.imgCoordTip.style.top = `${event.clientY - containerRect.top - 28}px`;
    els.imgCoordTip.classList.remove("hidden");
  });

  els.imageSection.addEventListener("mouseleave", () => {
    els.imgCoordTip.classList.add("hidden");
  });

  els.btnToggleProtr.addEventListener("click", () => {
    appState.protractorVisible = !appState.protractorVisible;
    els.protractorImg.classList.toggle("hidden", !appState.protractorVisible);
    els.btnToggleProtr.textContent = appState.protractorVisible
      ? "Hide Protractor"
      : "Show Protractor";
  });

  els.questionForm.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" || event.shiftKey) return;
    if (
      event.target.tagName === "TEXTAREA" ||
      event.target.tagName === "INPUT"
    ) {
      event.preventDefault();
      submitAnswer();
    }
  });

  // Dragable: dot selection
  els.questionForm.addEventListener("click", (event) => {
    const question = getCurrentQuestion();
    if (!question || question.type !== "dragable") return;
    if (
      appState.scores[appState.currentObjectiveId]?.answered[
        appState.currentQuestionIndex
      ]
    )
      return;

    const dot = event.target.closest(".drag-dot");
    if (
      !dot ||
      dot.classList.contains("placed") ||
      dot.classList.contains("disabled-dot")
    )
      return;

    const dotId = Number(dot.dataset.dotId);
    dragState.selectedDotId = dotId;
    els.questionForm
      .querySelectorAll(".drag-dot")
      .forEach((d) => d.classList.remove("selected"));
    dot.classList.add("selected");
  });

  // Dragable: cell placement
  els.dropGrid.addEventListener("click", (event) => {
    const question = getCurrentQuestion();
    if (!question || question.type !== "dragable") return;
    if (
      appState.scores[appState.currentObjectiveId]?.answered[
        appState.currentQuestionIndex
      ]
    )
      return;

    const cell = event.target.closest(".drop-cell");
    if (!cell) return;

    const row = Number(cell.dataset.row);
    const col = Number(cell.dataset.col);
    const placedDot = cell.querySelector(".placed-dot-container");

    // Click on placed dot with no selection active = pick it up
    if (placedDot && dragState.selectedDotId === null) {
      const dotId = Number(placedDot.dataset.dotId);
      delete dragState.placements[dotId];
      dragState.selectedDotId = dotId;
      renderDropPlacements(question);
      updateDragablePanelProgress(question);
      els.questionForm
        .querySelectorAll(".drag-dot")
        .forEach((d) => d.classList.remove("selected"));
      const dot = els.questionForm.querySelector(`[data-dot-id="${dotId}"]`);
      if (dot) dot.classList.add("selected");
      return;
    }

    if (dragState.selectedDotId === null) return;

    // If cell already occupied, displace the existing dot
    if (placedDot) {
      const existingId = Number(placedDot.dataset.dotId);
      delete dragState.placements[existingId];
    }

    dragState.placements[dragState.selectedDotId] = { row, col };
    dragState.selectedDotId = null;
    els.questionForm
      .querySelectorAll(".drag-dot")
      .forEach((d) => d.classList.remove("selected"));

    renderDropPlacements(question);
    updateDragablePanelProgress(question);
  });
}

// --- Init ---

document.addEventListener("DOMContentLoaded", () => {
  renderObjectiveNav();
  initProtractor();
  bindEvents();
  navigateTo("landing");

  // DevTools helpers — inspect state at any time in the browser console:
  //   window.appState       → full application state including all stored answers
  //   window.debugScores()  → formatted score summary for all objectives
  window.appState = appState;
  window.debugScores = function () {
    console.group("%c 📊 Score Summary", "font-weight:bold;font-size:1.1em");
    let totalCorrect = 0;
    let totalPossible = 0;
    OBJECTIVES.forEach((obj) => {
      const score = appState.scores[obj.id];
      const possible = obj.questions.reduce((s, q) => s + q.items.length, 0);
      totalCorrect += score.correct;
      totalPossible += possible;
      const answered = score.answered.filter(Boolean).length;
      console.group(
        `Obj ${obj.id}: ${obj.title} — ${score.correct}/${possible} (${answered}/${obj.questions.length} questions answered)`,
      );
      console.groupEnd();
    });
    const pct =
      totalPossible > 0 ? Math.round((totalCorrect / totalPossible) * 100) : 0;
    console.groupEnd();
  };
});
