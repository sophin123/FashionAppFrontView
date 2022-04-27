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

const Data = [
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=795&q=80",
    icon: "favorite",
    iconNotActive: "favorite_border",
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1485125639709-a60c3a500bf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    icon: "favorite",
    iconNotActive: "favorite_border",
  },

  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    icon: "favorite",
    iconNotActive: "favorite_border",
  },

  {
    id: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1593821684772-6865bb9413a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    icon: "favorite",
    iconNotActive: "favorite_border",
  },
];

export default function GridView() {
  const [imageData, setImageData] = React.useState(Data);

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

    console.log("Item", item);
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
