import React, { useContext, useState } from "react";
import Quizes from "../screens/Quizes";
import Saved from "../screens/Saved";
import Settings from "../screens/Settings";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import MyContext from "../contexts/MyContext";

const Tab = createBottomTabNavigator();

const Tabs = ({ initializeLocalStorage }) => {
  const { theme } = useContext(MyContext);
  const [fetchLsData, setFetchLsData] = useState(false);
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: theme
          ? { backgroundColor: "white" }
          : { backgroundColor: "#1e1e1e" },
        // {backgroundColor: "white"},
        headerTitleStyle: theme ? { color: "black" } : { color: "white" },
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
          theme ? { backgroundColor: "white" } : { backgroundColor: "#1e1e1e" },
        ],
      }}
    >
      <Tab.Screen
        name={"Quizzes"}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="book"
              size={25}
              color={focused ? (theme ? "black" : "white") : "gray"}
            />
          ),
        }}
      >
        {() => (
          <Quizes fetchLsData={fetchLsData} setFetchLsData={setFetchLsData} />
        )}
      </Tab.Screen>
      <Tab.Screen
        name={"Saved"}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="bookmark"
              size={25}
              color={focused ? (theme ? "black" : "white") : "gray"}
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
              color={focused ? (theme ? "black" : "white") : "gray"}
            />
          ),
        }}
      >
        {() => (
          <Settings
            initializeLocalStorage={initializeLocalStorage}
            fetchLsData={fetchLsData}
            setFetchLsData={setFetchLsData}
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;
