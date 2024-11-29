import React from "react";
import { View, StyleSheet, Text } from "react-native";
import SearchBar from "../components/SearchBar";

const TransactionScreen = () => {
  const handleSearch = (query: string) => {
    console.log(`Searching transactions: ${query}`);
    // api
  };

  return (
    <View style={styles.container}>
      <SearchBar placeholder="Search transactions..." onSearch={handleSearch} />
      <Text style={styles.info}>Transaction details will be displayed here...</Text>
      {/* Add your transaction details UI below */}
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

export default TransactionScreen;
