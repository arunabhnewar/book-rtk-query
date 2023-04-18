import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:9000",
    }),
    tagTypes: ["Books", "Book"],
    endpoints: (builder) => ({
        // Get books from the server
        getBooks: builder.query({
            query: () => '/books',
            keepUnusedDataFor: 600,
            providesTags: ["Books"]
        }),
        // Get single book data from the server
        getBook: builder.query({
            query: (bookId) => `/books/${bookId}`,
            providesTags: (result, error, arg) => [{ type: "Book", id: arg }],
        }),

        // Add New Book to the server
        addBook: builder.mutation({
            query: (data) => ({
                url: '/books',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ["Books"],
        }),
        // Edit Book to the server
        editBook: builder.mutation({
            query: ({ id, data }) => ({
                url: `/books/${id}`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: ["Books"],
        }),
        // Delete Book from the server
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/books/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Books"],
        }),
    }),
});

export const { useGetBooksQuery, useGetBookQuery, useAddBookMutation, useEditBookMutation, useDeleteBookMutation } = apiSlice;