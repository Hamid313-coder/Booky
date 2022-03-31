import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function BookItem(props) {
  const { item, ifExist, handleBookmark } = props;

  return (
    <View style={{ marginVertical: 12 }}>
      <View style={{ flexDirection: "row", flex: 1 }}>
        {/* Book Cover */}
        <Image
          source={{ uri: item.image_url }}
          resizeMode="cover"
          style={{ width: 100, height: 150, borderRadius: 10 }}
        />
        {/* Book Metadata */}
        <View style={{ flex: 1, marginLeft: 12 }}>
          {/* Book Title */}
          <View>
            <Text style={{ fontSize: 22, paddingRight: 16, color: "white" }}>
              {item.title}
            </Text>
          </View>
          {/* Meta info */}
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons
              color="#64676D"
              name="book-open-page-variant"
              size={20}
            />
            <Text style={{ fontSize: 14, paddingLeft: 10, color: "#64676D" }}>
              {item.num_pages}
            </Text>
            <MaterialCommunityIcons
              color="#64676D"
              name="star"
              size={20}
              style={{ paddingLeft: 16 }}
            />
            <Text style={{ fontSize: 14, paddingLeft: 10, color: "#64676D" }}>
              {item.rating}
            </Text>
          </View>
          {/* Buttons */}
          <View style={{ marginTop: 14 }}>
            <TouchableOpacity
              onPress={() => {
                handleBookmark(item);
              }}
              activeOpacity={0.7}
              style={{
                flexDirection: "row",
                padding: 2,
                backgroundColor: ifExist(item) ? "#F96D41" : "#2D3038",
                borderRadius: 20,
                alignItems: "center",
                justifyContent: "center",
                height: 40,
                width: 40,
              }}
            >
              <MaterialCommunityIcons
                color={ifExist(item) ? "white" : "#64676D"}
                size={24}
                name={ifExist(item) ? "bookmark-outline" : "bookmark"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default BookItem;
