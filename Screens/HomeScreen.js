import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import Ionicon from "react-native-vector-icons/Ionicons";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topIcon}>
        <Ionicon name="menu-outline" size={30} color="white" />
        <Ionicon name="person-circle-outline" size={30} color="white" />
      </View>
      <Text>HomeScreen</Text>
      <Button title="Go to Details" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    backgroundColor: `rgba(59, 87, 69, 0.7)`,
  },
  topIcon: {
    marginTop: 60,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
