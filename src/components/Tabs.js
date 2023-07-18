import React from "react";
import Quizes from "../screens/Quizes";
import Saved from "../screens/Saved";
import Settings from "../screens/Settings";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const {} = styles;

  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "white",
        },
        headerTitleStyle: {
          color: "black",
        },
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      }}
    >
      <Tab.Screen
        name={"Quizes"}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="book"
              size={25}
              color={focused ? "black" : "gray"}
            />
          ),
        }}
      >
        {() => <Quizes />}
      </Tab.Screen>
      <Tab.Screen
        name={"Saved"}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="bookmark"
              size={25}
              color={focused ? "black" : "gray"}
            />
          ),
        }}
      >
        {() => <Saved />}
      </Tab.Screen>
      <Tab.Screen
        name={"Settings"}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="settings"
              size={25}
              color={focused ? "black" : "gray"}
            />
          ),
        }}
      >
        {() => <Settings />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});
export default Tabs;
