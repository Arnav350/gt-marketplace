import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EditDeliveryScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Edit Delivery Address Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default EditDeliveryScreen;
