import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./app/screens/LoginScreen";
import Home from "./app/screens/Home";
import RegisterUser from "./app/screens/RegisterUser";
import TestScreen from "./app/screens/TestScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default function App() {
  return (
    // <NavigationContainer>
    //   <StackNavigator />
    // </NavigationContainer>
    <RegisterUser />
  );
}
