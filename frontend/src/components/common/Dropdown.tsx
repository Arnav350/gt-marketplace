import React, { Dispatch, SetStateAction, useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../constants/theme";

type TProps = {
  placeholder: string;
  options: string[];
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
};

const Dropdown = ({ placeholder, options, selected, setSelected }: TProps) => {
  const [opened, setOpened] = useState<boolean>(false);

  function handleDropdownPress() {
    setOpened((prev) => !prev);
  }

  function handleOptionPress(option: string) {
    setSelected(option);
    setOpened(false);
  }

  return (
    <View style={[styles.container, opened && { backgroundColor: COLORS.alphaPrimary, borderColor: COLORS.primary }]}>
      <TouchableOpacity style={styles.dropdownContainer} onPress={handleDropdownPress}>
        {selected ? (
          <AppText style={styles.selected}>{selected}</AppText>
        ) : (
          <AppText style={styles.placeholder}>{placeholder}</AppText>
        )}
        <MaterialCommunityIcons name={opened ? "chevron-up" : "chevron-down"} size={32} color={COLORS.black} />
      </TouchableOpacity>
      {opened && (
        <ScrollView contentContainerStyle={styles.optionsContainer}>
          {options.map((option) => (
            <TouchableOpacity key={option} style={styles.optionContainer} onPress={() => handleOptionPress(option)}>
              <AppText style={styles.option}>{option}</AppText>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.borderGray,
  },
  dropdownContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selected: {},
  placeholder: {
    color: COLORS.textGray,
  },
  optionsContainer: {
    gap: 8,
  },
  optionContainer: {},
  option: {},
});

export default Dropdown;
