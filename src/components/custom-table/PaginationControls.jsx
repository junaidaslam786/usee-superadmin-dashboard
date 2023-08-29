import React from "react";
import { Pagination } from "react-bootstrap";

const PaginationControls = ({
  currentPage,
  totalPages,
  onNext,
  onPrevious,
}) => {
  const firstPage = 1;
  const lastPage = totalPages;

  // Generate page numbers
  const getPageNumbers = () => {
    let pages = [currentPage];
    let left = currentPage - 1;
    let right = currentPage + 1;

    while (pages.length < 3 && (left >= firstPage || right <= lastPage)) {
      if (left >= firstPage) pages.unshift(left--);
      if (pages.length < 3 && right <= lastPage) pages.push(right++);
    }

    return pages;
  };

  return (
    <Pagination>
      <Pagination.First
        disabled={currentPage === firstPage}
        onClick={() => onPrevious(firstPage)}
      />
      <Pagination.Prev
        disabled={currentPage === firstPage}
        onClick={() => onPrevious()}
      />
      {getPageNumbers().map((page) => (
        <Pagination.Item key={page} active={page === currentPage}>
          {page}
        </Pagination.Item>
      ))}
      <Pagination.Next
        disabled={currentPage === lastPage}
        onClick={() => onNext()}
      />
      <Pagination.Last
        disabled={currentPage === lastPage}
        onClick={() => onNext(lastPage)}
      />
    </Pagination>
  );
};

export default PaginationControls;
