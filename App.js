import { View, ActivityIndicator, StyleSheet } from "react-native";
import data from "./src/utils/data";
import Tabs from "./src/components/Tabs";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  // console.log(data);
  // const titles = data.quizes.react.titles;
  // Object.keys(titles).forEach((title) => {
  //   console.log(title);
  // });

  const { container } = styles;

  return (
    <NavigationContainer style={container}>
      <Tabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
