import React from "react";

const ROWS = [
  { shortcut: "Ctrl + A", primary: "Select All (text or files)", other: "—" },
  { shortcut: "Ctrl + B", primary: "Bold selected text", other: "—" },
  { shortcut: "Ctrl + C", primary: "Copy selected item/text", other: "—" },
  { shortcut: "Ctrl + D", primary: "Font preferences (Word)", other: "Bookmark (Browser) / Fill Down (Excel)" },
  { shortcut: "Ctrl + E", primary: "Center Align text", other: "—" },
  { shortcut: "Ctrl + F", primary: "Find (search for text)", other: "—" },
  { shortcut: "Ctrl + G", primary: "Go To (specific page/line)", other: "—" },
  { shortcut: "Ctrl + H", primary: "Replace text", other: "History (Browser)" },
  { shortcut: "Ctrl + I", primary: "Italicize text", other: "—" },
  { shortcut: "Ctrl + J", primary: "Justify text (align both sides)", other: "Downloads page (Browser)" },
  { shortcut: "Ctrl + K", primary: "Insert Hyperlink (add web link)", other: "—" },
  { shortcut: "Ctrl + L", primary: "Left Align text", other: "—" },
  { shortcut: "Ctrl + M", primary: "Indent paragraph from left", other: "—" },
  { shortcut: "Ctrl + N", primary: "New Document/Window", other: "—" },
  { shortcut: "Ctrl + O", primary: "Open an existing file", other: "—" },
  { shortcut: "Ctrl + P", primary: "Print document/page", other: "—" },
  { shortcut: "Ctrl + Q", primary: "Remove paragraph formatting", other: "Close (Excel/PowerPoint)" },
  { shortcut: "Ctrl + R", primary: "Right Align text", other: "Refresh page (Browser) / Fill Right (Excel)" },
  { shortcut: "Ctrl + S", primary: "Save file", other: "—" },
  { shortcut: "Ctrl + T", primary: "Hanging Indent", other: "New Tab (Browser)" },
  { shortcut: "Ctrl + U", primary: "Underline text", other: "—" },
  { shortcut: "Ctrl + V", primary: "Paste (copied/cut item)", other: "—" },
  { shortcut: "Ctrl + W", primary: "Close current window/tab", other: "—" },
  { shortcut: "Ctrl + X", primary: "Cut (remove and move item)", other: "—" },
  { shortcut: "Ctrl + Y", primary: "Redo (reverse an Undo)", other: "—" },
  { shortcut: "Ctrl + Z", primary: "Undo (reverse last action)", other: "—" },
];

const CtrlShortcutsTable = () => (
  <div className="my-6 overflow-hidden rounded-lg border border-gray-600 shadow-lg">
    <table className="w-full border-collapse bg-gray-800 text-left text-sm text-white">
      <caption className="border-b border-gray-600 bg-gray-700 px-4 py-3 text-base font-semibold text-white">
        Ctrl A to Z Shortcut Keys
      </caption>
      <thead>
        <tr className="border-b border-gray-600">
          <th className="px-4 py-3 font-semibold text-gray-200">Shortcut</th>
          <th className="px-4 py-3 font-semibold text-gray-200">Primary Function (Word / General)</th>
          <th className="px-4 py-3 font-semibold text-gray-200">Other Uses (Excel / Browser)</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((row, i) => (
          <tr key={row.shortcut} className="border-b border-gray-700 last:border-0 hover:bg-gray-700/50">
            <td className="px-4 py-2.5 font-medium">{row.shortcut}</td>
            <td className="px-4 py-2.5 text-gray-200">{row.primary}</td>
            <td className="px-4 py-2.5 text-gray-300">{row.other}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default CtrlShortcutsTable;
