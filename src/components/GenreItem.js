import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  StyleSheet,
} from "react-native";

const GenreItem = ({ item, index, handleGenreSelect, genre }) => {
  return (
    <ScrollView horizontal={true}>
      <TouchableOpacity
        onPress={() => handleGenreSelect(item)}
        style={[styles.genreContainer, index === 0 && { marginLeft: 10 }]}
      >
        <View
          style={genre === item ? styles.genreItemActive : styles.genreItem}
        >
          <Text
            style={genre === item ? styles.genreTextActive : styles.genreText}
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
    marginRight: 10,
  },
  genreItemActive: {
    backgroundColor: "gray",
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
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
});
export default GenreItem;
