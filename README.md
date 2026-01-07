# wrap-framwork-sample

This repository is a practical sample of using **WRAP** (W: Write / R: Refine / A: Atomic / P: Pair) to bootstrap and grow a project from an **almost-empty repository** by delegating work to **GitHub Copilot coding agent** through Issues and pull requests.

- **Goal**: Make the workflow reproducible: **Issue → Copilot coding agent PR → review → merge**, repeated in small steps.
- **Current state of this repo**: A minimal Node.js + TypeScript API skeleton with a `/healthz` endpoint, tests, lint/build/test commands, and repo-level guidance files.

---

## 1. What is WRAP?

WRAP is a practical operating pattern for getting high success rates with Copilot coding agent.

- **W — Write effective issues**  
  Write Issues with requirements, constraints, acceptance criteria, and test plans so the agent can act with minimal ambiguity.
- **R — Refine your instructions**  
  Provide repository guidance up front (commands, policies, naming rules, forbidden changes, directory conventions).
- **A — Atomic tasks**  
  Split work so **1 Issue ≈ 1 PR** that can be reviewed and merged independently.
- **P — Pair with the coding agent**  
  Review the PR, and iterate via PR comments (e.g., `@copilot`) to converge on the desired outcome.

> Tip: When starting from an empty repo, **R first** is especially effective. It reduces guesswork and prevents scope creep in later PRs.

---

## 2. Run the current project

### Prerequisites
- Node.js >= 18
- npm

### Quick Start

#### Install
```bash
npm ci
```

#### Build
```bash
npm run build
```

#### Test
```bash
npm test
```

#### Run
```bash
npm run dev
```

Default URL: `http://localhost:3000`

Change port:
```bash
PORT=8080 npm run dev
```

#### Health check
```bash
curl http://localhost:3000/healthz
```

Expected:
```json
{"status":"ok"}
```

### Common scripts
- `npm run dev` — start dev server
- `npm run build` — compile TypeScript
- `npm test` — run Jest tests
- `npm run lint` — run ESLint

---

## 3. From an empty repo to the current state (step-by-step WRAP)

This section explains **how to reproduce** the path from “nearly empty repository” to a working baseline using WRAP and Copilot coding agent.

### 3.0 Create an empty repository

1. Create a new GitHub repository (empty is fine).
2. (Recommended) Add only the minimum scaffolding manually:
   - `.github/ISSUE_TEMPLATE/` (Issue Forms)
   - `LICENSE`
   - `README.md` (this file)

> At this stage, you do **not** need application code yet.  
> First, make **W** and **R** possible.

---

### 3.1 W (Write): add an Issue Form for Copilot-ready tasks

The first “W” move for an empty repo is to introduce an **Issue Form** that enforces the structure Copilot needs.

#### 3.1.1 Add the Ultra-detailed Issue Form (manual commit recommended)
Create:
- `.github/ISSUE_TEMPLATE/config.yml` (optional, to prevent blank issues)
- `.github/ISSUE_TEMPLATE/copilot-task.yml` (the Ultra-detailed Issue Form)

This repo started by committing these templates early.

#### 3.1.2 Why this matters
The form forces you to include the most important fields for agent success, such as:
- **Change surface** (what to touch / avoid)
- **Edge cases / failure modes**
- **Acceptance criteria** (verifiable)
- **Test plan** (commands + manual steps)

> Don’t try to perfect the form on day one.  
> Use it for 1–2 iterations, then refine it through additional atomic Issues.

---

### 3.2 R (Refine): create repository guidance first (Pattern A)

When starting from an empty repo, the most stable approach is:

**Pattern A: your first PR should add only “R” artifacts**.

#### 3.2.1 Minimum R artifacts
- `.github/copilot-instructions.md`  
  Repository-wide Copilot guidance (commands, structure, quality rules, forbidden changes)
- `AGENTS.md`  
  Agent runbook (atomic scope, “no unrelated changes,” dependency policy, PR description expectations)

> Once these exist, future Issues do not need to repeat the same rules.

#### 3.2.2 Create the R Issue (example title)
- `[repo] refine: add baseline Copilot instructions and agent rules`

In the Issue, specify at least:
- “Standard commands” (install/lint/test/build/run — allow TBD if stack isn’t finalized)
- 1 Issue = 1 PR
- Dependency additions must be minimal and justified
- What must not be touched (generated artifacts, secrets, license text, etc.)
- PR acceptance conditions (e.g., lint/test pass if available)

---

### 3.3 P (Pair): assign the Issue to Copilot, review the PR, iterate on the PR

#### 3.3.1 Issue → PR
1. Create an Issue (using the Ultra-detailed Issue Form).
2. Ensure required fields are complete **before assigning** it to Copilot.
3. Assign the Issue to **Copilot coding agent**, which will open a draft PR.

**Important operational rule**:
- Changes to requirements after assignment should be communicated in the **PR discussion**, not by adding new Issue comments.

#### 3.3.2 Human review
When the PR arrives:
- Confirm the PR matches the Issue’s acceptance criteria
- Run the standard commands locally (e.g., `npm ci`, `npm test`, `npm run lint`)
- Look for unexpected scope (unrelated files, large dependency changes, etc.)

#### 3.3.3 Iterate with `@copilot`
- Use PR comments with `@copilot` and write clear, actionable steps.
- Prefer a single consolidated review comment (bullet list) over many small messages.

---

### 3.4 A (Atomic): split “new app creation” into reviewable steps

After R is in place, start building the project with **small, independent Issues**.

A typical split for bootstrapping a new app (stack-agnostic):

1. **Scaffold**
   - Minimal project skeleton (language/framework baseline)
2. **Build & Test**
   - build/test/lint commands exist and can run in CI
3. **Hello/Health**
   - a minimal endpoint (e.g., `/healthz`) to prove the app is alive
4. **Docs**
   - README with commands, rules, and review practices
5. **Hardening**
   - error handling, logging, security policies, dependency hygiene

> Avoid stuffing everything into a single Issue.  
> Atomic steps are the key to predictable PRs.

---

## 4. This repo’s timeline (example)

This repository followed the WRAP loop to reach the current state:

### 4.1 Initial (W baseline)
- Added the Ultra-detailed Issue Form under `.github/ISSUE_TEMPLATE/`

### 4.2 PR #2 (R + Scaffold)
- Copilot added a Node.js + TypeScript API skeleton
- Added `.github/copilot-instructions.md` as repo guidance

Reference:
- PR #2: https://github.com/shinyay/wrap-framwork-sample/pull/2

### 4.3 PR #4 (R refinement)
- Added `AGENTS.md` for agent operating rules

Reference:
- PR #4: https://github.com/shinyay/wrap-framwork-sample/pull/4

---

## 5. Suggested next atomic Issues

After the baseline is in place, keep moving with atomic Issues such as:
- `[ci] add: lint/test workflow`
- `[repo] refine: copilot-setup-steps workflow` (optional)
- `[docs] add: contribution & review guidelines`
- `[quality] add: coverage thresholds / test isolation rules`
- `[security] add: dependency audit policy`

---

## 6. R artifacts in this repo

- `.github/copilot-instructions.md`  
  Repository-wide Copilot guidance (commands, structure, expectations)
- `AGENTS.md`  
  Agent operating rules (atomic tasks, boundaries, PR template)

---

## License
MIT

