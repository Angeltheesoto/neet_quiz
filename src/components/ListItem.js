import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ListItem = ({ title, genre }) => {
  const [isSaved, setIsSaved] = useState(null);
  const [bookmarkedItems, setBookmarkedItems] = useState([]);
  const [savedQuiz, setSavedQuiz] = useState(null);

  const saveItem = async (genre, title) => {
    try {
      const existingData = await AsyncStorage.getItem("bookmarkedItems");
      const data = existingData ? JSON.parse(existingData) : {};

      if (data[genre]) {
        data[genre].push(title);
      } else {
        data[genre] = [title];
      }

      await AsyncStorage.setItem("bookmarkedItems", JSON.stringify(data));
      console.log("Title added to genre:", genre, "Title: ", title);
    } catch (err) {
      console.log("could not save item", err);
    }
  };

  const removeItem = async (genre, titleToRemove) => {
    try {
      const existingData = await AsyncStorage.getItem("bookmarkedItems");
      const data = existingData ? JSON.parse(existingData) : {};

      if (data[genre]) {
        data[genre] = data[genre].filter((title) => title !== titleToRemove);
        await AsyncStorage.setItem("bookmarkedItems", JSON.stringify(data));
        console.log(
          "Title removed from genre:",
          genre,
          "Title: ",
          titleToRemove
        );
      } else {
        console.log("Genre not found:", genre);
      }
    } catch (err) {
      console.log("Could not remove item:", err);
    }
  };

  const saveLocalStorageItem = async (itemName) => {
    try {
      const itemValue = await AsyncStorage.getItem(itemName);
      if (itemValue !== null) {
        // console.log(`Contents of "${itemName}":`, JSON.parse(itemValue));
        setSavedQuiz((prev) => (prev = JSON.parse(itemValue)));
      } else {
        console.log(`"${itemName}" does not exist in AsyncStorage.`);
      }
    } catch (error) {
      console.log(`Error viewing "${itemName}":`, error);
    }
  };

  const handleSave = async () => {
    if (isSaved) {
      setIsSaved(false);
      removeItem(genre, title);
      // console.log("removed", title, genre);
    } else {
      setIsSaved(true);
      saveItem(genre, title);
      // console.log("added", title, genre);
    }
    saveLocalStorageItem("bookmarkedItems");
  };

  // const clearLocalStorageItem = async (itemName) => {
  //   try {
  //     await AsyncStorage.removeItem(itemName);
  //     console.log(`Removed item ${itemName}`);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // clearLocalStorageItem("bookmarkedItems");

  useEffect(() => {
    saveLocalStorageItem("bookmarkedItems");
  }, []);

  console.log("savedQuiz:", savedQuiz);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={handleSave}>
        {/* {isSaved ? (
          <Ionicons name="md-bookmark" size={26} color="black" />
        ) : (
          <Ionicons name="md-bookmark-outline" size={26} color="black" />
        )} */}

        {savedQuiz && savedQuiz[genre] && savedQuiz[genre].includes(title) ? (
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
