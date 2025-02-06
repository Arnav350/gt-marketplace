import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import HomeStack from "./HomeStack";
import ServicesStack from "./ServicesStack";
import CreateStack from "./CreateStack";
import MessagesStack from "./MessagesStack";
import ProfileStack from "./ProfileStack";
import { COLORS, SIZES, WEIGHTS } from "../constants/theme";
import { StyleSheet, Text, View } from "react-native";

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName="HomeStack"
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarItemStyle: {
        paddingTop: 9,
      },
      tabBarIcon: ({ focused }) => {
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

        if (route.name === "CreateStack") {
          return (
            <MaterialCommunityIcons
              style={{ height: 56, width: 56 }}
              name={iconName}
              size={56}
              color={COLORS.primary}
            />
          );
        }

        return (
          <MaterialCommunityIcons style={{ height: 36, width: 36 }} name={iconName} size={36} color={COLORS.black} />
        );
      },
      tabBarLabel: ({ focused }) => {
        const labelMap: Record<string, string> = {
          HomeStack: "Home",
          ServicesStack: "Services",
          CreateStack: "",
          MessagesStack: "Chat",
          ProfileStack: "Profile",
        };

        return (
          <Text
            style={{
              color: COLORS.black,
              fontSize: SIZES.tiny,
              fontWeight: focused ? WEIGHTS.semiBold : WEIGHTS.regular,
            }}
          >
            {labelMap[route.name]}
          </Text>
        );
      },
      tabBarBackground: () => (
        <View style={styles.container}>
          <View style={styles.circle} />
          <View style={styles.cover} />
        </View>
      ),
    })}
  >
    <Tab.Screen name="HomeStack" component={HomeStack} />
    <Tab.Screen name="ServicesStack" component={ServicesStack} />
    <Tab.Screen name="CreateStack" component={CreateStack} />
    <Tab.Screen name="MessagesStack" component={MessagesStack} />
    <Tab.Screen name="ProfileStack" component={ProfileStack} />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    height: 88,
    width: "100%",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  circle: {
    position: "absolute",
    top: -16,
    left: "50%",
    transform: [{ translateX: "-50%" }],
    backgroundColor: COLORS.white,
    height: 88,
    width: 88,
    borderRadius: 44,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  cover: {
    position: "absolute",
    left: "50%",
    transform: [{ translateX: "-50%" }],
    height: "100%",
    width: "100%",
    backgroundColor: COLORS.white,
  },
});

export default TabNavigator;
