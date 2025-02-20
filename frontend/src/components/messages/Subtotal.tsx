import React from "react";
import { StyleSheet, View } from "react-native";

import AppText from "../common/AppText";
import { COLORS, WEIGHTS } from "../../constants/theme";

type TProps = {
  text: string;
  price: number;
};

const Subtotal = ({ text, price }: TProps) => {
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>{text}</AppText>
      <AppText style={styles.price}>${price}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  text: {
    color: COLORS.textGray,
  },
  price: {
    fontFamily: WEIGHTS.semiBold,
  },
});

export default Subtotal;
