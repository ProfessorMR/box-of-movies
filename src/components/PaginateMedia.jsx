"use client";

import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";

import "@/src/styles/paginate-box.css";

export default function PaginateMedia({ count, currentPage, onPageChange }) {
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    if (count) {
      setPageCount(Math.ceil(count / 20));
    }
  }, [count]);

  const handlePageClick = (e) => {
    const newPage = e.selected;
    document.documentElement.scrollTop = 0;
    onPageChange(newPage);
  };

  return (
    <div className="paginate-box mt-8">
      <ReactPaginate
        containerClassName="pagination flex justify-center items-center space-x-4 mt-4"
        pageClassName="page-item"
        activeClassName="active-paginate"
        breakLabel="..."
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={Math.max(
          1,
          Math.ceil(pageCount) > 500 ? 500 : Math.ceil(pageCount)
        )}
        forcePage={currentPage}
        previousLabel={"<"}
        nextLabel={">"}
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
