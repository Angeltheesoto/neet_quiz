import { StyleSheet } from "react-native";
import Tabs from "./src/components/Tabs";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const initializeLocalStorage = async () => {
    try {
      const localBookmark = await AsyncStorage.getItem("bookmarkedItems");
      if (!localBookmark) {
        AsyncStorage.setItem("bookmarkedItems", JSON.stringify({}));
        // console.log("LocalStorage initialized.");
      } else {
        // console.log("LocalStorage already initialized.");
        null;
      }
    } catch (error) {
      console.log("Error initializing LocalStorage:", error);
    }
  };
  initializeLocalStorage();

  return (
    <NavigationContainer style={styles.container}>
      <Tabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
