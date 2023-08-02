import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import SettingItem from "../components/SettingItem";
import { Ionicons } from "@expo/vector-icons";
import { lightTheme, darkTheme } from "../styles/globalStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MyContext from "../contexts/MyContext";

const Settings = ({ fetchLsData, setFetchLsData, initializeLocalStorage }) => {
  const [isLight, setIsLight] = useState(true);
  const { theme, toggleTheme } = useContext(MyContext);
  const [bookmarkedItems, setBookmarkedItems] = useState(null);

  useEffect(() => {
    const fetchBookmarkedItems = async () => {
      try {
        const localBookmark = await AsyncStorage.getItem("bookmarkedItems");
        setBookmarkedItems(localBookmark);
      } catch (error) {
        console.log("Error fetching bookmarked items:", error);
      }
    };

    fetchBookmarkedItems();
  }, []);

  const onPressRadioButton = () => {
    setIsLight((prev) => !prev);
    toggleTheme(!isLight);
  };

  const themeContent = () => {
    return (
      <View style={styles.radioContainer}>
        <TouchableOpacity onPress={onPressRadioButton} disabled={isLight}>
          <View style={styles.radioButton}>
            <Ionicons
              name={isLight ? "radio-button-on" : "radio-button-off"}
              size={24}
              color="gray"
            />
            <Text style={isLight ? lightTheme.text : darkTheme.text}>
              Light
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressRadioButton} disabled={!isLight}>
          <View style={styles.radioButton}>
            <Ionicons
              name={isLight ? "radio-button-off" : "radio-button-on"}
              size={24}
              color="gray"
            />
            <Text style={isLight ? lightTheme.text : darkTheme.text}>Dark</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  // !add savedQuiz and setSavedQuiz to context and change it here so it updates in saved tab.
  const clearData = () => {
    return (
      <>
        <View>
          <Text style={isLight ? lightTheme.text : darkTheme.text}>
            Clicking this button will remove all saved quizzes.
          </Text>
        </View>
        <TouchableOpacity
          style={styles.clearButton}
          onPress={() => {
            // console.log("clicked");
            clearLocalStorageItem("bookmarkedItems");
          }}
        >
          <Text style={styles.clearText}>Delete all saved quizzes</Text>
        </TouchableOpacity>
        <Text style={isLight ? lightTheme.text : darkTheme.text}>
          {bookmarkedItems}
        </Text>
      </>
    );
  };
  // !Deletes localStorage
  const clearLocalStorageItem = async (itemName) => {
    try {
      const localBookmark = await AsyncStorage.getItem("bookmarkedItems");
      if (localBookmark !== null) {
        await AsyncStorage.removeItem(itemName)
          .then(() => initializeLocalStorage())
          .then(() => {
            setFetchLsData(!fetchLsData);
          });
      } else {
        console.log('There is no "bookmarkedItems".');
      }
      console.log(`Removed item ${itemName} data.`);
    } catch (err) {
      console.log(`Could not delete ${itemName}:${err}`);
    }
  };
  // clearLocalStorageItem("bookmarkedItems");

  const aboutContent = () => {
    return (
      <View>
        <Text style={isLight ? lightTheme.text : darkTheme.text}>
          NEETQuiz is a quiz app meticulously crafted by developers to empower
          software engineers and developers in honing their skills and
          knowledge. Geared towards improving your technical interview skills,
          this app serves as an indispensable tool for aspirants seeking success
          in the ever-evolving world of software development.
        </Text>
      </View>
    );
  };

  useEffect(() => {
    const setLocalTheme = async (value) => {
      try {
        await AsyncStorage.setItem("theme", value.toString());
        // const theme = await AsyncStorage.getItem("theme");
        // console.log("Local theme set successfully!", theme);
      } catch (err) {
        console.log("Error setting local theme: ", err);
      }
    };
    if (theme === false) {
      setLocalTheme(false);
      setIsLight(false);
    } else {
      setLocalTheme(isLight);
    }
  }, [isLight]);
  // *console.log("context message: ", theme, isLight);

  return (
    <View style={isLight ? lightTheme.container : darkTheme.container}>
      <View style={styles.settingItemContainer}>
        <SettingItem title={"Theme"} children={themeContent()} />
        <SettingItem title={"About"} children={aboutContent()} />
        <SettingItem
          title={"Delete Bookmarks"}
          children={clearData()}
          isLast={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  settingItemContainer: {
    borderRadius: 30,
    overflow: "hidden",
    marginHorizontal: 10,
  },
  radioContainer: {
    flexDirection: "row",
  },
  radioButton: {
    flexDirection: "row",
    marginRight: 20,
  },
  clearButton: {
    padding: 10,
    backgroundColor: "tomato",
    borderRadius: 10,
    marginTop: 20,
    width: 230,
    alignSelf: "center",
  },
  clearText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
});
export default Settings;
