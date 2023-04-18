import React from "react";
import { useParams } from "react-router-dom";
import { useGetBookQuery } from "../../features/api/apiSlice";
import Error from "../UI/Error";
import EditForm from "./EditForm";

const EditBook = () => {
  // Use params
  const { bookId } = useParams();

  // Hooks
  const { data: book, isError, isLoading } = useGetBookQuery(bookId);

  // decide what to render
  let content = null;

  if (isLoading) {
    content = <div>Loading...</div>;
  }
  if (!isLoading && isError) {
    content = <Error message='There was an error!' />;
  }
  if (!isLoading && !isError && book?.id) {
    content = <EditForm book={book} />;
  }

  return (
    <div className='container'>
      <div className='p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto'>
        <h4 className='mb-8 text-xl font-bold text-center'>Edit Book</h4>
        {content}
      </div>
    </div>
  );
};

export default EditBook;
