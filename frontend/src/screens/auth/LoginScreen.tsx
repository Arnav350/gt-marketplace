import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackScreenProps } from "@react-navigation/stack";

import AppText from "../../components/common/AppText";
import Input from "../../components/common/Input";
import PrimaryButton from "../../components/common/PrimaryButton";
import { TAuthStackParamsList } from "../../constants/types";
import { COLORS, SIZES, WEIGHTS } from "../../constants/theme";

type TProps = StackScreenProps<TAuthStackParamsList, "Login">;

const LoginScreen = ({ navigation }: TProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPass, setShowPass] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  function handleEyePress() {
    setShowPass((prev) => !prev);
  }

  function handleLoginPress() {}

  function handleRegisterPress() {
    navigation.navigate("Register");
  }

  function handleForgotPress() {
    navigation.navigate("ForgotPassword");
  }

  return (
    <SafeAreaView style={styles.container}>
      <AppText style={styles.header}>Log in Now</AppText>
      {emailError && <AppText style={styles.error}>{emailError}</AppText>}
      <View style={styles.inputContainer}>
        <Input placeholder="email" text={email} setText={setEmail} leftIcon="email" />
      </View>
      {passwordError && <AppText style={styles.error}>{passwordError}</AppText>}
      <Input
        placeholder="passsword"
        text={password}
        setText={setPassword}
        leftIcon="lock"
        rightIcon={showPass ? "eye-off" : "eye"}
        iconPress={handleEyePress}
      />
      <PrimaryButton text="Login" handlePress={handleLoginPress} style={{ marginTop: 56 }} />
      <View style={styles.textContainer}>
        <AppText style={styles.text}>Don't have an account?</AppText>
        <TouchableOpacity onPress={handleRegisterPress}>
          <AppText style={styles.register}> Register</AppText>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleForgotPress}>
        <AppText style={styles.forgot}>Forgot Password?</AppText>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  header: {
    marginBottom: 40,
    fontFamily: WEIGHTS.bold,
    fontSize: 28,
  },
  error: {
    marginLeft: 4,
    alignSelf: "flex-start",
    color: COLORS.error,
    fontSize: SIZES.tiny,
  },
  inputContainer: {
    marginBottom: 8,
    width: "100%",
  },
  textContainer: {
    marginTop: 16,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: COLORS.textGray,
    fontSize: SIZES.tiny,
  },
  register: {
    color: COLORS.primary,
    fontFamily: WEIGHTS.semiBold,
    fontSize: SIZES.tiny,
    textDecorationLine: "underline",
  },
  forgot: {
    marginTop: 8,
    color: COLORS.textGray,
    fontSize: SIZES.tiny,
  },
});

export default LoginScreen;
