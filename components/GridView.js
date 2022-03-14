import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const imageData = [
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=795&q=80",
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1485125639709-a60c3a500bf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },

  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },

  {
    id: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1593821684772-6865bb9413a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
];

export default function GridView() {
  return (
    <View style={styles.container}>
      <FlatList
        data={imageData}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.imageUrl }}
            style={{ width: 190, height: 200, margin: 10, borderRadius: 16 }}
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
