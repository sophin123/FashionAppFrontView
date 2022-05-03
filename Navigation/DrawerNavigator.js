import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import HomeScreen from "../Screens/HomeScreen";
import MenuScreen from "../Screens/MenuScreen";
import CartScreen from "../Screens/CartScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchScreen from "../Screens/SearchScreen";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";

// import Ionicons from "@ant-design/icons";

import Ionicons from "react-native-vector-icons/Ionicons";

const firstIconSize = 25;
const secondIconSize = 30;

const Tab = createBottomTabNavigator();

export default function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Menu"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#1c1f1d",
            height: 80,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              if (focused) {
                return (
                  <MaterialIcons
                    name="home"
                    size={38}
                    color={`rgba(222,254,113,255)`}
                  />
                );
              } else {
                return (
                  <MaterialIcons
                    name="home"
                    size={33}
                    color={`rgba(255,255,255,0.5)`}
                  />
                );
              }
            },
          }}
        />
        <Tab.Screen
          name="Menu"
          component={MenuScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              if (focused) {
                return (
                  <MaterialIcons
                    name="grid-view"
                    size={38}
                    color={`rgba(222,254,113,255)`}
                  />
                );
              } else {
                return (
                  <MaterialIcons
                    name="grid-view"
                    size={33}
                    color={`rgba(255,255,255,0.5)`}
                  />
                );
              }
            },
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              if (focused) {
                return (
                  <MaterialIcons
                    name="shopping-cart"
                    size={38}
                    color={`rgba(222,254,113,255)`}
                  />
                );
              } else {
                return (
                  <MaterialIcons
                    name="shopping-cart"
                    size={33}
                    color={`rgba(255,255,255,0.5)`}
                  />
                );
              }
            },
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              if (focused) {
                return (
                  <MaterialIcons
                    name="search"
                    size={38}
                    color={`rgba(222,254,113,255)`}
                  />
                );
              } else {
                return (
                  <MaterialIcons
                    name="search"
                    size={33}
                    color={`rgba(255,255,255,0.5)`}
                  />
                );
              }
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
