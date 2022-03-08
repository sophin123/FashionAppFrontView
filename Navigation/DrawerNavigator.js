import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import HomeScreen from "../Screens/HomeScreen";
import MenuScreen from "../Screens/MenuScreen";
import CartScreen from "../Screens/CartScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchScreen from "../Screens/SearchScreen";

import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{}}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => {
              return (
                <Image
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/1946/1946488.png",
                  }}
                  style={{ width: 20, height: 20 }}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={MenuScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              let iconName = focused;

              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
              return <Ionicons name={iconName} size={20} color="green" />;
            },
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarIcon: () => {
              return (
                <Image
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/3144/3144456.png",
                  }}
                  style={{ width: 20, height: 20 }}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: () => {
              return (
                <Image
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/482/482631.png",
                  }}
                  style={{ width: 20, height: 20 }}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
