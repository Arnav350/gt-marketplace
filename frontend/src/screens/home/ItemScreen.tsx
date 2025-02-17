import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackScreenProps } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { THomeStackParamsList } from "../../constants/types";
import { COLORS, SIZES, WEIGHTS } from "../../constants/theme";
import AppText from "../../components/common/AppText";
import Item from "../../components/home/Item";
import PrimaryButton from "../../components/common/PrimaryButton";
import UserInfo from "../../components/common/UserInfo";

type TProps = StackScreenProps<THomeStackParamsList, "Item">;

const ItemScreen = ({ navigation, route }: TProps) => {
  const [saved, setSaved] = useState<boolean>(false);

  function handleBackPress() {
    navigation.goBack();
  }

  function handleBookmarkPress() {
    setSaved((prev) => !prev);
  }

  return (
    <SafeAreaView edges={["top", "right", "left"]} style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <TouchableOpacity onPress={handleBackPress}>
          <MaterialCommunityIcons name="chevron-left" color={COLORS.black} size={32} />
        </TouchableOpacity>
        <View>
          <Image source={{ uri: "https://picsum.photos/203" }} />
          <Image source={{ uri: "https://picsum.photos/203" }} />
          <Image source={{ uri: "https://picsum.photos/203" }} />
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.titleContainer}>
            <AppText style={styles.title}>{route.params.title}</AppText>
            <TouchableOpacity onPress={handleBookmarkPress}>
              {saved ? (
                <MaterialCommunityIcons name="bookmark" color={COLORS.primary} size={36} />
              ) : (
                <MaterialCommunityIcons name="bookmark-outline" color={COLORS.black} size={36} />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.detailsContainer}>
            <AppText style={styles.price}>${route.params.price}</AppText>
            <AppText style={styles.detail}>{route.params.category}</AppText>
            <AppText style={styles.detail}>{route.params.condition}</AppText>
          </View>
          <AppText style={styles.description}>{route.params.description}</AppText>
          <AppText style={styles.subheader}>About the Seller</AppText>
          <UserInfo image="https://picsum.photos/204" name="Arnav Patel" username="patelarnav" />
          <AppText style={styles.subheader}>Similar Items</AppText>
          <ScrollView horizontal>
            <Item title="title" price={1} />
            <Item title="title" price={1} />
            <Item title="title" price={1} />
          </ScrollView>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <PrimaryButton text="Contact Seller" handlePress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
  },
  scrollContainer: {
    height: "100%",
  },
  bodyContainer: {
    padding: 16,
    marginBottom: 96,
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontFamily: WEIGHTS.semiBold,
    fontSize: SIZES.subheader,
  },
  detailsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 32,
  },
  price: {
    color: COLORS.primary,
    fontFamily: WEIGHTS.bold,
    fontSize: SIZES.subheader,
  },
  detail: {
    fontSize: SIZES.large,
  },
  description: {
    marginTop: 16,
    color: COLORS.textGray,
  },
  subheader: {
    marginTop: 24,
    marginBottom: 16,
    fontFamily: WEIGHTS.semiBold,
    fontSize: SIZES.subheader,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 32,
    paddingHorizontal: 32,
    width: "100%",
  },
});

export default ItemScreen;
