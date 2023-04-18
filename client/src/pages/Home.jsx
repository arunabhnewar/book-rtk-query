import React from "react";
import Books from "../components/Books/Books";
import BookFilter from "../components/Filter/BookFilter";

const Home = () => {
  return (
    <div className='py-12 px-6 2xl:px-6 container'>
      <div className='order-2 xl:-order-1'>
        <BookFilter />

        <Books />
      </div>
    </div>
  );
};

export default Home;
