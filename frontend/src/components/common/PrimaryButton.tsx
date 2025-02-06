import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { COLORS, SIZES, WEIGHTS } from "../../constants/theme";

type TProps = {
  text: string;
  handlePress: () => void;
};

const PrimaryButton = ({ text, handlePress }: TProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
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
    backgroundColor: COLORS.black,
    borderRadius: 8,
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
  },
  text: {
    color: COLORS.white,
    fontWeight: WEIGHTS.medium,
    fontSize: SIZES.medium,
  },
});

export default PrimaryButton;
