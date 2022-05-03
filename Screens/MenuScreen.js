import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

import useFonts from "../hooks/useFonts";
import AppLoading from "expo-app-loading";
import EStyleSheet from "react-native-extended-stylesheet";
import { Data1, Data2 } from "../api/data";
import CButton from "../components/CButton";
import FlatListItem from "../components/FlatListItem";

EStyleSheet.build();

export default function MenuScreen() {
  const [isReady, setIsReady] = React.useState(false);

  const [imageData, setImageData] = React.useState(Data2);

  const onHeadSelect = (id) => {
    setSelectID(id);
  };

  const onSelect = (id) => {
    for (let data of imageData) {
      if (data.id == id) {
        data.selected = data.selected == null ? true : !data.selected;
        break;
      }
    }
    setImageData(imageData);
  };

  const [selectID, setSelectID] = React.useState(null);

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
      <View style={styles.topContainer}>
        <Text style={[styles.topText, { fontFamily: "PoppinsSemiBold" }]}>
          Top Sales
        </Text>
        <MaterialIcon
          style={{ position: "absolute", right: 10, top: "25%" }}
          color="white"
          size={30}
          name="shopping-cart"
        />
      </View>

      <View style={styles.secondContainer}>
        <FlatList
          style={{ margin: 10 }}
          data={Data1}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CButton
              item={item}
              subTitle={item.name}
              selectID={item.id === selectID}
              id={item.id}
              onHeadSelect={onHeadSelect}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <FlatList
        data={imageData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FlatListItem
            source={item.imageUrl}
            id={item.id}
            item={item}
            onSelect={onSelect}
          />
        )}
        numColumns={2}
      />
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
    backgroundColor: `rgba(25, 26, 25, 0.7)`,
  },
  topText: {
    color: "white",
    fontSize: 25,
  },
  topContainer: {
    flexDirection: "row",
    width: "100%",
    padding: 10,
    marginTop: 20,
    justifyContent: "center",
    // borderWidth: 2,
    // borderColor: "red",
  },
  secondContainer: {},
  thirdContainer: {
    flex: 1,
  },
});
