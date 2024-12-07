import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeStack from "./HomeStack";
import MarketplaceStack from "./MarketplaceStack";
import CreateStack from "./CreateStack";
import MessagesStack from "./MessagesStack";
import ProfileStack from "./ProfileStack";

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Marketplace"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        const routeToIconMap: Record<string, keyof typeof Ionicons.glyphMap> = {
          Marketplace: "storefront-outline",
          Profile: "person-outline",
          Messages: "chatbubbles-outline",
          Delivery: "car-outline",
        };

        const iconName = routeToIconMap[route.name];
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: "blue",
      tabBarInactiveTintColor: "gray",
    })}
  >
    <Tab.Screen name="HomeStack" component={HomeStack} />
    <Tab.Screen name="MarketplaceStack" component={MarketplaceStack} />
    <Tab.Screen name="CreateStack" component={CreateStack} />
    <Tab.Screen name="MessagesStack" component={MessagesStack} />
    <Tab.Screen name="ProfileStack" component={ProfileStack} />
  </Tab.Navigator>
);

export default TabNavigator;
