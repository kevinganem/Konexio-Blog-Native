// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// ----------------------      STACKNAVIGATOR.JS     ------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //

// REACT
import React from "react";
// REACT-NATIVE
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// NAVIGATION
import TabNavigator from "./TabNavigator";
// VIEWS
import Login from "../views/Login";
import Splash from "../views/Splash";
import Timeline from "../views/Timeline";

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Timeline" component={Timeline} />
    </Stack.Navigator>
  );
};

export default StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export { HomeStackNavigator };
