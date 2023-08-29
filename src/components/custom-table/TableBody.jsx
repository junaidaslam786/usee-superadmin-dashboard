import React from 'react';
import { Edit2, Delete, Eye } from "react-feather";
const TableBody = ({ rows, columnsToDisplay }) => (
  <tbody>
    {rows.map((row, rowIndex) => (
      <tr key={rowIndex}>
        {columnsToDisplay.map((column, colIndex) => <td key={colIndex}>{row[column]}</td>)}
        <td>
          <Edit2 />
          <Delete />
          <Eye />
        </td>
      </tr>
    ))}
  </tbody>
);

export default TableBody;