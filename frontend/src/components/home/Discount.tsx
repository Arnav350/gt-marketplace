import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

import AppText from "../common/AppText";
import { COLORS, SIZES, WEIGHTS } from "../../constants/theme";

type TProps = {
  text: string;
};

const Discount = ({ text }: TProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.textsContainer}>
        <AppText style={styles.discount}>Discount</AppText>
        <AppText style={styles.message}>{text}</AppText>
        <TouchableOpacity style={styles.shopContainer}>
          <AppText style={styles.shop}>Shop Now</AppText>
        </TouchableOpacity>
      </View>
      <Image source={{ uri: "https://picsum.photos/202" }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    height: 160,
    backgroundColor: COLORS.primary,
    borderRadius: 12,
  },
  textsContainer: {
    marginTop: 32,
    marginLeft: 16,
    maxWidth: 120,
  },
  discount: {
    color: COLORS.white,
    fontFamily: WEIGHTS.bold,
    fontSize: SIZES.subheader,
  },
  message: {
    color: COLORS.white,
  },
  shopContainer: {
    alignSelf: "flex-start",
    marginTop: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: COLORS.white,
    borderRadius: 4,
  },
  shop: {
    color: COLORS.primary,
  },
  image: {
    width: "60%",
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
});

export default Discount;
