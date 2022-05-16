import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

export default function SearchScreen() {
  const animation = useRef(null);
  useEffect(() => {
    // animation.current?.play();
  }, []);

  return (
    <View style={styles.animationContainer}>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          marginLeft: 40,
          width: "100%",
          height: "90%",
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("../assets/lottiePackage/comingSoon.json")}
      />
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
