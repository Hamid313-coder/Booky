import React, { useEffect, useState } from "react";

import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import BookItem from "../components/BookItem";
import { getBooks } from "../store/Actoins";

function BookList(props) {
  const { books } = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  const fetchBooks = () => dispatch(getBooks());
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
            renderItem={({ item }) => <BookItem item={item} />}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BookList;
