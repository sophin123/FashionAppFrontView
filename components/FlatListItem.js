import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function FlatListItem({ source, onSelect, id, item }) {
  const [status, setStatus] = React.useState(true);

  return (
    <View
      style={
        id % 2 === 0 ? [{ marginTop: 20 }, styles.container] : styles.container
      }
    >
      <Image source={{ uri: source }} style={styles.imageContainer} />
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
      <Text style={[{ fontFamily: "PoppinsSemiBold" }, styles.titleText]}>
        Product Name 1
      </Text>
      <Text style={[{ fontFamily: "PoppinsExtraBold" }, styles.priceText]}>
        Price $Tag
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    opacity: 0.5,
    height: 17,
    marginLeft: 10,
    alignSelf: "flex-start",
    color: "white",
  },
  priceText: {
    flexWrap: "wrap",
    alignSelf: "flex-start",
    marginLeft: 10,
    marginBottom: 10,
    color: "white",
    opacity: 0.8,
  },
  imageContainer: {
    width: "90%",
    height: 196,
    marginLeft: 10,
    borderRadius: 16,
    borderWidth: 1,
  },
});
