import {
  ADD_TO_BOOKMARK_LIST,
  GET_BOOKS,
  REMOVE_FROM_BOOKMARK_LIST,
} from "./Actoins";

const initialState = {
  books: [],
  bookmarks: [],
};

export function booksReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_BOOKS:
      return { ...state, books: action.books };
    case ADD_TO_BOOKMARK_LIST:
      return { ...state, bookmarks: [...state.bookmarks, action.book] };
    case REMOVE_FROM_BOOKMARK_LIST:
      return {
        ...state,
        bookmarks: state.bookmarks.filter((book) => book.id !== action.book.id),
      };
    default:
      return state;
  }
}
