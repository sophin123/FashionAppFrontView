import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import EStyleSheet from "react-native-extended-stylesheet";
import { Data2 } from "../api/data";
import FlatListItem from "./FlatListItem";

export default function GridView() {
  const [imageData, setImageData] = React.useState(Data2);

  const onSelect = (id) => {
    for (let data of imageData) {
      if (data.id == id) {
        data.selected = data.selected == null ? true : !data.selected;
        break;
      }
    }
    setImageData(imageData);
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={imageData}
        renderItem={({ item }) => (
          <FlatListItem
            source={item.imageUrl}
            id={item.id}
            onSelect={onSelect}
            item={item}
          />
        )}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const eStyles = EStyleSheet.create({
  imageContainer: {
    width: "90%",
    height: 196,
    margin: 10,
    borderRadius: 16,
    borderWidth: 1,
  },
});
