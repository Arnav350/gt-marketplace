import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackScreenProps } from "@react-navigation/stack";

import AppText from "../../components/common/AppText";
import Input from "../../components/common/Input";
import PrimaryButton from "../../components/common/PrimaryButton";
import { TAuthStackParamsList } from "../../constants/types";
import { COLORS, SIZES, WEIGHTS } from "../../constants/theme";

type TProps = StackScreenProps<TAuthStackParamsList, "Register">;

const RegisterScreen = ({ navigation }: TProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPass, setShowPass] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  function handleEyePress() {
    setShowPass((prev) => !prev);
  }

  function handleRegisterPress() {
    navigation.navigate("RegisterProfile");
  }

  function handleLoginPress() {
    navigation.navigate("Login");
  }

  return (
    <SafeAreaView style={styles.container}>
      <AppText style={styles.header}>Create your Account</AppText>
      {emailError && <AppText style={styles.error}>{emailError}</AppText>}
      <Input placeholder="email" text={email} setText={setEmail} leftIcon="email" style={{ marginBottom: 8 }} />
      {passwordError && <AppText style={styles.error}>{passwordError}</AppText>}
      <Input
        placeholder="passsword"
        text={password}
        setText={setPassword}
        leftIcon="lock"
        rightIcon={showPass ? "eye-off" : "eye"}
        iconPress={handleEyePress}
      />
      <PrimaryButton text="Register" handlePress={handleRegisterPress} style={{ marginTop: 56 }} />
      <View style={styles.textContainer}>
        <AppText style={styles.text}>Already have an account?</AppText>
        <TouchableOpacity onPress={handleLoginPress}>
          <AppText style={styles.login}> Log In</AppText>
        </TouchableOpacity>
      </View>
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
  login: {
    color: COLORS.primary,
    fontFamily: WEIGHTS.semiBold,
    fontSize: SIZES.tiny,
    textDecorationLine: "underline",
  },
});

export default RegisterScreen;
