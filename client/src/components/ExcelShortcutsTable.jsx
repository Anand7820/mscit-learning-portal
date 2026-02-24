import React from "react";

const KeyPill = ({ children }) => (
  <span className="inline-flex items-center rounded bg-gray-600 px-1.5 py-0.5 font-medium text-gray-100 shadow-sm">
    {children}
  </span>
);

const ROWS = [
  {
    action: "Move to Right Cell",
    parts: [{ key: "Tab" }, { text: " or " }, { key: "Right Arrow" }],
  },
  {
    action: "Move to Cell Below",
    parts: [{ key: "Enter" }],
  },
  {
    action: "AutoFit Column Width",
    parts: [
      { key: "Alt" },
      { text: " + " },
      { key: "H" },
      { text: " + " },
      { key: "O" },
      { text: " + " },
      { key: "I" },
    ],
  },
  {
    action: "AutoFill Numbers",
    parts: [{ text: "Select 1 and 2 → Drag Fill Handle" }],
  },
  {
    action: "Quick Fill Selection",
    parts: [{ text: "Highlight Range → Type → " }, { key: "Enter" }],
  },
];

const ExcelShortcutsTable = () => (
  <div className="my-6 overflow-hidden rounded-lg border border-gray-600 shadow-lg">
    <table className="w-full border-collapse bg-gray-800 text-left text-sm text-white">
      <caption className="border-b border-gray-600 bg-gray-700 px-4 py-3 text-base font-semibold text-white">
        5. Summary of Shortcuts
      </caption>
      <thead>
        <tr className="border-b border-gray-600">
          <th className="px-4 py-3 font-semibold text-gray-200">Action</th>
          <th className="px-4 py-3 font-semibold text-gray-200">Shortcut / Method</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((row) => (
          <tr
            key={row.action}
            className="border-b border-gray-700 last:border-0 hover:bg-gray-700/50"
          >
            <td className="px-4 py-2.5 text-gray-100">{row.action}</td>
            <td className="px-4 py-2.5 text-gray-100">
              {row.parts.map((part, i) =>
                part.key ? (
                  <KeyPill key={i}>{part.key}</KeyPill>
                ) : (
                  <span key={i}>{part.text}</span>
                )
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ExcelShortcutsTable;
