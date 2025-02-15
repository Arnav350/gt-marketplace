import React, { Dispatch, SetStateAction } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import { COLORS } from "../../constants/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type TProps = {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  handleSubmit?: () => void;
};

const SearchBar = ({ text, setText, handleSubmit }: TProps) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="magnify" color={COLORS.textGray} size={24} />
      <TextInput
        placeholder="search"
        placeholderTextColor={COLORS.textGray}
        selectionColor={COLORS.primary}
        returnKeyType="search"
        value={text}
        style={styles.input}
        onChangeText={setText}
        onSubmitEditing={handleSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 12,
    height: 48,
    backgroundColor: COLORS.smallGray,
    borderRadius: 24,
  },
  input: {
    flex: 1,
    paddingHorizontal: 12,
    height: 48,
  },
});

export default SearchBar;
