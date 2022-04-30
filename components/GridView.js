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

  function ListImage({ id, item, selected, onSelect }) {
    const [status, setStatus] = React.useState(true);
    return (
      <View style={{ width: "50%" }}>
        <Image
          source={{ uri: item.imageUrl }}
          style={eStyles.imageContainer}
          resizeMode="cover"
        />

        <TouchableOpacity
          style={{
            flex: 1,
            position: "absolute",
            top: 15,
            right: 20,
          }}
          onPress={() => {
            onSelect(id);
            setStatus(!status);
          }}
        >
          <MaterialIcons size={25} color="green">
            {item.selected == true ? "favorite" : "favorite_border"}
          </MaterialIcons>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={imageData}
        renderItem={({ item }) => (
          <ListImage item={item} id={item.id} onSelect={onSelect} />
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
