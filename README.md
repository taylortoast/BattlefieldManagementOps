# 334 TRS Battle Management Operations

A browser-based coordinate system training application for the 334th Training Squadron. Trainees work through 10 objectives covering five military coordinate systems, receiving scored feedback only after all objectives are submitted.

## Running the App

Open `index.html` directly in any modern browser — no build step, no dependencies.

## Objectives

| #   | Title                     | Type                     |
| --- | ------------------------- | ------------------------ |
| 1   | Bearing and Range Static  | Text input (spoken word) |
| 2   | Bearing and Range Dynamic | Click-to-place on map    |
| 3   | Lat/Long Static           | Text input               |
| 4   | Lat/Long Dynamic          | Click-to-place on map    |
| 5   | MGRS Static               | Text input               |
| 6   | MGRS Dynamic              | Click-to-place on map    |
| 7   | GARS Static               | Text input               |
| 8   | GARS Dynamic              | Click-to-place on map    |
| 9   | CGRS Static               | Text input               |
| 10  | CGRS Dynamic              | Click-to-place on map    |

Static objectives accept typed answers. Dynamic objectives require placing markers on the scenario map at the correct coordinate positions.

## Answer Format

Bearing answers are entered as three separate spoken-word inputs (e.g., `zero` `one` `zero`) plus a range (e.g., `fifty`). The app normalizes answers before scoring — spacing, capitalization, and common spoken variants (`oh` → `zero`, `for` → `four`) are all accepted.

| Objective               | Field 1            | Example         | Field 2            | Example    |
| ----------------------- | ------------------ | --------------- | ------------------ | ---------- |
| Obj 1 — Bearing Static  | Bearing (3 words)  | `zero one zero` | Range              | `fifty`    |
| Obj 3 — Lat/Long Static | Latitude           | `2945S`         | Longitude          | `08115E`   |
| Obj 5 — MGRS Static     | Grid Zone + Square | `16SFL`         | Easting / Northing | `28844964` |
| Obj 7 — GARS Static     | Grid               | `184KZ`         | Quadrant           | `35`       |
| Obj 9 — CGRS Static     | Grid               | `1B2`           | Quadrant           | `NW`       |

## Deferred Evaluation

Per-question feedback is intentionally neutral ("Answer recorded."). Correct/incorrect scores are revealed only on the Results page after all 10 objectives are submitted. The results page displays the submission timestamp and a live clock.

## Progress Persistence

Answers are saved to `localStorage` automatically. Refreshing the page or closing the browser will not lose progress. Use the **Restart Training** button on the results page to clear all answers and start over.

## Tech Stack

- Vanilla JavaScript, HTML5, CSS3
- No frameworks, no build tools, no dependencies
- Open `index.html` to run
