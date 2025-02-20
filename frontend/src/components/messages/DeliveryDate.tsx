import React, { Dispatch, SetStateAction } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import AppText from "../common/AppText";
import { COLORS, SIZES, WEIGHTS } from "../../constants/theme";

type TProps = {
  text: string;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
};

const DeliveryDate = ({ text, selected, setSelected }: TProps) => {
  function handlePress() {
    setSelected(text);
  }

  return (
    <TouchableOpacity style={[styles.container, text === selected && styles.selectedContainer]} onPress={handlePress}>
      <AppText style={[styles.text, text === selected && styles.selectedText]}>{text}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.largeGray,
    borderRadius: 8,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  selectedContainer: {
    backgroundColor: COLORS.primary,
  },
  text: {
    fontFamily: WEIGHTS.medium,
    fontSize: SIZES.medium,
  },
  selectedText: {
    color: COLORS.white,
  },
});

export default DeliveryDate;
