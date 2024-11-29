import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import SearchBar from "../../components/SearchBar";

type MarketplaceStackParamList = {
  Marketplace: undefined;
  SearchItems: undefined;
};

type MarketplaceScreenNavigationProp = StackNavigationProp<MarketplaceStackParamList, "Marketplace">;

const MarketplaceScreen = () => {
  const navigation = useNavigation<MarketplaceScreenNavigationProp>();

  const handleFocus = () => {
    navigation.navigate("SearchItems");
  };

  return (
    <View style={styles.container}>
      <SearchBar placeholder="Search for items..." onSearch={() => {}} onFocus={handleFocus} />
      <Text style={styles.info}>Marketplace items will be displayed here...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8f9fa",
  },
  info: {
    marginTop: 16,
    fontSize: 16,
    color: "#333",
  },
});

export default MarketplaceScreen;
