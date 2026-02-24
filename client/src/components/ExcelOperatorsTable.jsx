import React from "react";

const ROWS = [
  { operation: "Addition", operator: "+", example: "=A1+B1" },
  { operation: "Subtraction", operator: "-", example: "=A1-B1" },
  { operation: "Multiplication", operator: "*", example: "=A1*B1" },
  { operation: "Division", operator: "/", example: "=A1/B1" },
  { operation: "Square Root", operator: "SQRT", example: "=SQRT(A1)" },
  { operation: "Power", operator: "POWER", example: "=POWER(A1, 2)" },
];

const ExcelOperatorsTable = () => (
  <div className="my-6 overflow-hidden rounded-lg border border-gray-600 shadow-lg">
    <table className="w-full border-collapse bg-gray-800 text-left text-sm text-white">
      <caption className="border-b border-gray-600 bg-gray-700 px-4 py-3 text-base font-semibold text-white">
        5. Summary Table of Operators
      </caption>
      <thead>
        <tr className="border-b border-gray-600">
          <th className="px-4 py-3 font-semibold text-gray-200">Operation</th>
          <th className="px-4 py-3 font-semibold text-gray-200">Operator</th>
          <th className="px-4 py-3 font-semibold text-gray-200">Excel Example</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((row) => (
          <tr key={row.operation} className="border-b border-gray-700 last:border-0 hover:bg-gray-700/50">
            <td className="px-4 py-2.5 text-gray-100">{row.operation}</td>
            <td className="px-4 py-2.5 font-medium">{row.operator}</td>
            <td className="px-4 py-2.5 font-mono text-green-300">{row.example}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ExcelOperatorsTable;
