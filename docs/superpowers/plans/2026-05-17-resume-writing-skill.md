# Resume Writing Skill Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a project skill that helps draft and refine resume content in `docs/drafts/resume.md`.

**Architecture:** Add one self-contained Cursor skill at `.cursor/skills/resume-writing/SKILL.md`. The skill will reference the approved design spec, the existing case study skill principles, and the current resume draft as the working document.

**Tech Stack:** Markdown, Cursor project skills.

---

### Task 1: Create Resume Writing Skill

**Files:**
- Create: `.cursor/skills/resume-writing/SKILL.md`
- Reference: `docs/superpowers/specs/2026-05-17-resume-writing-skill-design.md`
- Reference: `docs/drafts/resume.md`
- Reference: `.cursor/skills/case-study-building/SKILL.md`

- [ ] **Step 1: Create the skill file**

Create `.cursor/skills/resume-writing/SKILL.md` with:

- valid YAML frontmatter
- `name: resume-writing`
- a trigger-focused description
- default positioning for Product Designer with UI, Design Systems, and AI-enabled workflow strengths
- resume drafting workflow
- style rules adapted from `case-study-building`
- guidance to use `docs/drafts/resume.md` as the working draft
- compact examples based on the current resume draft

- [ ] **Step 2: Verify the skill**

Check that:

- frontmatter is valid
- description is specific and trigger-focused
- no supporting files are required
- file references are one level deep
- the body stays under 500 lines
- no em dashes or en dashes are introduced
- guidance reflects the approved design spec
