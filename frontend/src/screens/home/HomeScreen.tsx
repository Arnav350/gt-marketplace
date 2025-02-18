import React, { useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackScreenProps } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../../components/common/AppText";
import SearchBar from "../../components/common/SearchBar";
import Category from "../../components/home/Category";
import Item from "../../components/home/Item";
import { THomeStackParamsList, TItem } from "../../constants/types";
import { COLORS, SIZES, WEIGHTS } from "../../constants/theme";
import { categories } from "../../constants/init";
import Discount from "../../components/home/Discount";

type TProps = StackScreenProps<THomeStackParamsList, "Home">;

const HomeScreen = ({ navigation }: TProps) => {
  const discount = "50% off all delivery costs";
  const trendings = [
    {
      title: "Zara Classic White Shirt",
      price: 28,
    },
    {
      title: "Zara Classic White Shirt",
      price: 28,
    },
    {
      title: "Zara Classic White Shirt",
      price: 28,
    },
  ];
  const recents = [
    {
      title: "Zara Classic White Shirt",
      price: 28,
    },
    {
      title: "Zara Classic White Shirt",
      price: 28,
    },
    {
      title: "Zara Classic White Shirt",
      price: 28,
    },
  ];

  const item = {
    id: "1",
  };

  const [search, setSearch] = useState<string>("");

  function handleStorePress() {
    navigation.navigate("SellingList");
  }

  function handleBookmarkPress() {
    navigation.navigate("Wishlist");
  }

  function handleSearchSubmit() {
    navigation.navigate("Explore");
  }

  return (
    <SafeAreaView edges={["top", "right", "left"]} style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <AppText style={styles.header} onPress={() => navigation.navigate("Item", { itemId: item.id })}>
            Home
          </AppText>
          <View style={styles.iconsContainer}>
            <TouchableOpacity onPress={handleStorePress}>
              <MaterialCommunityIcons name="storefront-outline" color={COLORS.black} size={28} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleBookmarkPress}>
              <MaterialCommunityIcons name="bookmark-outline" color={COLORS.black} size={28} />
            </TouchableOpacity>
          </View>
        </View>
        <SearchBar text={search} setText={setSearch} handleSubmit={handleSearchSubmit} />
        <Discount text={discount} />
        <AppText style={styles.subheader}>Categories</AppText>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesContainer}
        >
          {categories.map((category, index) => (
            <Category text={category} key={index} />
          ))}
        </ScrollView>
        <AppText style={styles.subheader}>Trending</AppText>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.trendingsContainer}>
          {trendings.map(({ title, price }, index) => (
            <Item title={title} price={price} key={index} />
          ))}
        </ScrollView>
        <AppText style={styles.subheader}>Recently Viewed</AppText>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.recentsContainer}>
          {recents.map(({ title, price }, index) => (
            <Item title={title} price={price} key={index} />
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
  },
  scrollContainer: {
    padding: 16,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  header: {
    fontFamily: WEIGHTS.semiBold,
    fontSize: SIZES.header,
  },
  iconsContainer: {
    flexDirection: "row",
    gap: 4,
  },
  subheader: {
    marginTop: 24,
    marginBottom: 16,
    fontFamily: WEIGHTS.semiBold,
    fontSize: SIZES.subheader,
  },
  categoriesContainer: {
    gap: 16,
  },
  trendingsContainer: {
    gap: 16,
  },
  recentsContainer: {
    gap: 16,
    marginBottom: 24,
  },
});

export default HomeScreen;
