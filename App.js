import { StyleSheet } from "react-native";
import Tabs from "./src/components/Tabs";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MyContext from "./src/contexts/MyContext";
import { useEffect, useState } from "react";

export default function App() {
  const [theme, setTheme] = useState(true);

  const toggleTheme = (isLight) => {
    setTheme(isLight);
  };

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

      const localTheme = await AsyncStorage.getItem("theme");
      if (!localTheme) {
        AsyncStorage.setItem("theme", JSON.stringify(theme));
      } else {
        const parsedTheme = JSON.parse(localTheme);
        setTheme(parsedTheme);
      }
    } catch (error) {
      console.log("Error initializing LocalStorage:", error);
    }
  };

  useEffect(() => {
    initializeLocalStorage();
  }, []);

  return (
    <MyContext.Provider value={{ theme, toggleTheme }}>
      <NavigationContainer style={styles.container}>
        <Tabs />
      </NavigationContainer>
    </MyContext.Provider>
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
