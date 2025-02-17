import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

import AppText from "../common/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS, SIZES, WEIGHTS } from "../../constants/theme";
import { TCategory, TCondition } from "../../constants/types";

type TProps = {
  title: string;
  price: number;
  category: TCategory;
  condition: TCondition;
  initSaved?: boolean;
  handlePress: () => void;
};

const HorizontalItem = ({ title, price, category, condition, initSaved, handlePress }: TProps) => {
  const [saved, setSaved] = useState<boolean | undefined>(initSaved);

  function handleBookmarkPress() {
    setSaved((prev) => !prev);
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://picsum.photos/201" }} style={styles.image} />
      <View style={styles.rightContainer}>
        <View>
          <View style={styles.titleContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {saved !== undefined && (
              <TouchableOpacity onPress={handleBookmarkPress}>
                {saved ? (
                  <MaterialCommunityIcons name="bookmark" color={COLORS.primary} size={28} />
                ) : (
                  <MaterialCommunityIcons name="bookmark-outline" color={COLORS.black} size={28} />
                )}
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.detailsContainer}>
            <AppText style={styles.price}>${price}</AppText>
            <AppText style={styles.detail}>{category}</AppText>
            <AppText style={styles.detail}>{condition}</AppText>
          </View>
        </View>
        <TouchableOpacity style={styles.contactContainer} onPress={handlePress}>
          <AppText style={styles.contact}>{initSaved === undefined ? "Edit Item" : "Contact Seller"}</AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    padding: 8,
    height: 176,
    backgroundColor: COLORS.largeGray,
    borderRadius: 8,
  },
  image: {
    height: 160,
    width: 160,
  },
  rightContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 8,
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: WEIGHTS.medium,
  },
  detailsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    color: COLORS.primary,
    fontFamily: WEIGHTS.bold,
    fontSize: SIZES.medium,
  },
  detail: {
    fontSize: SIZES.tiny,
  },
  contactContainer: {
    paddingVertical: 8,
    paddingHorizontal: 24,
    backgroundColor: COLORS.black,
    borderRadius: 4,
  },
  contact: {
    alignSelf: "center",
    color: COLORS.white,
  },
});

export default HorizontalItem;
