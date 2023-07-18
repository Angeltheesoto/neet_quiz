import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ListItem = (props) => {
  const { title } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ListItem;
