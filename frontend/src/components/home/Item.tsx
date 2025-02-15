import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

import AppText from "../common/AppText";
import { COLORS, SIZES, WEIGHTS } from "../../constants/theme";

type TProps = {
  title: string;
  price: number;
};

const Item = ({ title, price }: TProps) => {
  function handlePress() {}

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image source={{ uri: "https://picsum.photos/201" }} style={styles.image} />
      <AppText style={styles.title}>{title}</AppText>
      <AppText style={styles.price}>${price}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 8,
    width: 176,
    backgroundColor: COLORS.largeGray,
    borderRadius: 8,
  },
  image: {
    marginBottom: 8,
    height: 160,
    width: 160,
  },
  title: {
    marginBottom: 4,
    maxWidth: 160,
    fontFamily: WEIGHTS.medium,
  },
  price: {
    color: COLORS.primary,
    fontFamily: WEIGHTS.bold,
    fontSize: SIZES.medium,
  },
});

export default Item;
