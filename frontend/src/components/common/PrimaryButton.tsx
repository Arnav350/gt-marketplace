import React from "react";
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";

import { COLORS, SIZES, WEIGHTS } from "../../constants/theme";

type TProps = {
  text: string;
  handlePress: () => void;
  style?: ViewStyle;
};

const PrimaryButton = ({ text, handlePress, style }: TProps) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={handlePress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
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
