import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import AppText from "../common/AppText";
import { COLORS } from "../../constants/theme";

type TProps = {
  text: string;
};

const Category = ({ text }: TProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.circle}>
        <Image source={{ uri: "https://picsum.photos/200" }} style={styles.image} />
      </View>
      <AppText style={styles.text}>{text}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    gap: 4,
  },
  circle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 64,
    width: 64,
    borderRadius: 32,
    backgroundColor: COLORS.smallGray,
  },
  image: {
    height: 48,
    width: 48,
  },
  text: {
    maxWidth: 80,
    textAlign: "center",
  },
});

export default Category;
