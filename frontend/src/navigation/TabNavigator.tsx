import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeStack from "./HomeStack";
import CreateStack from "./CreateStack";
import MessagesStack from "./MessagesStack";
import ProfileStack from "./ProfileStack";
import NavigationBar from "../components/navigation/NavigationBar";

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator initialRouteName="HomeStack" tabBar={(props) => <NavigationBar {...props} />}>
    <Tab.Screen name="HomeStack" component={HomeStack} />
    {/* <Tab.Screen name="CreateStack" component={CreateStack} /> */}
    {/* <Tab.Screen name="MessagesStack" component={MessagesStack} /> */}
    {/* <Tab.Screen name="ProfileStack" component={ProfileStack} /> */}
  </Tab.Navigator>
);

export default TabNavigator;
