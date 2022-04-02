import React from "react";
import { Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import BookmarkItem from "../components/BookmarkItem";
import { removeBookmark } from "../store/booksSlice";

function BookMarkList(props) {
  const dispatch = useDispatch();
  const { bookmarks } = useSelector((state) => state.books);
  const removeBookmarkList = (book: any) => dispatch(removeBookmark(book));
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#1E1B26" }}>
      <View style={{ flex: 1, paddingHorizontal: 16 }}>
        <Text style={{ color: "white", fontSize: 22 }}>Bookmarks</Text>
        <View style={{ flex: 1, marginTop: 8 }}>
          {bookmarks.length === 0 ? (
            <Text style={{ color: "#64676D", fontSize: 18 }}>
              Add a book to bookmark list.
            </Text>
          ) : (
            <FlatList
              data={bookmarks}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <BookmarkItem
                  item={item}
                  removeBookmarkList={removeBookmarkList}
                />
              )}
              showsVerticalScrollIndicator={false}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

export default BookMarkList;
