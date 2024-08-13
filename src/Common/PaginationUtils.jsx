import { Link } from "react-router-dom";
import React from "react";
import "rc-pagination/assets/index.css";
import "../assets/css/Pagination.css";
import Pagination from "rc-pagination";

export const CustomPagination = ({ total, current, pageSize, onChange }) => {
  return (
    <Pagination
      className="pagination-data pagination"
      showTotal={(total, range) =>
        `Showing ${range[0]}-${range[1]} of ${total}`
      }
      onChange={onChange}
      total={total}
      current={current}
      pageSize={pageSize}
      showSizeChanger={false}
      itemRender={PrevNextArrow}
    />
  );
};

export const PaginationChange = (page, setCurrent) => {
  setCurrent(page);
};

export const getData = (current, pageSize, filteredBus) => {
  return filteredBus.slice((current - 1) * pageSize, current * pageSize);
};
// Utitlity for Table Next and Prev
export const PrevNextArrow = (current, type, originalElement) => {
  if (type === "prev") {
    return <Link className="page-link" title="Previous"></Link>;
  }
  if (type === "next") {
    return <Link className="page-link" title="Next"></Link>;
  }
  return originalElement;
};
