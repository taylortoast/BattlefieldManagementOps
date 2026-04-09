# 334 TRS Battlefield Training — Project Notes

## Project Overview

Vanilla JS/HTML/CSS single-page application for 334 TRS coordinate system training.
10 objectives: 5 static (text input) + 5 dynamic (drag-and-drop marker placement).

## Tech Stack

- Vanilla JS, HTML5, CSS3 — no build step, no dependencies
- Open `index.html` directly in a browser to run

---

## Calibrating Dragable Questions

All dynamic objectives (IDs 2, 4, 6, 8, 10) use `answerMode: "coordinate"`. To calibrate:

1. Open `index.html` in the browser and navigate to the dynamic objective.
2. Hover over the map image — the tooltip shows native pixel coords (`x:NNN y:NNN`).
3. Find the pixel position of each target point on the map.
4. Set `targetX` and `targetY` for each item in `script.js`. Adjust `tolerance` (default 25px) if needed.

---

## Answer Format Conventions

| Objective               | Field 1 label      | Format example  | Field 2 label      | Format example |
| ----------------------- | ------------------ | --------------- | ------------------ | -------------- |
| Obj 1 — Bearing Static  | Bearing (3 words)  | `zero one zero` | Range              | `fifty`        |
| Obj 3 — Lat/Long Static | Latitude           | `2945S`         | Longitude          | `08115E`       |
| Obj 5 — MGRS Static     | Grid Zone + Square | `16SFL`         | Easting / Northing | `28844964`     |
| Obj 7 — GARS Static     | Grid               | `184KZ`         | Quadrant           | `35`           |
| Obj 9 — CGRS Static     | Grid               | `1B2`           | Quadrant           | `NW`           |

### Answer normalization

`normalize()` in `script.js` strips all whitespace, lowercases, and converts common spoken-word variants before comparing. This means:

- `"16S FL"` and `"16SFL"` are both accepted
- `"2884 4964"` and `"28844964"` are both accepted
- `"oh"` → `"zero"`, `"for"` → `"four"`, `"to"` → `"two"`

---

## Deferred Evaluation

Per-question feedback is intentionally neutral ("Answer recorded.").  
Correct/incorrect scores are only revealed on the **Results** page, which appears after all 10 objectives are submitted.

---

## Current Project Status (as of 2026-04-09)

### Completed

- 10 objectives implemented: 5 static (text input) + 5 dynamic (drag-and-drop)
- Static objectives (1, 3, 5, 7, 9): multi-blank text input with answer normalization
- Dynamic objectives (2, 4, 6, 8, 10): all use `answerMode: "coordinate"` — click-to-place with pixel-distance tolerance
- Drop-grid system removed from Objs 4, 6, 8, 10 (previously used `answerMode: "grid"`)
- Placed dot labels displayed on top of each marker
- Deferred evaluation: results only shown after all 10 objectives submitted
- Home screen shows per-objective completion badges and a "View Results" button when all 10 done
- Bearing input layout fixed: `spoken-row` uses `grid-template-columns: 78px auto 1fr` so all 3 bearing inputs are visible alongside the range input in the 640px QA panel
- Results page shows submission timestamp and a live running clock
- DevTools helpers (`window.appState`, `window.debugScores`) removed — answers were accessible via browser console

### Calibration Status

All dynamic objectives are calibrated with real `targetX`/`targetY` pixel values:

- **Obj 2** (Bearing Dynamic) — `1A2.png` — calibrated ✅
- **Obj 4** (Lat/Long Dynamic) — `2A2.png` — calibrated ✅
- **Obj 6** (MGRS Dynamic) — `3A2.png` — calibrated ✅
- **Obj 8** (GARS Dynamic) — `4A2.png` — calibrated ✅
- **Obj 10** (CGRS Dynamic) — `5A2.png` — calibrated ✅

---

## Developer Preferences

- Prefer editing existing files over creating new ones
- Keep code simple — no over-engineering
- No unnecessary comments or docstrings
