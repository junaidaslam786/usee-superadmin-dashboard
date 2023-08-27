
import React from 'react';
import styles from './CustomTable.module.css';

const TableBody = ({ rows }) => (
  <tbody>
    {rows.map((row, rowIndex) => (
      <tr key={rowIndex} className={rowIndex % 2 === 0 ? styles.evenRow : ''}>
        {Object.values(row).map((cell, cellIndex) => (
          <td key={cellIndex} className={styles.cell}>{cell}</td>
        ))}
      </tr>
    ))}
  </tbody>
);

export default TableBody;
