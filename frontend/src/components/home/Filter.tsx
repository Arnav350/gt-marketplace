import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../common/AppText";
import { COLORS } from "../../constants/theme";

const Filter = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <AppText>filter</AppText>
      <MaterialCommunityIcons name="filter-outline" color={COLORS.black} size={14} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 14,
    paddingRight: 12,
    width: 72,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: COLORS.borderGray,
  },
});

export default Filter;
