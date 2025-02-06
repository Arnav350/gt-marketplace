import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../../components/common/SearchBar";

const HomeScreen = () => {
  const [text, setText] = React.useState("");

  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <SearchBar text={text} setText={setText} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
