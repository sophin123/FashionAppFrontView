import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import useFonts from "../hooks/useFonts";

export default function CartScreen() {
  const animation = useRef(null);
  useEffect(() => {
    // animation.current?.play();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 30,
            fontFamily: "PoppinsSemiBold",
          }}
        >
          Working On It
        </Text>
      </View>
      <View style={styles.animationContainer}>
        <LottieView
          autoPlay
          ref={animation}
          style={{
            width: "100%",
            height: "90%",
          }}
          // Find more Lottie files at https://lottiefiles.com/featured
          source={require("../assets/lottiePackage/shoppingCart.json")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});
