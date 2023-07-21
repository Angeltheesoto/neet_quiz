import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { getSavedQuizes } from "../utils/savedQuizes";

const ListItem = ({ title, genre }) => {
  // const { title } = props;
  const [isSaved, setIsSaved] = useState(false);
  // let savedQuizes = getSavedQuizes();
  const handleSave = () => {
    if (isSaved) {
      setIsSaved(false);
      // console.log(`UnSaved: ${title}, Genre: ${genre}`);
      // const currList = savedQuizes[genre];
      // const updatedList = currList.filter((item) => item != title);
      // savedQuizes.push(updatedList);
    } else {
      setIsSaved(true);
      // console.log(`Saved: ${title}, Genre: ${genre}`);
      // savedQuizes[genre].push(title);
      // console.log(savedQuizes);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={handleSave}>
        {isSaved ? (
          <Ionicons name="md-bookmark" size={26} color="black" />
        ) : (
          <Ionicons name="md-bookmark-outline" size={26} color="black" />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
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
