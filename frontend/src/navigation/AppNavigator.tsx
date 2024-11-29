import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import LoadingScreen from "../screens/loading/LoadingScreen";
import TabNavigator from "./TabNavigator";
import AuthStack from "./AuthStack";

const AppNavigator = () => {
  const [currentUser, setCurrentUser] = useState(); // Replace with actual auth logic

  if (currentUser === undefined) {
    return <LoadingScreen />;
  }

  return <NavigationContainer>{currentUser ? <TabNavigator /> : <AuthStack />}</NavigationContainer>;
};

export default AppNavigator;
