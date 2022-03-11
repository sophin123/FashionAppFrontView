import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import Ionicon from "react-native-vector-icons/Ionicons";

import useFonts from "../hooks/useFonts";
import AppLoading from "expo-app-loading";
import ImageSlider from "../components/ImageSlider";

export default function HomeScreen() {
  const [isReady, setIsReady] = React.useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => setIsReady(true)}
        onError={() => {
          console.log(console.warn);
        }}
      />
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.topIcon}>
        <Ionicon name="menu-outline" size={40} color="white" />
        <Ionicon name="person-circle-outline" size={40} color="white" />
      </View>
      <View
        style={{
          paddingHorizontal: 30,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#d4d4d4",
            fontSize: 25,
            fontFamily: "PoppinsThin",
          }}
        >
          New collection
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 30,

            fontFamily: "PoppinsExtraBold",
          }}
        >
          with
          <Text style={{ color: "#a8f069" }}> 15% </Text>
          <Text>discount</Text>
        </Text>
      </View>
      <ImageSlider />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    backgroundColor: `rgba(25, 26, 25, 0.7)`,
  },
  topIcon: {
    marginTop: 60,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
