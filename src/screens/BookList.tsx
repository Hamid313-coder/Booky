import React, { useEffect, useState } from "react";

import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import BookItem from "../components/BookItem";
import { addBookmark, getBooks, removeBookmark } from "../store/Actoins";

function BookList(props) {
  const { books, bookmarks } = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  const fetchBooks = () => dispatch(getBooks());
  const addToBookmarkList = (book: any) => dispatch(addBookmark(book));
  const removeBookmarkList = (book: any) => dispatch(removeBookmark(book));
  const ifExist = (book: any) => {
    return bookmarks.filter((item) => item.id === book.id).length > 0;
  };
  const handleBookmark = (book: any) => {
    ifExist(book) ? removeBookmarkList(book) : addToBookmarkList(book);
  };

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetchBooks();
    setIsLoading(false);
  }, []);

  if (isLoading) {
    console.log("hello");
    return <ActivityIndicator color="red" />;
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#1E1B26" }}>
      <View style={{ flex: 1, paddingHorizontal: 16 }}>
        <Text style={{ color: "white", fontSize: 22 }}>Bestsellers</Text>
        <View style={{ flex: 1, marginTop: 8 }}>
          <FlatList
            data={books}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <BookItem
                item={item}
                handleBookmark={handleBookmark}
                ifExist={ifExist}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default BookList;
