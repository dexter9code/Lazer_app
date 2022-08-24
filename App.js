import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LoginScreen from "./app/screens/LoginScreen";
import Home from "./app/screens/Home";
import RegisterUser from "./app/screens/RegisterUser";
import TestScreen from "./app/screens/TestScreen";
import ItemScreen from "./app/screens/ItemScreen";
import AccountScreen from "./app/screens/AccountScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Products"
      component={ItemScreen}
      options={{
        headerShown: false,
        tabBarActiveBackgroundColor: "#F0F4F5",
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      component={AccountScreen}
      options={{
        headerShown: false,
        tabBarActiveBackgroundColor: "#F0F4F5",
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="account" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Orders"
      component={AccountScreen}
      options={{
        headerShown: false,
        tabBarActiveBackgroundColor: "#F0F4F5",
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="cart" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
    // <RegisterUser />
  );
}
