import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function CButton({ subTitle }) {
  return (
    <TouchableOpacity style={styles.buttonStyle2}>
      <Text style={[styles.textStyle2, { fontFamily: "PoppinsSemiBold" }]}>
        {subTitle}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  //   buttonStyle1: {
  //     backgroundColor: `rgba(222,254,113,255)`,
  //     width: 100,
  //     borderRadius: 15,
  //     margin: 10,
  //     paddingTop: 2,
  //     justifyContent: "center",
  //   },

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
