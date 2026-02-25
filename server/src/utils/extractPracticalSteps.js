/**
 * Extract 2-6 practical steps from Section 2 content (English and Marathi)
 * so students can practice what they learned. Used when day.practicalSteps is empty.
 */

const MAX_STEPS = 6;
const MIN_STEPS = 2;
const MAX_STEP_LENGTH = 220;

// Remove timestamps like [00:02:24] or [00:03]
function cleanStepText(text) {
  if (!text || typeof text !== "string") return "";
  return text
    .replace(/\s*\[\d{1,2}:\d{2}(?::\d{2})?\]\s*/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// Extract candidate lines that look like actionable steps
function extractCandidates(content) {
  if (!content || typeof content !== "string") return [];
  const lines = content.split("\n");
  const candidates = [];

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i].trim();
    if (!raw) continue;

    // Skip long headings / titles (likely not a single step)
    if (raw.length > MAX_STEP_LENGTH) continue;

    // a. b. c. style (common in Day 1 "How to Start")
    if (/^[a-z]\.\s+.+/.test(raw)) {
      const text = cleanStepText(raw.replace(/^[a-z]\.\s+/, ""));
      if (text.length > 10) candidates.push(text);
      continue;
    }

    // 1. 2. 3. style - take if short enough to be one step
    const numMatch = raw.match(/^\d+\.\s+(.+)$/);
    if (numMatch) {
      const text = cleanStepText(numMatch[1]);
      if (text.length > 8 && text.length <= MAX_STEP_LENGTH) candidates.push(text);
      continue;
    }

    // Bullet "- " with action (Click, Open, Press, Go to, Right-click, Create, etc.)
    if (/^[-•]\s+/.test(raw)) {
      const text = cleanStepText(raw.replace(/^[-•]\s+/, ""));
      const hasAction = /\b(click|open|press|go to|right-click|create|select|type|use|double-click|save|connect|turn on|shut down|minimize|maximize|pin|add|remove|change|adjust|enter|find|replace|cut|copy|paste)\b/i.test(text);
      if (hasAction && text.length > 12 && text.length <= MAX_STEP_LENGTH) candidates.push(text);
    }
  }

  return candidates;
}

/**
 * Returns 2-6 practical steps from Section 2 content.
 * @param {string} contentEn - Section 2 content in English
 * @param {string} contentMr - Section 2 content in Marathi (optional)
 * @returns {Array<{ stepNumber: number, textEn: string, textMr: string }>}
 */
function extractPracticalStepsFromSection2(contentEn, contentMr) {
  const candidatesEn = extractCandidates(contentEn);
  const candidatesMr = contentMr ? extractCandidates(contentMr) : [];

  // Dedupe by normalized text (avoid repeating same step)
  const seen = new Set();
  const uniqueEn = candidatesEn.filter((t) => {
    const key = t.toLowerCase().slice(0, 50);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  const count = Math.min(
    MAX_STEPS,
    Math.max(MIN_STEPS, Math.min(uniqueEn.length, 5))
  );

  if (count === 0) return [];

  const steps = [];
  for (let i = 0; i < count && i < uniqueEn.length; i++) {
    steps.push({
      stepNumber: i + 1,
      textEn: uniqueEn[i] || "",
      textMr: candidatesMr[i] || uniqueEn[i] || ""
    });
  }

  return steps;
}

module.exports = { extractPracticalStepsFromSection2 };
