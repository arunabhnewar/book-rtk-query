import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetBooksQuery } from "../../features/api/apiSlice";
import BookLoader from "../UI/BookLoader";
import Error from "../UI/Error";
import Book from "./Book";

const Books = () => {
  // Hooks
  const { data: books, isError, isLoading } = useGetBooksQuery();

  // UseSelector
  const { status, search } = useSelector(state => state.filter);

  // dispatch
  const dispatch = useDispatch();

  // decide what to render
  let content = null;

  if (isLoading) {
    content = (
      <>
        <BookLoader />
        <BookLoader />
        <BookLoader />
      </>
    );
  }

  if (!isLoading && isError) {
    content = <Error message='There was an error' />;
  }

  if (!isLoading && !isError && books?.length === 0) {
    content = <Error message='No books found!' />;
  }

  if (!isLoading && !isError && books?.length > 0) {
    content = books
      .filter(book => {
        if (book?.name.toLowerCase().includes(search)) {
          return true;
        }
      })
      .filter(book => {
        if (status === "Featured") {
          return book?.featured;
        }
        return true;
      })
      .map(book => <Book key={book.id} book={book} />);
  }

  return (
    <div className='space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6'>
      {content}
    </div>
  );
};

export default Books;
