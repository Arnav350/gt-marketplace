import React from "react";
import { StyleSheet, Text, TextProps } from "react-native";

import { COLORS, SIZES } from "../../constants/theme";

const AppText = (props: TextProps) => {
  return <Text {...props} style={[styles.text, props.style]} />;
};

const styles = StyleSheet.create({
  text: {
    color: COLORS.black,
    fontFamily: "Poppins-Regular",
    fontSize: SIZES.small,
  },
});

export default AppText;
