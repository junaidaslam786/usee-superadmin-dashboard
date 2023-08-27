
import React from 'react';
import styles from './CustomTable.module.css';

const TableHeader = ({ headers }) => (
  <thead>
    <tr>
      {headers.map((header, index) => (
        <th key={index} className={styles.header}>{header.toUpperCase()}</th>
      ))}
    </tr>
  </thead>
);

export default TableHeader;
