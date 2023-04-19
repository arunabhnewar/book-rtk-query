import {
  faStar as emptyStar,
  faStar as fullStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { useDeleteBookMutation } from "../../features/api/apiSlice";
import Error from "../UI/Error";
import Success from "../UI/Success";

const Book = ({ book }) => {
  // Hooks
  const [deleteBook, { isLoading, isError, isSuccess }] =
    useDeleteBookMutation();

  // Destructure the book
  const { name, author, thumbnail, price, rating, featured, id } = book || {};

  // Delete handler
  const handleDelete = () => {
    if (id) deleteBook(id);
  };

  return (
    <>
      <div className='book-card'>
        <img
          className='h-[240px] w-[170px] object-cover'
          src={thumbnail}
          alt='book'
        />
        <div className='flex-1 h-full pr-2 pt-2 flex flex-col'>
          <div className='flex items-center justify-between'>
            <div>
              {featured && (
                <span className='lws-badge badge-success'>featured</span>
              )}
            </div>
            <div className='text-gray-500 space-x-2'>
              <Link to={`/books/edit/${id}`}>
                <button className='lws-edit '>
                  <svg
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='w-6 h-6'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
                    />
                  </svg>
                </button>
              </Link>
              <button onClick={handleDelete} className='lws-deleteBook'>
                <svg
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='w-6 h-6'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className='space-y-2 mt-4 h-full'>
            <h4 className='lws-book-name'>{name}</h4>
            <p className='lws-author'>{author}</p>
            <div className='lws-stars'>
              <Rating
                readonly
                className='text-danger'
                initialRating={rating || 0}
                emptySymbol={
                  <FontAwesomeIcon
                    icon={emptyStar}
                    style={{ color: "lightgray" }}
                  />
                }
                fullSymbol={
                  <FontAwesomeIcon
                    icon={fullStar}
                    style={{ color: "#F6CD19" }}
                  />
                }
              />
            </div>
            <p className='lws-price'>BDT {price}</p>
          </div>
        </div>
      </div>

      {isError && !isSuccess && (
        <Error message='There was a delete book error!' />
      )}

      {!isError && isSuccess && <Success message='Book deleted successfully' />}
    </>
  );
};

export default Book;
