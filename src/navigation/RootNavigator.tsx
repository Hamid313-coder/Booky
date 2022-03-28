import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import BookList from "../screens/BookList";
import BookMarkList from "../screens/BookMarkList";

const Tab = createBottomTabNavigator();

const screenOptions = (route, color) => {
  let iconName;

  switch (route.name) {
    case "BookList":
      iconName = "view-dashboard";
      break;
    case "BookMarkList":
      iconName = "bookmark-multiple-outline";
      break;
    default:
      break;
  }

  return <MaterialCommunityIcons name={iconName} color={color} size={24} />;
};

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="BookList"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
          tabBarActiveTintColor: "#FFF",
          tabBarInactiveTintColor: "#2D3038",
          tabBarShowLabel: false,
          tabBarStyle: [
            {
              display: "flex",
              backgroundColor: "#1E1B26",
            },
            null,
          ],
          headerShown: false,
        })}
      >
        <Tab.Screen name="BookList" component={BookList} />
        <Tab.Screen name="BookMarkList" component={BookMarkList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
