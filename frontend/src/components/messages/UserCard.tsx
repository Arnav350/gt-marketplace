import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

import AppText from "../common/AppText";
import { COLORS, SIZES } from "../../constants/theme";

type TProps = {
  name: string;
  last: string;
  date: string;
};

const UserCard = ({ name, last, date }: TProps) => {
  function handlePress() {}

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Image source={{ uri: "https://picsum.photos/205" }} style={styles.image} />
      <View style={styles.textContainer}>
        <View style={styles.rowContainer}>
          <AppText style={styles.name}>{name}</AppText>
          <AppText style={styles.date}>{date}</AppText>
        </View>
        <AppText style={styles.last} numberOfLines={2}>
          {last}
        </AppText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  image: {
    height: 64,
    width: 64,
    borderRadius: 32,
  },
  textContainer: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: SIZES.medium,
  },
  date: {
    color: COLORS.textGray,
  },
  last: {
    width: "90%",
    color: COLORS.textGray,
  },
});

export default UserCard;
