import { StyleSheet } from "react-native";
import Tabs from "./src/components/Tabs";
import { NavigationContainer } from "@react-navigation/native";
import data from "./src/utils/data";
import { getSavedQuizes } from "./src/utils/savedQuizes";
import { AsyncStorage } from "react-native";

export default function App() {
  let savedQuizes = getSavedQuizes();
  const savedQuizLength = Object.keys(savedQuizes).length;
  if (savedQuizLength === 0) {
    const keys = Object.keys(data.quizes);
    for (let i = 0; i < keys.length; i++) {
      savedQuizes[keys[i]] = [];
    }
  }
  console.log(`Saved Quizes: `, savedQuizes);

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
});
