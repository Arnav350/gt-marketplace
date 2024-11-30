import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Checkbox from "../../components/common/Checkbox";
import SecondaryButton from "../../components/common/SecondaryButton";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <Text>Log In</Text>
      <Text>Username</Text>
      <TextInput value={username} placeholder="username" onChangeText={setUsername} />
      <Text>Password</Text>
      <TextInput value={password} placeholder="password" onChangeText={setPassword} />
      <View>
        <Checkbox checked={rememberMe} setChecked={setRememberMe} />
        <Text>Remember Me</Text>
      </View>
      <Text>*Username or password is incorrect</Text>
      <SecondaryButton text="Log In" handlePress={handleLogin} />
      <TouchableOpacity>Forgot Your Password?</TouchableOpacity>
      <View>
        <Text>Don't have an account?</Text>
        <TouchableOpacity>Sign up</TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default LoginScreen;
