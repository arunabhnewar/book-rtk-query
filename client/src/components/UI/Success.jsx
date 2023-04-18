import React from "react";

const Success = ({ message }) => {
  return (
    <div className='max-w-7xl col-span-12 w-full flex h-10 items-center justify-center mx-auto p-2 text-teal-700 bg-teal-100'>
      {message}
    </div>
  );
};

export default Success;
