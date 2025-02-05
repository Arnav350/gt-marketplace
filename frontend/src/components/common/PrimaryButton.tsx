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
    backgroundColor: COLORS.black,
    borderRadius: 8,
  },
  text: {
    color: COLORS.white,
    fontWeight: WEIGHTS.medium,
    fontSize: SIZES.medium,
  },
});

export default PrimaryButton;
