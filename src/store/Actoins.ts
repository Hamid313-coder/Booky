import { BASE_URL } from "./../config/index";
import Axios from "axios";

export const GET_BOOKS = "GET_BOOKS";
export const ADD_TO_BOOKMARK_LIST = "ADD_TO_BOOKMARK_LIST";
export const REMOVE_FROM_BOOKMARK_LIST = "REMOVE_FROM_BOOKMARK_LIST";

export const getBooks = () => {
  try {
    return async (dispatch: Function) => {
      const response = await Axios.get(`${BASE_URL}`);
      if (response.status == 200) {
        dispatch({ type: GET_BOOKS, books: response.data });
      } else {
        console.log("Unable to get the data from the server.");
      }
    };
  } catch (error) {
    console.log(error);
  }
};

export const addBookmark = (book: String) => ({
  type: ADD_TO_BOOKMARK_LIST,
  book,
});

export const removeBookmark = (book: String) => ({
  type: REMOVE_FROM_BOOKMARK_LIST,
  book,
});
