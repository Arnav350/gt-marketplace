import React, { Dispatch, SetStateAction, useState } from "react";
import { LayoutChangeEvent, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { COLORS } from "../../constants/theme";
import AppText from "./AppText";

type TProps = {
  placeholder: string;
  options: string[];
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
};

const Dropdown = ({ placeholder, options, selected, setSelected }: TProps) => {
  const [opened, setOpened] = useState<boolean>(false);
  const [dropdownWidth, setDropdownWidth] = useState<number>(0);

  function handleLayout(event: LayoutChangeEvent) {
    const { width } = event.nativeEvent.layout;
    setDropdownWidth(width);
  }

  function handleDropdownPress() {
    setOpened((prev) => !prev);
  }

  function handleOptionPress(option: string) {
    setSelected(option);
    setOpened(false);
  }

  return (
    <View
      style={[
        styles.container,
        opened && {
          backgroundColor: COLORS.lightPrimary,
          borderColor: COLORS.primary,
          borderBottomWidth: 0,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        },
      ]}
      onLayout={handleLayout}
    >
      <TouchableOpacity style={styles.dropdownContainer} onPress={handleDropdownPress}>
        {selected ? (
          <AppText style={styles.selected} numberOfLines={1}>
            {selected}
          </AppText>
        ) : (
          <AppText style={styles.placeholder}>{placeholder}</AppText>
        )}
        <MaterialCommunityIcons name={opened ? "chevron-up" : "chevron-down"} size={32} color={COLORS.black} />
      </TouchableOpacity>
      {opened && (
        <View style={[styles.scrollContainer, { width: dropdownWidth }]}>
          <ScrollView nestedScrollEnabled contentContainerStyle={styles.optionsContainer}>
            {options.map((option) => (
              <TouchableOpacity key={option} onPress={() => handleOptionPress(option)}>
                <AppText>{option}</AppText>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 12,
    paddingRight: 4,
    height: 56,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.borderGray,
  },
  dropdownContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selected: {
    flexShrink: 1,
  },
  placeholder: {
    color: COLORS.textGray,
  },
  scrollContainer: {
    zIndex: 1,
    position: "absolute",
    top: 55,
    left: -1,
    height: 80,
    backgroundColor: COLORS.lightPrimary,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: COLORS.primary,
  },
  optionsContainer: {
    paddingHorizontal: 12,
    paddingBottom: 12,
    gap: 8,
  },
});

export default Dropdown;
