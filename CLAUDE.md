# 334 TRS Battlefield Training — Project Notes

## Project Overview
Vanilla JS/HTML/CSS single-page application for 334 TRS coordinate system training.
10 objectives: 5 static (text input) + 5 dynamic (drag-and-drop marker placement).

## Tech Stack
- Vanilla JS, HTML5, CSS3 — no build step, no dependencies
- Open `index.html` directly in a browser to run

---

## Calibrating Dragable Questions

Every dragable objective (IDs 2, 4, 6, 8, 10) needs two calibration steps:

### Step 1 — Align the grid to the map

Map images may have a decorative border or margin around the actual coordinate grid. Use these optional question properties to inset the interactive grid so it sits precisely over the map's grid lines:

```js
gridOffsetX: 0,   // left edge of grid, in native image pixels
gridOffsetY: 0,   // top  edge of grid, in native image pixels
gridWidth:   null, // width  of grid area in native pixels (null = full image width - offsetX)
gridHeight:  null, // height of grid area in native pixels (null = full image height - offsetY)
```

**How to measure:**
1. Open the map image in an image editor (e.g., Paint, Photoshop, GIMP).
2. Hover over the top-left corner of the coordinate grid — note the X,Y pixel position.
   - Set `gridOffsetX` to that X value, `gridOffsetY` to that Y value.
3. Hover over the bottom-right corner — subtract offset to get width/height.
   - Set `gridWidth`  = (bottom-right X) - gridOffsetX
   - Set `gridHeight` = (bottom-right Y) - gridOffsetY

Values are in **native image pixels** and scale automatically to any window size.

**Example:**
```js
// 4A.png has a 10px border on all sides of a 605×783 inner map
gridOffsetX: 10,
gridOffsetY: 10,
gridWidth:   605,
gridHeight:  783,
```

---

### Step 2 — Set the correct answer cells (targetRow / targetCol)

Each item in a dragable question has a `targetRow` and `targetCol` that define the correct grid cell.

**How to calibrate:**
1. Open the objective in the browser.
2. Hover over grid cells on the map — the browser tooltip shows `r:X c:X` (row and column index, 0-based from top-left).
3. Find the cell that covers the target point on the map.
4. Set `targetRow` and `targetCol` in `script.js` accordingly.

**Example (Obj 6 MGRS Dynamic):**
```js
items: [
  { id: 1, label: "Position 1", displayText: "16SFL29734966", targetRow: 5, targetCol: 12 },
  { id: 2, label: "Position 2", displayText: "16SFL32074967", targetRow: 5, targetCol: 24 },
  // ...
]
```

---

## Answer Format Conventions

| Objective | Field 1 label | Format example | Field 2 label | Format example |
|-----------|--------------|----------------|--------------|----------------|
| Obj 1 — Bearing Static | Bearing (3 words) | `zero one zero` | Range | `fifty` |
| Obj 3 — Lat/Long Static | Latitude | `2945S` | Longitude | `08115E` |
| Obj 5 — MGRS Static | Grid Zone + Square | `16SFL` | Easting / Northing | `28844964` |
| Obj 7 — GARS Static | Grid | `184KZ` | Quadrant | `35` |
| Obj 9 — CGRS Static | Grid | `1B2` | Quadrant | `NW` |

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

## Current Project Status (as of 2026-04-08)

### Completed
- 10 objectives implemented: 5 static (text input) + 5 dynamic (drag-and-drop)
- Static objectives (1, 3, 5, 7, 9): multi-blank text input with answer normalization
- Dynamic objectives (2, 4, 6, 8, 10): drag-and-drop marker placement
  - Obj 2 (Bearing Dynamic): uses `answerMode: "coordinate"` — click-to-place with pixel-distance tolerance
  - Objs 4, 6, 8, 10: use `answerMode: "grid"` — cell-match with 40×40 (or 40×27 for MGRS) grid
- Grid overlay sized precisely to rendered image via `getBoundingClientRect()` + native pixel scale factors
- Placed dot labels displayed on top of each marker
- Deferred evaluation: results only shown after all 10 objectives submitted
- Home screen shows per-objective completion badges and a "View Results" button when all 10 done
- DevTools helpers: `window.appState`, `window.debugScores()`
- Console logging: color-coded correct/incorrect per question at submit time

### Pending Calibration
All dragable objectives have placeholder `targetRow: 0, targetCol: 0` (grid mode) or `targetX: 0, targetY: 0` (coordinate mode). Each needs calibration:
- **Obj 2** (Bearing Dynamic): coordinate mode — use browser DevTools to find native pixel coords for each position on `1A2.png`
- **Obj 4** (Lat/Long Dynamic): grid mode — hover tooltip shows `r:X c:X` on each cell
- **Obj 6** (MGRS Dynamic): grid mode — 40×27 grid on `3A2.png`
- **Obj 8** (GARS Dynamic): grid mode — `4A2.png` present, grid 40×40
- **Obj 10** (CGRS Dynamic): grid mode — `5A2.png`, grid 40×40

### Known Issues / Notes
- Obj 2 grid offset was set to `gridOffsetX: 180, gridOffsetY: 89` but then replaced by coordinate mode — coordinate targets still need calibration

---

## Developer Preferences
- Ask before committing to git
- Prefer editing existing files over creating new ones
- Keep code simple — no over-engineering
- No unnecessary comments or docstrings
