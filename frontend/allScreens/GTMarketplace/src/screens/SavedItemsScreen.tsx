import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SearchBar from '../components/SearchBar';

const SavedItemsScreen = () => {
  const handleSearch = (query: string) => {
    console.log(`Searching for saved items: ${query}`);
    // api
  };

  return (
    <View style={styles.container}>
      <SearchBar placeholder="Search saved items..." onSearch={handleSearch} />
      <Text style={styles.info}>Saved items will be displayed here...</Text>
      {/* ui here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  info: {
    marginTop: 16,
    fontSize: 16,
    color: '#333',
  },
});

export default SavedItemsScreen;
