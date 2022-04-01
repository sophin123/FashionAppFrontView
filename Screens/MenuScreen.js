import React from "react";
import { View, Text, StyleSheet } from "react-native";

import EStyleSheet from "react-native-extended-stylesheet";

EStyleSheet.build();

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <Text style={eStyles.text}>MenuScreen</Text>
    </View>
  );
}

const eStyles = EStyleSheet.create({
  text: {
    color: "red", // global variable $textColor
    fontSize: "1.5rem", // relative REM unit
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: `rgba(59, 87, 69, 0.7)`,
  },
});
