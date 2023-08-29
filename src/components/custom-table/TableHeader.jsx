
import React from 'react';

const TableHeader = ({ headers }) => (
  <thead>
    <tr>
      {headers.map((header, index) => <th key={index}>{header ? header.toUpperCase() : ''}</th>)}
      <th>Actions</th>
    </tr>
  </thead>
);

export default TableHeader;
