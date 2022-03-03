// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// ---------------------      TABNAVIGATOR.JS     ---------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //

// REACT
import React from "react";
// REACT-NATIVE
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// NAVIGATION
import { HomeStackNavigator } from "./StackNavigator";
// VIEWS
import AddPost from "../views/AddPost";
import Profile from "../views/Profile";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="New Post" component={AddPost} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
