import React from "react";
import { View, Text } from "react-native";
import globalStyles from "../styles/globalStyles";
import { getSavedQuizes } from "../utils/savedQuizes";

const Saved = () => {
  let savedQuizes = getSavedQuizes();
  // console.log(`SavedQuizes: `, savedQuizes);
  return (
    <View style={globalStyles.container}>
      <Text>Saved</Text>
    </View>
  );
};

export default Saved;
