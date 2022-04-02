import { createSlice } from "@reduxjs/toolkit";
import Axios from "axios";
import { BASE_URL } from "../config";

// An Instance for knowing how to make slice in redux-toolkit
export const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    bookmarks: [],
  },
  reducers: {
    getBooks: (state, action) => {
      state.books = action.payload;
    },
    addBookmark: (state, action) => {
      state.bookmarks.push(action.payload);
    },
    removeBookmark: (state, action) => {
      state.bookmarks = state.bookmarks.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export default booksSlice.reducer;

export const { getBooks, addBookmark, removeBookmark } = booksSlice.actions;

// An instance for knowing how to do asyncronous task in redux-toolkit
export const fetchBooks = async (dispatch: Function) => {
  try {
    const response = await Axios.get(BASE_URL);
    if (response.status === 200) {
      dispatch(getBooks(response.data));
    } else {
      console.log("Unable to fetch data");
    }
  } catch (error) {
    console.log(error);
  }
};
