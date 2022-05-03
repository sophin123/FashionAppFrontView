import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";

import EStyleSheet from "react-native-extended-stylesheet";

import Ionicon from "react-native-vector-icons/Ionicons";

import useFonts from "../hooks/useFonts";
import AppLoading from "expo-app-loading";
import ImageSlider from "../components/ImageSlider";
import GridView from "../components/GridView";
import { StatusBar } from "expo-status-bar";

EStyleSheet.build();

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
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <FlatList
        ListHeaderComponent={() => (
          <View>
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
                style={[
                  {
                    fontFamily: "PoppinsSemiBold",
                  },
                  eStyles.text,
                ]}
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
            <View
              style={{
                alignItems: "center",
                position: "absolute",
                left: "25%",
                top: "45%",
              }}
            >
              <TouchableOpacity style={styles.button}>
                <Text
                  style={{
                    alignSelf: "center",
                    fontSize: 20,
                    opacity: 0.6,
                    fontFamily: "PoppinsExtraBold",
                  }}
                >
                  Shop now
                </Text>
              </TouchableOpacity>
            </View>

            <Text
              style={{
                color: "white",
                fontSize: 30,
                fontFamily: "PoppinsExtraBold",
                textAlign: "left",
                marginTop: 60,
              }}
            >
              Top Sales
            </Text>
            <GridView />
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const eStyles = EStyleSheet.create({
  text: {
    color: "#d4d4d4",
    fontSize: "1.5rem",
  },
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    backgroundColor: `rgba(25, 26, 25, 0.7)`,
  },
  topIcon: {
    marginTop: 40,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: `rgba(222,254,113,255)`,
    padding: 20,
    width: 200,
    borderRadius: 40,
  },
});
