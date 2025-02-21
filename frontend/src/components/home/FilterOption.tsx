import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../common/AppText";
import { COLORS } from "../../constants/theme";

type TProps = {
  text: string;
  handlePress: (text: string) => void;
};

const FilterOption = ({ text, handlePress }: TProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => handlePress(text)}>
      <AppText>{text}</AppText>
      <MaterialCommunityIcons name="close-circle-outline" color={COLORS.black} size={16} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    paddingLeft: 12,
    paddingRight: 10,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: COLORS.borderGray,
  },
});

export default FilterOption;
