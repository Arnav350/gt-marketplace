import React, { useContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import LoadingScreen from "../screens/loading/LoadingScreen";
import TabNavigator from "./TabNavigator";
import AuthStack from "./AuthStack";
import { AuthContext } from "../hooks/useAuth";

const AppNavigator = () => {
  const { currentUser } = useContext(AuthContext);

  if (currentUser === undefined) {
    return <LoadingScreen />;
  }

  return <NavigationContainer>{currentUser ? <TabNavigator /> : <AuthStack />}</NavigationContainer>;
};

export default AppNavigator;
