import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

interface SearchBarProps {
  placeholder: string;
  onSearch: (query: string) => void;
  onFocus?: () => void;
  inputRef?: React.Ref<TextInput>; // Ref for the TextInput
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onSearch, onFocus, inputRef }) => {
  const handleChangeText = (text: string) => {
    onSearch(text); // Call onSearch when the query changes
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        onChangeText={handleChangeText}
        onFocus={onFocus} // Trigger onFocus callback when the input is focused
        ref={inputRef} // Attach the ref to the TextInput
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
  },
});

export default SearchBar;
