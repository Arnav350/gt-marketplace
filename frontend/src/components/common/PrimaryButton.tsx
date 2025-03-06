import React from "react";
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";

import { COLORS, SIZES, WEIGHTS } from "../../constants/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type TProps = {
  text: string;
  handlePress: () => void;
  icon?: keyof typeof MaterialCommunityIcons.glyphMap;
};

const PrimaryButton = ({ text, handlePress, icon }: TProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.text}>{text}</Text>
      {icon && <MaterialCommunityIcons name={icon} size={32} color={COLORS.white} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 56,
    width: "100%",
    backgroundColor: COLORS.black,
    borderRadius: 8,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  text: {
    color: COLORS.white,
    fontFamily: WEIGHTS.medium,
    fontSize: SIZES.medium,
  },
});

export default PrimaryButton;
