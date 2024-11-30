import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import PrimaryButton from "../../components/common/PrimaryButton";

const RegisterScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <Text>Register</Text>
      <Text>Username</Text>
      <TextInput value={username} placeholder="username" onChangeText={setUsername} />
      <Text>Password</Text>
      <TextInput value={password} placeholder="password" onChangeText={setPassword} />
      <Text>*Email is already in use</Text>
      <PrimaryButton text="Register" handlePress={handleRegister} />
      <View>
        <Text>Already have an account?</Text>
        <TouchableOpacity>Log In</TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default RegisterScreen;
