import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Data2 } from "../api/data";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function CButton({
  subTitle,
  item,
  id,
  onHeadSelect,
  selectID,
}) {
  if (id === "1" && selectID) {
    return (
      <TouchableOpacity
        style={selectID ? styles.buttonStyle1 : styles.buttonStyle2}
        onPress={() => {
          onHeadSelect(id);
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <MaterialIcons size={20} color="green" style={{ padding: 5 }}>
            sort
          </MaterialIcons>
          <Text
            style={[
              selectID ? styles.textStyle1 : styles.textStyle2,
              { fontFamily: "PoppinsSemiBold" },
            ]}
          >
            {subTitle}
          </Text>
        </View>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        style={selectID ? styles.buttonStyle1 : styles.buttonStyle2}
        onPress={() => {
          onHeadSelect(id);
        }}
      >
        <Text
          style={[
            selectID ? styles.textStyle1 : styles.textStyle2,
            { fontFamily: "PoppinsSemiBold" },
          ]}
        >
          {subTitle}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle1: {
    backgroundColor: `rgba(222,254,113,255)`,
    width: 100,
    borderRadius: 15,
    margin: 10,
    paddingTop: 2,
    justifyContent: "center",
  },

  buttonStyle2: {
    backgroundColor: "#1a1c1b",
    width: 70,
    borderRadius: 10,
    margin: 15,
    justifyContent: "center",
  },
  textStyle1: {
    alignSelf: "center",
    fontSize: 15,
    color: "black",

    textAlign: "center",
  },

  textStyle2: {
    alignSelf: "center",
    fontSize: 15,
    color: "white",
    textAlign: "center",
    opacity: 0.7,
  },
});
