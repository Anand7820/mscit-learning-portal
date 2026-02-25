import React from "react";

const ROWS = [
  {
    rule: "Greater Than",
    use: "Highlights cells with values higher than a specified number (e.g., passing students).",
  },
  {
    rule: "Less Than",
    use: "Highlights cells with values lower than a specified number (e.g., below 35).",
  },
  {
    rule: "Between",
    use: "Highlights values within a specific range (e.g., scores 40–60).",
  },
  {
    rule: "Equal To",
    use: "Highlights cells that match a specific value exactly.",
  },
  {
    rule: "Text that Contains",
    use: "Find specific names or strings (e.g., \"Sharma\" in a voter list).",
  },
  {
    rule: "Duplicate Values",
    use: "Data cleaning; identify duplicate Aadhar numbers or Email IDs.",
  },
];

const HighlightCellRulesTable = () => (
  <div className="my-6 overflow-hidden rounded-lg border border-gray-600 shadow-lg">
    <table className="w-full border-collapse bg-gray-800 text-left text-sm text-white">
      <caption className="border-b border-gray-600 bg-gray-700 px-4 py-3 text-base font-semibold text-white">
        2. Highlight Cell Rules
      </caption>
      <thead>
        <tr className="border-b border-gray-600">
          <th className="px-4 py-3 font-semibold text-gray-200">Rule</th>
          <th className="px-4 py-3 font-semibold text-gray-200">Use</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((row) => (
          <tr
            key={row.rule}
            className="border-b border-gray-700 last:border-0 hover:bg-gray-700/50"
          >
            <td className="px-4 py-2.5 font-medium text-gray-100">{row.rule}</td>
            <td className="px-4 py-2.5 text-gray-100">{row.use}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default HighlightCellRulesTable;
