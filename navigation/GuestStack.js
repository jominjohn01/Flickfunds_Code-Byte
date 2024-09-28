import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login/Login";
import Welcome from "../screens/GetStarted/Welcome";
import SignUp from "../screens/SignUp/SignUp";
const Stack = createNativeStackNavigator();

const GuestStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};

export default GuestStack;