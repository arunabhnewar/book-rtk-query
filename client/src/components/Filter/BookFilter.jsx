import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { statusToggled } from "../../features/filtersBook/filterSlice";

const BookFilter = () => {
  // use selector
  const { status } = useSelector(state => state.filter);

  // Dispatch
  const dispatch = useDispatch();

  // Filter status of sidebar
  const statusHandler = status => dispatch(statusToggled(status));

  return (
    <div className='flex items-center justify-between mb-12'>
      <h4 className='mt-2 text-xl font-bold'>Book List</h4>

      <div className='flex items-center space-x-4'>
        <button
          className={`lws-filter-btn ${
            status === "All" ? "active-filter" : ""
          }`}
          onClick={() => statusHandler("All")}>
          All
        </button>
        <button
          className={`lws-filter-btn ${
            status === "Featured" ? "active-filter" : ""
          }`}
          onClick={() => statusHandler("Featured")}>
          Featured
        </button>
      </div>
    </div>
  );
};

export default BookFilter;
