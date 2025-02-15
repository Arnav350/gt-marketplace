import React, { useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../../components/common/AppText";
import SearchBar from "../../components/common/SearchBar";
import Filter from "../../components/home/Filter";
import HorizontalItem from "../../components/home/HorizontalItem";
import { TCategory, TCondition, THomeStackParamsList } from "../../constants/types";
import { COLORS, SIZES, WEIGHTS } from "../../constants/theme";

type TProps = StackScreenProps<THomeStackParamsList, "SellingList">;

type TItem = {
  title: string;
  price: number;
  category: TCategory;
  condition: TCondition;
};

const SellingListScreen = ({ navigation }: TProps) => {
  const items: TItem[] = [
    {
      title: "Zara Classic White Shirt",
      price: 28,
      category: "Clothing",
      condition: "Like New",
    },
    {
      title: "Zara Classic White Shirt",
      price: 28,
      category: "Clothing",
      condition: "Like New",
    },
    {
      title: "Zara Classic White Shirt",
      price: 28,
      category: "Clothing",
      condition: "Like New",
    },
  ];

  const [search, setSearch] = useState<string>("");

  function handleBackPress() {
    navigation.goBack();
  }

  return (
    <SafeAreaView style={styles.container} edges={["top", "right", "left"]}>
      <View style={styles.headerContainer}>
        <AppText style={styles.header}>My Items</AppText>
      </View>
      <View style={styles.searchContainer}>
        <TouchableOpacity onPress={handleBackPress}>
          <MaterialCommunityIcons name="chevron-left" color={COLORS.black} size={32} />
        </TouchableOpacity>
        <SearchBar text={search} setText={setSearch} />
      </View>
      <View style={styles.filtersContainer}>
        <Filter />
      </View>
      <FlatList
        data={items}
        keyExtractor={(__, index) => index.toString()}
        contentContainerStyle={styles.itemsContainer}
        ListEmptyComponent={
          <AppText style={styles.none}>
            No matches found for '<AppText>{search}</AppText>'
          </AppText>
        }
        renderItem={({ item }) => (
          <HorizontalItem
            title={item.title}
            price={item.price}
            category={item.category}
            condition={item.condition}
            handlePress={() => {}}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    backgroundColor: COLORS.white,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
    marginHorizontal: 16,
  },
  header: {
    fontFamily: WEIGHTS.semiBold,
    fontSize: SIZES.header,
  },
  searchContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginHorizontal: 16,
  },
  filtersContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 8,
    marginTop: 8,
    marginHorizontal: 16,
  },
  itemsContainer: {
    gap: 16,
    marginVertical: 24,
    marginHorizontal: 16,
  },
  subheader: {
    fontFamily: WEIGHTS.semiBold,
    fontSize: SIZES.subheader,
  },
  none: {
    color: COLORS.textGray,
  },
});

export default SellingListScreen;
