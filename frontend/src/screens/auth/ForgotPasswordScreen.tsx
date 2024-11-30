import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import SecondaryButton from "../../components/common/SecondaryButton";

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");

  const handleForgot = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <Text>Forgot Password</Text>
      <Text>Email</Text>
      <TextInput value={email} placeholder="email" onChangeText={setEmail} />
      <Text>*Email does not exist</Text>
      <SecondaryButton text="Send" handlePress={handleForgot} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ForgotPasswordScreen;
