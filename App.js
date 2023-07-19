import { StyleSheet } from "react-native";
import Tabs from "./src/components/Tabs";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
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
