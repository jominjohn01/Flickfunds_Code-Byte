import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home/HomeScreen";
// import SettingsScreen from "../screens/Settings/SettingsScreen";
// import ProfileScreen from "../screens/Profile/ProfileScreen";
import Ionicons from "react-native-vector-icons/Ionicons";

// Create a stack navigator
const Stack = createNativeStackNavigator();

// Home stack navigator
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      {/* Additional screens can be added here */}
    </Stack.Navigator>
  );
};

// Create a bottom tab navigator
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "HomeTab") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStack} // Use HomeStack navigator here
        options={{ tabBarLabel: "Home", headerShown: false }}
      />
      <Tab.Screen
        name="Settings"
        component={HomeStack} // Replace with your Settings screen
        options={{ tabBarLabel: "Settings" }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeStack} // Replace with your Profile screen
        options={{ tabBarLabel: "Profile" }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
