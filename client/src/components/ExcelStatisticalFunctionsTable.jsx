import React from "react";

const ROWS = [
  {
    task: "Maximum",
    fn: "=MAX(range)",
    description: "Finds the highest value in the selected range.",
  },
  {
    task: "Minimum",
    fn: "=MIN(range)",
    description: "Finds the lowest value in the selected range.",
  },
  {
    task: "Count",
    fn: "=COUNT(range)",
    description: "Counts how many numeric entries are in the range.",
  },
  {
    task: "Average",
    fn: "=AVERAGE(range)",
    description: "Calculates the mean of the selected numbers.",
  },
];

const ExcelStatisticalFunctionsTable = () => (
  <div className="my-6 overflow-hidden rounded-lg border border-gray-600 shadow-lg">
    <table className="w-full border-collapse bg-gray-800 text-left text-sm text-white">
      <caption className="border-b border-gray-600 bg-gray-700 px-4 py-3 text-base font-semibold text-white">
        3. Statistical Functions
      </caption>
      <thead>
        <tr className="border-b border-gray-600">
          <th className="px-4 py-3 font-semibold text-gray-200">Task</th>
          <th className="px-4 py-3 font-semibold text-gray-200">Function</th>
          <th className="px-4 py-3 font-semibold text-gray-200">Description</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((row) => (
          <tr
            key={row.task}
            className="border-b border-gray-700 last:border-0 hover:bg-gray-700/50"
          >
            <td className="px-4 py-2.5 text-gray-100">{row.task}</td>
            <td className="px-4 py-2.5 font-mono text-green-300">{row.fn}</td>
            <td className="px-4 py-2.5 text-gray-100">{row.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ExcelStatisticalFunctionsTable;
