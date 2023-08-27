
import React from 'react';
import styles from './CustomTable.module.css';

const PaginationControls = ({ currentPage, totalPages, onNext, onPrevious }) => (
  <div>
    Page: {currentPage} / {totalPages}
    <button disabled={currentPage === 1} onClick={onPrevious}>Previous</button>
    <button disabled={currentPage === totalPages} onClick={onNext}>Next</button>
  </div>
);

export default PaginationControls;
