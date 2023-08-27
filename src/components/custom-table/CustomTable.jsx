
import React, { useState } from 'react';
import styles from './CustomTable.module.css';
import PropTypes from 'prop-types';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import PaginationControls from './PaginationControls';

const CustomTable = ({ data, rowsPerPageOptions = [5, 10, 15, 20], defaultRowsPerPage = 10 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);

  // const { data } = props;
  console.log(data)
  
  const lastRowIndex = currentPage * rowsPerPage;
  const firstRowIndex = lastRowIndex - rowsPerPage;
  const currentUsers = data ? data.slice(firstRowIndex, lastRowIndex) : [];

  // const totalPages = Math.ceil(data.length / rowsPerPage);
  const totalPages = data ? Math.ceil(data.length / rowsPerPage) : 0;


  return (
    <div className={styles.tableContainer}>
      <div className={styles.controls}>
        <div>
          Show 
          <select 
            value={rowsPerPage} 
            onChange={(e) => { setRowsPerPage(Number(e.target.value)); setCurrentPage(1); }}
          >
            {rowsPerPageOptions.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select> 
          entries
        </div>
        <PaginationControls 
          currentPage={currentPage} 
          totalPages={totalPages}
          onNext={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          onPrevious={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
        />
      </div>
      <table className={styles.table}>
        <TableHeader headers={Object.keys(data[0])} />
        <TableBody rows={currentUsers} />
      </table>
    </div>
  );
};

CustomTable.propTypes = {  data: PropTypes.arrayOf(PropTypes.object).isRequired,

  rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
  defaultRowsPerPage: PropTypes.number
};

export default CustomTable;
