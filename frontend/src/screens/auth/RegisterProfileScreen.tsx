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

type TProps = StackScreenProps<TAuthStackParamsList, "RegisterProfile">;

const RegisterProfileScreen = ({ navigation }: TProps) => {
  const insets = useSafeAreaInsets();

  const [username, setUsername] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [extra, setExtra] = useState<string>("");
  const [usernameError, setUsernameError] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [addressError, setAddressError] = useState<string>("");
  const [extraError, setExtraError] = useState<string>("");

  function handleBackPress() {
    navigation.goBack();
  }

  function handleContinuePress() {}

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={[styles.backContainer, { top: 16 + insets.top }]} onPress={handleBackPress}>
        <MaterialCommunityIcons name="chevron-left" color={COLORS.black} size={40} />
      </TouchableOpacity>
      <AppText style={styles.header}>Finish your Profile</AppText>
      {usernameError && <AppText style={styles.error}>{usernameError}</AppText>}
      <View style={styles.inputContainer}>
        <Input placeholder="username" text={username} setText={setUsername} leftIcon="account" />
      </View>
      {nameError && <AppText style={styles.error}>{nameError}</AppText>}
      <View style={styles.inputContainer}>
        <Input placeholder="full name" text={name} setText={setName} leftIcon="account-multiple" />
      </View>
      {addressError && <AppText style={styles.error}>{addressError}</AppText>}
      <View style={styles.inputContainer}>
        <Input placeholder="street address" text={address} setText={setAddress} leftIcon="home" />
      </View>
      {extraError && <AppText style={styles.error}>{extraError}</AppText>}
      <View style={styles.inputContainer}>
        <Input placeholder="po box, room number, etc." text={extra} setText={setExtra} leftIcon="map-marker" />
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton text="Continue" handlePress={handleContinuePress} />
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
});

export default RegisterProfileScreen;
