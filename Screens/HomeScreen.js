import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button title="Go to Details" />
    </View>
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
