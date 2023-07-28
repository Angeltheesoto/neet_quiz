import React, { useEffect, useState, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { darkTheme, lightTheme } from "../styles/globalStyles";
import MyContext from "../contexts/MyContext";

const ListItem = ({ title, genre }) => {
  const [isSaved, setIsSaved] = useState(null);
  const [savedQuiz, setSavedQuiz] = useState(null);
  const { theme } = useContext(MyContext);

  // !Saves quiz to localStorage
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
      // console.log("Title added to genre:", genre, "Title: ", title);
    } catch (err) {
      console.log("could not save item", err);
    }
  };

  // !Removes quiz from localStorage
  const removeItem = async (genre, titleToRemove) => {
    try {
      const existingData = await AsyncStorage.getItem("bookmarkedItems");
      const data = existingData ? JSON.parse(existingData) : {};

      if (data[genre]) {
        data[genre] = data[genre].filter((title) => title !== titleToRemove);
        await AsyncStorage.setItem("bookmarkedItems", JSON.stringify(data));
        // console.log(
        //   "Title removed from genre:",
        //   genre,
        //   "Title: ",
        //   titleToRemove
        // );
      } else {
        console.log("Genre not found:", genre);
      }
    } catch (err) {
      console.log("Could not remove item:", err);
    }
  };

  // !Saves localStorage data into savedQuiz state
  const saveLocalStorageItem = async (itemName) => {
    try {
      const itemValue = await AsyncStorage.getItem(itemName);
      if (itemValue !== null) {
        setSavedQuiz((prev) => (prev = JSON.parse(itemValue)));
        // console.log(`setSavedQuiz "${itemName}":`, JSON.parse(itemValue));
      } else {
        console.log(`"${itemName}" does not exist in AsyncStorage.`);
      }
    } catch (error) {
      console.log(`Error viewing "${itemName}":`, error);
    }
  };

  // !Handles actions for adding and removing quizzes from localstorage
  const handleSave = async () => {
    if (isSaved) {
      removeItem(genre, title);
      // console.log("removed", title, genre);
    } else {
      saveItem(genre, title);
      // console.log("added", title, genre);
    }
    saveLocalStorageItem("bookmarkedItems");
  };

  const handleQuizIsSaved = () => {
    if (savedQuiz && savedQuiz[genre] && savedQuiz[genre].includes(title)) {
      setIsSaved((prevIsSaved) => (prevIsSaved = true));
    } else {
      setIsSaved((prevIsSaved) => (prevIsSaved = false));
    }
  };

  // !Deletes localStorage
  const clearLocalStorageItem = async (itemName) => {
    try {
      await AsyncStorage.removeItem(itemName);
      console.log(`Removed item ${itemName}`);
    } catch (err) {
      console.log(err);
    }
  };
  // clearLocalStorageItem("bookmarkedItems");

  useEffect(() => {
    saveLocalStorageItem("bookmarkedItems");
    handleQuizIsSaved();
  }, [savedQuiz]);
  // *console.log("savedQuiz:", savedQuiz);

  // !!!WORK ON RENDERING INSTANTLY!!!

  return (
    <View
      style={[styles.container, theme ? null : { backgroundColor: "gray" }]}
    >
      <Text style={[styles.title, theme ? null : darkTheme.text]}>{title}</Text>
      <TouchableOpacity onPress={handleSave}>
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
