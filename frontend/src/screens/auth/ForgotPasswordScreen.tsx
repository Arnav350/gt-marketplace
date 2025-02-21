import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { StackScreenProps } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../../components/common/AppText";
import Input from "../../components/common/Input";
import PrimaryButton from "../../components/common/PrimaryButton";
import { TAuthStackParamsList } from "../../constants/types";
import { COLORS, SIZES, WEIGHTS } from "../../constants/theme";

type TProps = StackScreenProps<TAuthStackParamsList, "ForgotPassword">;

const ForgotPasswordScreen = ({ navigation }: TProps) => {
  const insets = useSafeAreaInsets();

  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  function handleBackPress() {
    navigation.goBack();
  }

  function handleSendPress() {}

  function handleRegisterPress() {
    navigation.navigate("Register");
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={[styles.backContainer, { top: 16 + insets.top }]} onPress={handleBackPress}>
        <MaterialCommunityIcons name="chevron-left" color={COLORS.black} size={40} />
      </TouchableOpacity>
      <AppText style={styles.header}>Forgot Password</AppText>
      {emailError && <AppText style={styles.error}>{emailError}</AppText>}
      <View style={styles.inputContainer}>
        <Input placeholder="email" text={email} setText={setEmail} leftIcon="email" />
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton text="Send" handlePress={handleSendPress} />
      </View>
      <View style={styles.textContainer}>
        <AppText style={styles.text}>Don't have an account?</AppText>
        <TouchableOpacity onPress={handleRegisterPress}>
          <AppText style={styles.register}> Register</AppText>
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
  backContainer: {
    position: "absolute",
    top: 16,
    left: 16,
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
  buttonContainer: {
    marginTop: 32,
    width: "100%",
  },
  textContainer: {
    marginTop: 16,
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
});

export default ForgotPasswordScreen;
