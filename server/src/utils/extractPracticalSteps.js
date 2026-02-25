/**
 * Extract 2-12 practical steps from Section 2 content (English and Marathi)
 * so students can practice what they learned. Steps must be "how to do" actions,
 * not topic headings. Can show 10+ steps when content has enough actionable lines.
 */

const MAX_STEPS = 12;
const MIN_STEPS = 2;
const MAX_STEP_LENGTH = 200;

// Action verbs that indicate a concrete "how" step (student can do this)
const ACTION_VERB_PATTERN = /\b(click|open|press|go to|right-click|create|select|type|use|double-click|save|connect|turn on|shut down|minimize|maximize|pin|add|remove|change|adjust|enter|find|replace|cut|copy|paste|move|hover|drag|scroll|switch|enable|disable|check|uncheck|choose|browse|search|launch|start|exit|close|insert|format|align|view|access|hold)\b/i;

// Topic-style phrases to reject (what to learn, not how to do)
const TOPIC_PATTERNS = [
  /^how to\s+/i,
  /^overview\s*$/i,
  /^understanding\s+/i,
  /^introduction\s*$/i,
  /^dashboard\s+/i,
  /^interface\s+/i,
  /^navigation\s+/i,
  /^key\s+(menu|options|features|terms)\b/i,
  /^basic\s+(terminology|concepts?)\b/i,
  /^summary\s+(of|table)/i,
  /^working with\s+/i,
  /^steps?\s*:\s*$/i,
  /^(what|where|why)\s+/i,
  /^[a-z]+\s*(layout|overview|components?|area)\s*$/i,
];

function isTopicHeading(text) {
  if (!text || text.length < 3) return true;
  const t = text.trim();
  if (t.length < 20 && !ACTION_VERB_PATTERN.test(t)) return true;
  for (const p of TOPIC_PATTERNS) {
    if (p.test(t)) return true;
  }
  return false;
}

function hasActionVerb(text) {
  return text && ACTION_VERB_PATTERN.test(text);
}

// Remove timestamps like [00:02:24] or [00:03]
function cleanStepText(text) {
  if (!text || typeof text !== "string") return "";
  return text
    .replace(/\s*\[\d{1,2}:\d{2}(?::\d{2})?\]\s*/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// Split "A -> B -> C" into separate steps so we get granular "how" steps
function expandArrowSteps(text) {
  if (!text || !text.includes("->")) return [text];
  const parts = text.split(/\s*->\s*/).map((p) => cleanStepText(p)).filter((p) => p.length > 8);
  // Only expand if we get at least 2 meaningful parts (avoid breaking "Save As -> location")
  if (parts.length >= 2) {
    return parts.map((p) => (p.length < 15 && !/^(click|press|select|open|go|type|use)\b/i.test(p) ? `Select ${p}` : p));
  }
  return [text];
}

// Extract candidate lines that look like actionable "how" steps (not topic titles)
function extractCandidates(content) {
  if (!content || typeof content !== "string") return [];
  const lines = content.split("\n");
  const candidates = [];

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i].trim();
    if (!raw) continue;

    if (raw.length > MAX_STEP_LENGTH) continue;

    // a. b. c. style (e.g. "a. Connect the UPS...", "b. Press the Power Button...")
    if (/^[a-z]\.\s+.+/.test(raw)) {
      const text = cleanStepText(raw.replace(/^[a-z]\.\s+/, ""));
      if (text.length > 10 && hasActionVerb(text) && !isTopicHeading(text)) {
        const expanded = expandArrowSteps(text);
        candidates.push(...expanded);
      }
      continue;
    }

    // Numbered line - only if it's an action, not a section title
    const numMatch = raw.match(/^\d+\.\s+(.+)$/);
    if (numMatch) {
      const text = cleanStepText(numMatch[1]);
      if (text.length > 12 && text.length <= MAX_STEP_LENGTH && hasActionVerb(text) && !isTopicHeading(text)) {
        const expanded = expandArrowSteps(text);
        candidates.push(...expanded);
      }
      continue;
    }

    // Bullet "- " - must have action verb and not be a topic
    if (/^[-•]\s+/.test(raw)) {
      const text = cleanStepText(raw.replace(/^[-•]\s+/, ""));
      if (text.length > 12 && text.length <= MAX_STEP_LENGTH && hasActionVerb(text) && !isTopicHeading(text)) {
        const expanded = expandArrowSteps(text);
        candidates.push(...expanded);
      }
      continue;
    }

    // "Label: Action" lines (e.g. "Search Box: Type Excel in the Windows search bar", "Run Command: Press Windows + R")
    const colonMatch = raw.match(/^[A-Za-z][^:\n]{1,50}:\s+(.+)$/);
    if (colonMatch) {
      const text = cleanStepText(colonMatch[1]);
      if (text.length > 15 && text.length <= MAX_STEP_LENGTH && hasActionVerb(text) && !isTopicHeading(text)) {
        const expanded = expandArrowSteps(text);
        candidates.push(...expanded);
      }
    }
  }

  return candidates;
}

/**
 * Returns 2-12 practical steps from Section 2 content.
 * @param {string} contentEn - Section 2 content in English
 * @param {string} contentMr - Section 2 content in Marathi (optional)
 * @returns {Array<{ stepNumber: number, textEn: string, textMr: string }>}
 */
function extractPracticalStepsFromSection2(contentEn, contentMr) {
  const candidatesEn = extractCandidates(contentEn);
  const candidatesMr = contentMr ? extractCandidates(contentMr) : [];

  // Dedupe and keep only clear "how" steps (min length, no topic-like lines)
  const seen = new Set();
  const uniqueEn = candidatesEn.filter((t) => {
    const s = (t || "").trim();
    if (s.length < 12) return false;
    if (isTopicHeading(s)) return false;
    const key = s.toLowerCase().slice(0, 55);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  const count = Math.min(
    MAX_STEPS,
    Math.max(MIN_STEPS, uniqueEn.length)
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
