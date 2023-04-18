import React from "react";
import EditForm from "./EditForm";

const EditBook = () => {
  return (
    <div className='container'>
      <div className='p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto'>
        <h4 className='mb-8 text-xl font-bold text-center'>Edit Book</h4>
        <EditForm />
      </div>
    </div>
  );
};

export default EditBook;
