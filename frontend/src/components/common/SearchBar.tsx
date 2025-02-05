import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { COLORS } from "../../constants/theme";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Text>SearchBar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    backgroundColor: COLORS.smallGray,
    borderRadius: 24,
  },
});

export default SearchBar;
