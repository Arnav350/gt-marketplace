import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

import AppText from "./AppText";
import { COLORS, SIZES } from "../../constants/theme";

type TProps = {
  image: string;
  name: string;
  username: string;
};

const UserInfo = ({ image, name, username }: TProps) => {
  function handlePress() {}

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image source={{ uri: image }} style={styles.image} />
      <View>
        <AppText style={styles.name}>{name}</AppText>
        <AppText style={styles.username}>@{username}</AppText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  image: {
    height: 64,
    width: 64,
    borderRadius: 32,
  },
  name: {
    fontSize: SIZES.medium,
  },
  username: {
    color: COLORS.textGray,
  },
});

export default UserInfo;
