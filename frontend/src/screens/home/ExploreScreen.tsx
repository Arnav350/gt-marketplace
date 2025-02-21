import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, FlatList, ScrollView, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackScreenProps } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../../components/common/AppText";
import SearchBar from "../../components/common/SearchBar";
import Filter from "../../components/home/Filter";
import Item from "../../components/home/Item";
import { THomeStackParamsList } from "../../constants/types";
import { COLORS, SIZES, WEIGHTS } from "../../constants/theme";
import FilterOption from "../../components/home/FilterOption";

type TProps = StackScreenProps<THomeStackParamsList, "Explore">;

const { width } = Dimensions.get("window");

const ExploreScreen = ({ navigation }: TProps) => {
  const items = [
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

  const [search, setSearch] = useState<string>("");
  const [filters, setFilters] = useState<string[]>(["clothing", "<$50", "brand new", "temp"]);
  const [filtersScrollWidth, setFiltersScrollWidth] = useState(0);

  function handleStorePress() {
    navigation.navigate("SellingList");
  }

  function handleBookmarkPress() {
    navigation.navigate("Wishlist");
  }

  function handleBackPress() {
    navigation.goBack();
  }

  function handleFilterPress(text: string) {
    setFilters((prev) => prev.filter((filter) => filter !== text));
  }

  function handleSearchSubmit() {
    navigation.navigate("Explore");
  }

  return (
    <SafeAreaView style={styles.container} edges={["top", "right", "left"]}>
      <View style={styles.headerContainer}>
        <AppText style={styles.header}>Explore</AppText>
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={handleStorePress}>
            <MaterialCommunityIcons name="storefront-outline" color={COLORS.black} size={28} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleBookmarkPress}>
            <MaterialCommunityIcons name="bookmark-outline" color={COLORS.black} size={28} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <TouchableOpacity onPress={handleBackPress}>
          <MaterialCommunityIcons name="chevron-left" color={COLORS.black} size={32} />
        </TouchableOpacity>
        <SearchBar text={search} setText={setSearch} handleSubmit={handleSearchSubmit} />
      </View>
      <ScrollView scrollEnabled={filtersScrollWidth > width} horizontal showsHorizontalScrollIndicator={false}>
        <View
          onLayout={(event) => {
            const { width: scrollWidth } = event.nativeEvent.layout;
            setFiltersScrollWidth(scrollWidth);

            console.log(scrollWidth);
            console.log(width);
          }}
          style={styles.filtersContainer}
        >
          {filters.map((filter, i) => (
            <FilterOption key={i} text={filter} handlePress={(filter) => handleFilterPress(filter)} />
          ))}
          <Filter />
        </View>
      </ScrollView>
      <FlatList
        data={items}
        numColumns={2}
        keyExtractor={(__, index) => index.toString()}
        contentContainerStyle={styles.itemsContainer}
        ListHeaderComponent={items.length > 0 ? <AppText style={styles.subheader}>All Results</AppText> : null}
        ListEmptyComponent={
          <AppText style={styles.none}>
            No matches found for '<AppText>{search}</AppText>'
          </AppText>
        }
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Item title={item.title} price={item.price} />
          </View>
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
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
    marginHorizontal: 16,
  },
  header: {
    fontFamily: WEIGHTS.semiBold,
    fontSize: SIZES.header,
  },
  iconsContainer: {
    flexDirection: "row",
    gap: 4,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginHorizontal: 16,
  },
  filtersContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 8,
    marginTop: 8,
    paddingHorizontal: 16,
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
  itemContainer: {
    marginHorizontal: 8,
  },
});

export default ExploreScreen;
