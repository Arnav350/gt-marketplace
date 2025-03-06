import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { KeyboardTypeOptions, StyleSheet, TextInput, TouchableOpacity, View, ViewStyle } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { COLORS } from "../../constants/theme";

type TProps = {
  placeholder: string;
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  leftIcon?: keyof typeof MaterialCommunityIcons.glyphMap;
  rightIcon?: keyof typeof MaterialCommunityIcons.glyphMap;
  iconPress?: () => void;
  type?: KeyboardTypeOptions;
};

const Input = ({ placeholder, text, setText, leftIcon, rightIcon, iconPress, type }: TProps) => {
  const [focused, setFocused] = useState<boolean>(false);

  return (
    <View style={[styles.container, focused && { backgroundColor: COLORS.lightPrimary, borderColor: COLORS.primary }]}>
      <View style={styles.leftContainer}>
        {leftIcon && <MaterialCommunityIcons name={leftIcon} size={20} color={COLORS.black} style={styles.leftIcon} />}
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={COLORS.textGray}
          selectionColor={COLORS.primary}
          secureTextEntry={rightIcon === "eye" ? true : false}
          keyboardType={type}
          value={text}
          onChangeText={setText}
          style={styles.input}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </View>
      {rightIcon && (
        <TouchableOpacity onPress={iconPress}>
          <MaterialCommunityIcons name={rightIcon} size={20} color={COLORS.black} style={styles.rightIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 56,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.borderGray,
  },
  leftContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  leftIcon: {
    marginLeft: 12,
  },
  input: {
    flex: 1,
    paddingLeft: 12,
    height: 56,
  },
  rightIcon: {
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
});

export default Input;
