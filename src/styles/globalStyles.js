import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
});

const lightTheme = StyleSheet.create({
  container: {
    color: "gray",
    backgroundColor: "white",
    minHeight: "100%",
    paddingHorizontal: 10,
  },
  text: {
    color: "#1e1e1e",
  },
  background: {
    backgroundColor: "white",
  },
});

const darkTheme = StyleSheet.create({
  container: {
    color: "white",
    backgroundColor: "#1e1e1e",
    minHeight: "100%",
    paddingHorizontal: 10,
  },
  text: {
    color: "white",
  },
  background: {
    backgroundColor: "#1e1e1e",
  },
  genreItem: {
    backgroundColor: "gray",
    padding: 10,
    borderRadius: 5,
  },
  genreItemActive: {
    backgroundColor: "#343434",
    padding: 10,
    borderRadius: 5,
  },
  genreText: {
    color: "white",
    fontWeight: "bold",
  },
  genreTextActive: {
    color: "black",
  },
  buttonContainer: {
    color: "white",
    backgroundColor: "gray",
  },
});

export { globalStyles, lightTheme, darkTheme };
