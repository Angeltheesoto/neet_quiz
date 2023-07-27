import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import SettingItem from "../components/SettingItem";
import { Ionicons } from "@expo/vector-icons";
import { lightTheme, darkTheme } from "../styles/globalStyles";

const Settings = () => {
  const [isLight, setIsLight] = useState(true);

  const onPressRadioButton = () => {
    setIsLight((prev) => !prev);
  };
  // *console.log(isLight ? "light" : "dark", isLight);

  const themeChildren = () => {
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

  return (
    <View style={isLight ? lightTheme.container : darkTheme.container}>
      <View style={styles.settingItemContainer}>
        <SettingItem title={"Theme"} children={themeChildren()} />
        <SettingItem title={"title"} children={themeChildren()} />
        <SettingItem title={"something"} children={themeChildren()} />
        <SettingItem title={"else"} children={themeChildren()} />
        <SettingItem title={"here"} isLast={true} children={themeChildren()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 10,
  },

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
});
export default Settings;
