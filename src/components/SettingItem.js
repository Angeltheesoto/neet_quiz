import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

// !Add a toggle arrow up/down to display content for the settings.

const SettingItem = ({ title, children, isLast }) => {
  const [show, setShow] = useState(false);
  const containerStyle = isLast
    ? [styles.container, styles.lastItemContainer]
    : styles.container;
  const handleClick = () => {
    setShow((prev) => !prev);
  };

  return (
    <View style={containerStyle}>
      <TouchableOpacity onPress={handleClick}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <AntDesign
            name={show ? "caretup" : "caretdown"}
            size={24}
            color="black"
          />
        </View>
      </TouchableOpacity>
      {show ? <View style={styles.childrenStyles}>{children}</View> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#eee",
    padding: 20,
    borderBottomWidth: 3,
    borderBottomColor: "lightgray",
  },
  lastItemContainer: {
    borderBottomWidth: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  childrenStyles: {
    paddingTop: 10,
  },
});

export default SettingItem;
