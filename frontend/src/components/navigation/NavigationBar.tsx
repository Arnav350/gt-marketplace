import React from "react";
import { StyleSheet, Text, View } from "react-native";

type TProps = {
  state: any;
  descriptors: any;
  navigation: any;
};

const NavigationBar = ({ state, descriptors, navigation }: TProps) => {
  return (
    <View style={styles.container}>
      <Text>NavigationBar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default NavigationBar;
