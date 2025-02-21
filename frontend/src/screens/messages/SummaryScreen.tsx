import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

import AppText from "../../components/common/AppText";
import { COLORS, SIZES, WEIGHTS } from "../../constants/theme";

const SummaryScreen = () => {
  return (
    <SafeAreaView edges={["top", "right", "left"]} style={styles.container}>
      <MaterialCommunityIcons name="chevron-left" color={COLORS.black} size={32} />
      <AppText style={styles.header}>Order Confirmed</AppText>
      <AppText>
        Thank you for your purchase <AppText style={styles.bold}>Arnav Patel</AppText>!
      </AppText>
      <AppText>
        Your order number is <AppText style={styles.primary}>#123456</AppText>. A confirmation email has been sent to{" "}
        <AppText style={styles.primary}>patelarnav2005@gmail.com</AppText>
      </AppText>
      <View style={styles.itemContainer}>
        <Image source={{ uri: "https://picsum.photos/206" }} style={styles.image} />
        <View style={styles.rightContainer}>
          <View>
            <AppText style={styles.title}>Zara Classic White Shirt</AppText>
            <View style={styles.detailsContainer}>
              <AppText style={styles.detail}>Clothing</AppText>
              <AppText style={styles.detail}>Like New</AppText>
            </View>
          </View>
          <View>
            <Image source={{ uri: "https://picsum.photos/207" }} style={styles.profile} />
            <View>
              <AppText style={styles.name}>Arnav Patel</AppText>
              <AppText style={styles.username}>@patelarnav</AppText>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: COLORS.white,
  },
  header: {
    fontFamily: WEIGHTS.semiBold,
    fontSize: SIZES.header,
  },
  bold: {
    fontFamily: WEIGHTS.bold,
  },
  primary: {
    color: COLORS.primary,
    fontFamily: WEIGHTS.medium,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
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
  },
  title: {
    fontFamily: WEIGHTS.medium,
  },
  detailsContainer: {
    flexDirection: "row",
    gap: 8,
  },
  detail: {
    color: COLORS.textGray,
    fontSize: SIZES.small,
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
});

export default SummaryScreen;
