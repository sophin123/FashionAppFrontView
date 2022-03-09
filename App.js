import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import DrawerNavigator from "./Navigation/DrawerNavigator";

export default function App() {
  return <DrawerNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#83968b",
    alignItems: "center",
    justifyContent: "center",
  },
});
