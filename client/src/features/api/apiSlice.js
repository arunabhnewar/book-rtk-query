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
        // Add New Book to the server
        addBook: builder.mutation({
            query: (data) => ({
                url: '/books',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ["Books"],
        })

    }),
});

export const { useGetBooksQuery, useAddBookMutation } = apiSlice;