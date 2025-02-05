import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import HomeStack from "./HomeStack";
import ServicesStack from "./ServicesStack";
import CreateStack from "./CreateStack";
import MessagesStack from "./MessagesStack";
import ProfileStack from "./ProfileStack";

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName="HomeStack"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size, focused }) => {
        const routeToIconMap: Record<
          string,
          [keyof typeof MaterialCommunityIcons.glyphMap, keyof typeof MaterialCommunityIcons.glyphMap]
        > = {
          HomeStack: ["home-outline", "home"],
          ServicesStack: ["truck-outline", "truck"],
          CreateStack: ["plus-circle", "plus-circle"],
          MessagesStack: ["message-text-outline", "message-text"],
          ProfileStack: ["account-outline", "account"],
        };

        const [inactiveIcon, activeIcon] = routeToIconMap[route.name];
        const iconName = focused ? activeIcon : inactiveIcon;

        return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
      },
    })}
  >
    <Tab.Screen name="HomeStack" component={HomeStack} />
    <Tab.Screen name="ServicesStack" component={ServicesStack} />
    <Tab.Screen name="CreateStack" component={CreateStack} />
    <Tab.Screen name="MessagesStack" component={MessagesStack} />
    <Tab.Screen name="ProfileStack" component={ProfileStack} />
  </Tab.Navigator>
);

export default TabNavigator;
