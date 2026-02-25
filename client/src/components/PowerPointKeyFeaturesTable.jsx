import React from "react";

const ROWS = [
  { component: "Run Command", function: "powerpnt" },
  { component: "Quick Access", function: "Save, Undo, Redo (Customizable)" },
  { component: "Save As", function: "Used to change file name or location" },
  { component: "Status Bar", function: "Shows slide count and zoom levels" },
  { component: "Notes Area", function: "For adding speaker-specific information" },
];

const PowerPointKeyFeaturesTable = () => (
  <div className="my-6 overflow-hidden rounded-lg border border-gray-600 shadow-lg">
    <table className="w-full border-collapse bg-gray-800 text-left text-sm text-white">
      <caption className="border-b border-gray-600 bg-gray-700 px-4 py-3 text-base font-semibold text-white">
        4. Summary Table of Key Features
      </caption>
      <thead>
        <tr className="border-b border-gray-600">
          <th className="px-4 py-3 font-semibold text-gray-200">Component</th>
          <th className="px-4 py-3 font-semibold text-gray-200">Function</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((row) => (
          <tr
            key={row.component}
            className="border-b border-gray-700 last:border-0 hover:bg-gray-700/50"
          >
            <td className="px-4 py-2.5 font-medium text-gray-100">{row.component}</td>
            <td className="px-4 py-2.5 text-gray-100">{row.function}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default PowerPointKeyFeaturesTable;
