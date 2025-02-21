import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../../components/common/AppText";
import PrimaryButton from "../../components/common/PrimaryButton";
import { TMessagesStackParamsList } from "../../constants/types";
import { COLORS, SIZES, WEIGHTS } from "../../constants/theme";

type TProps = StackScreenProps<TMessagesStackParamsList, "Summary">;

const SummaryScreen = ({ navigation }: TProps) => {
  const insets = useSafeAreaInsets();

  function handleBackPress() {
    navigation.goBack();
  }

  function handleContinuePress() {
    navigation.navigate("Messages");
  }

  return (
    <SafeAreaView edges={["top", "right", "left"]} style={styles.container}>
      <TouchableOpacity style={[styles.backContainer, { top: 16 + insets.top }]} onPress={handleBackPress}>
        <MaterialCommunityIcons name="chevron-left" color={COLORS.black} size={32} />
      </TouchableOpacity>
      <AppText style={styles.header}>Order Confirmed</AppText>
      <AppText>
        Thank you for your purchase <AppText style={styles.bold}>Arnav Patel</AppText>!
      </AppText>
      <AppText style={styles.text}>
        Your order number is <AppText style={styles.primary}>#123456</AppText>. A confirmation email has been sent to{" "}
        <AppText style={styles.primary}>patelarnav2005@gmail.com</AppText>
      </AppText>
      <View style={styles.itemContainer}>
        <Image source={{ uri: "https://picsum.photos/206" }} style={styles.image} />
        <View style={styles.rightContainer}>
          <View>
            <AppText style={styles.title}>Zara Classic White shirt</AppText>
            <View style={styles.detailsContainer}>
              <AppText style={styles.detail}>Clothing</AppText>
              <AppText style={styles.detail}>Like New</AppText>
            </View>
          </View>
          <View style={styles.userContainer}>
            <Image source={{ uri: "https://picsum.photos/207" }} style={styles.profile} />
            <View>
              <AppText style={styles.name}>Arnav Patel</AppText>
              <AppText style={styles.username}>@patelarnav</AppText>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.continueContainer}>
        <PrimaryButton text="Continue Shopping" handlePress={handleContinuePress} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    padding: 16,
    height: "100%",
    backgroundColor: COLORS.white,
  },
  backContainer: {
    position: "absolute",
    top: 16,
    left: 16,
  },
  header: {
    marginBottom: 8,
    fontFamily: WEIGHTS.semiBold,
    fontSize: SIZES.header,
  },
  bold: {
    fontFamily: WEIGHTS.bold,
  },
  text: {
    textAlign: "center",
  },
  primary: {
    color: COLORS.primary,
    fontFamily: WEIGHTS.medium,
  },
  itemContainer: {
    flexDirection: "row",
    gap: 8,
    marginTop: 8,
    marginHorizontal: 16,
    padding: 8,
    backgroundColor: COLORS.largeGray,
    borderRadius: 8,
  },
  image: {
    height: 160,
    width: 160,
  },
  rightContainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: 8,
  },
  title: {
    fontFamily: WEIGHTS.medium,
    fontSize: SIZES.medium,
  },
  detailsContainer: {
    flexDirection: "row",
    gap: 8,
  },
  detail: {
    color: COLORS.textGray,
    fontSize: SIZES.tiny,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  profile: {
    height: 48,
    width: 48,
    borderRadius: 24,
  },
  name: {
    fontSize: SIZES.small,
  },
  username: {
    color: COLORS.textGray,
    fontSize: SIZES.tiny,
  },
  continueContainer: {
    position: "absolute",
    bottom: 16,
    marginBottom: 16,
    width: "100%",
  },
});

export default SummaryScreen;
