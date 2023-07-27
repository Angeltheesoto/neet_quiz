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
  },
  text: {
    color: "#1e1e1e",
  },
});

const darkTheme = StyleSheet.create({
  container: {
    color: "white",
    backgroundColor: "#1e1e1e",
  },
  text: {
    color: "white",
  },
});

export { globalStyles, lightTheme, darkTheme };
