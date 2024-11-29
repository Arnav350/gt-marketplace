import React, { useEffect, useRef, useState } from "react";
import { View, FlatList, Text, StyleSheet, TextInput } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import SearchBar from "../components/SearchBar";

// Define navigation stack types
type MarketplaceStackParamList = {
  Marketplace: undefined;
  SearchItems: undefined;
};

type SearchItemsScreenNavigationProp = StackNavigationProp<MarketplaceStackParamList, "SearchItems">;

type SearchItemsScreenRouteProp = RouteProp<MarketplaceStackParamList, "SearchItems">;

const SearchItemsScreen = () => {
  const [filteredItems, setFilteredItems] = useState<{ id: string; name: string }[]>([]);
  const [query, setQuery] = useState("");
  const navigation = useNavigation<SearchItemsScreenNavigationProp>();
  const route = useRoute<SearchItemsScreenRouteProp>();
  const searchInputRef = useRef<TextInput>(null);

  const items = [
    { id: "1", name: "Laptop" },
    { id: "2", name: "Phone" },
    { id: "3", name: "Keyboard" },
    { id: "4", name: "Monitor" },
    { id: "5", name: "Mouse" },
  ];

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  const handleSearch = (text: string) => {
    setQuery(text);

    if (text.trim().length === 0) {
      // Navigate back to Marketplace when search bar is cleared
      navigation.navigate("Marketplace");
      return;
    }

    setFilteredItems(items.filter((item) => item.name.toLowerCase().includes(text.toLowerCase())));
  };

  return (
    <View style={styles.container}>
      <SearchBar placeholder="Search for items..." onSearch={handleSearch} inputRef={searchInputRef} />
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
      {filteredItems.length === 0 && query.trim().length > 0 && <Text style={styles.noResults}>No results found</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  noResults: {
    marginTop: 16,
    fontSize: 16,
    color: "#999",
    textAlign: "center",
  },
});

export default SearchItemsScreen;
