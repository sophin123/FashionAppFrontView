import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import HomeScreen from "../Screens/HomeScreen";
import MenuScreen from "../Screens/MenuScreen";
import CartScreen from "../Screens/CartScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchScreen from "../Screens/SearchScreen";

// import Ionicons from "@ant-design/icons";

import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              if (focused) {
                return (
                  <Image
                    source={{
                      uri: "https://cdn-icons-png.flaticon.com/512/1946/1946436.png",
                    }}
                    style={{ width: 20, height: 20 }}
                  />
                );
              } else {
                return (
                  <Image
                    source={{
                      uri: "https://cdn-icons-png.flaticon.com/512/1946/1946488.png",
                    }}
                    style={{ width: 20, height: 20 }}
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
                  <Image
                    source={{
                      uri: "https://cdn-icons-png.flaticon.com/512/168/168214.png",
                    }}
                    style={{ width: 20, height: 20 }}
                  />
                );
              } else {
                return (
                  <Image
                    source={{
                      uri: "https://cdn-icons-png.flaticon.com/512/747/747327.png",
                    }}
                    style={{ width: 20, height: 20 }}
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
                  <Image
                    source={{
                      uri: "https://cdn-icons-png.flaticon.com/512/1170/1170627.png",
                    }}
                    style={{ width: 25, height: 25 }}
                  />
                );
              } else {
                return (
                  <Image
                    source={{
                      uri: "https://cdn-icons-png.flaticon.com/512/3144/3144456.png",
                    }}
                    style={{ width: 25, height: 25 }}
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
                  <Image
                    source={{
                      uri: "https://cdn-icons.flaticon.com/png/512/3249/premium/3249592.png?token=exp=1646790400~hmac=bcd07deda43606ff7d5ac60161357208",
                    }}
                    style={{ width: 25, height: 25 }}
                  />
                );
              } else {
                return (
                  <Image
                    source={{
                      uri: "https://cdn-icons-png.flaticon.com/512/482/482631.png",
                    }}
                    style={{ width: 25, height: 25 }}
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
