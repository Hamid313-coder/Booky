import { createSlice } from "@reduxjs/toolkit";
import Axios from "axios";
import { BASE_URL } from "../config";

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

export const { getBooks, addBookmark, removeBookmark } = booksSlice.actions;

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
