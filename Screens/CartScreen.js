import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function CartScreen() {
  return (
    <View style={styles.container}>
      <Text>CartScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: `rgba(59, 87, 69, 0.7)`,
  },
});
