import React, { useContext } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  StyleSheet,
} from "react-native";
import { lightTheme, darkTheme } from "../styles/globalStyles";
import MyContext from "../contexts/MyContext";

const GenreItem = ({ item, index, handleGenreSelect, genre }) => {
  const { theme } = useContext(MyContext);
  return (
    <ScrollView horizontal={true} style={styles.genreItems}>
      <TouchableOpacity
        onPress={() => handleGenreSelect(item)}
        style={[
          styles.genreContainer,
          theme ? lightTheme.background : darkTheme.background,
        ]}
      >
        <View
          style={
            genre === item
              ? theme
                ? styles.genreItemActive
                : darkTheme.genreItemActive
              : theme
              ? styles.genreItem
              : darkTheme.genreItem
          }
        >
          <Text
            style={
              genre === item
                ? styles.genreTextActive
                : theme
                ? styles.genreText
                : darkTheme.genreText
            }
          >
            {item}
          </Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  genreItem: {
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 5,
  },
  genreItemActive: {
    backgroundColor: "gray",
    padding: 10,
    borderRadius: 5,
  },
  genreText: {
    fontWeight: "bold",
  },
  genreTextActive: {
    color: "white",
    fontWeight: "bold",
  },
  genreContainer: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: "red",
  },
  genreItems: {
    marginRight: 10,
    // borderWidth: 1,
    // borderColor: "red",
  },
});
export default GenreItem;
