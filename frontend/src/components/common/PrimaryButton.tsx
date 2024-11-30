import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { COLORS } from "../../constants/theme";

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
    backgroundColor: COLORS.primaryDark,
  },
  text: {
    color: COLORS.white,
  },
});

export default PrimaryButton;
