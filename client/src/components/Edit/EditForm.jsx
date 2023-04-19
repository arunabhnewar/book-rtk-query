import React, { useState } from "react";
import { useEditBookMutation } from "../../features/api/apiSlice";
import Error from "../UI/Error";
import Success from "../UI/Success";

const EditForm = ({ book }) => {
  // Hooks
  const [editBook, { isError, isLoading, isSuccess }] = useEditBookMutation();

  // Destructuring from book
  const {
    id,
    name: initialName,
    author: initialAuthor,
    thumbnail: initialThumbnail,
    price: initialPrice,
    rating: initialRating,
    featured: initialFeatured,
  } = book || {};

  // Use State
  const [name, setName] = useState(initialName);
  const [author, setAuthor] = useState(initialAuthor);
  const [thumbnail, setThumbnail] = useState(initialThumbnail);
  const [price, setPrice] = useState(initialPrice);
  const [rating, setRating] = useState(initialRating);
  const [featured, setFeatured] = useState(initialFeatured);

  // Submit handlers
  const handleSubmit = e => {
    e.preventDefault();
    editBook({
      id,
      data: {
        name,
        author,
        thumbnail,
        price,
        rating,
        featured,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className='book-form'>
      <div className='space-y-2'>
        <label for='lws-bookName'>Book Name</label>
        <input
          required
          className='text-input'
          type='text'
          id='lws-bookName'
          name='name'
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>

      <div className='space-y-2'>
        <label for='lws-author'>Author</label>
        <input
          required
          className='text-input'
          type='text'
          id='lws-author'
          name='author'
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />
      </div>

      <div className='space-y-2'>
        <label for='lws-thumbnail'>Image Url</label>
        <input
          required
          className='text-input'
          type='text'
          id='lws-thumbnail'
          name='thumbnail'
          value={thumbnail}
          onChange={e => setThumbnail(e.target.value)}
        />
      </div>

      <div className='grid grid-cols-2 gap-8 pb-4'>
        <div className='space-y-2'>
          <label for='lws-price'>Price</label>
          <input
            required
            className='text-input'
            type='number'
            id='lws-price'
            name='price'
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
        </div>

        <div className='space-y-2'>
          <label for='lws-rating'>Rating</label>
          <input
            required
            className='text-input'
            type='number'
            id='lws-rating'
            name='rating'
            min='1'
            max='5'
            value={rating}
            onChange={e => setRating(e.target.value)}
          />
        </div>
      </div>

      <div className='flex items-center'>
        <input
          id='lws-featured'
          type='checkbox'
          name='featured'
          className='w-4 h-4'
          checked={featured}
          onChange={e => setFeatured(e.target.checked)}
        />
        <label for='lws-featured' className='ml-2 text-sm'>
          {" "}
          This is a featured book{" "}
        </label>
      </div>

      <button
        disabled={isLoading}
        type='submit'
        className='submit'
        id='lws-submit'>
        Edit Book
      </button>

      {isError && <Error message='There was an error adding book!' />}
      {isSuccess && <Success message='Book was added successfully' />}
    </form>
  );
};

export default EditForm;
