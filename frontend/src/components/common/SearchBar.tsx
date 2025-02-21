import React, { Dispatch, SetStateAction } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

import { COLORS } from "../../constants/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type TProps = {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  handleSubmit?: () => void;
};

const SearchBar = ({ text, setText, handleSubmit }: TProps) => {
  function handleClosePress() {
    setText("");
  }

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
      {text.length > 0 && (
        <TouchableOpacity onPress={handleClosePress}>
          <MaterialCommunityIcons name="close-circle-outline" color={COLORS.black} size={24} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
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
