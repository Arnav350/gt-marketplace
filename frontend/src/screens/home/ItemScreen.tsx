import React, { useState } from "react";
import { Dimensions, Image, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackScreenProps } from "@react-navigation/stack";
import { useSharedValue } from "react-native-reanimated";
import Carousel, { Pagination } from "react-native-reanimated-carousel";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { THomeStackParamsList, TItem } from "../../constants/types";
import { COLORS, SIZES, WEIGHTS } from "../../constants/theme";
import AppText from "../../components/common/AppText";
import Item from "../../components/home/Item";
import PrimaryButton from "../../components/common/PrimaryButton";
import UserInfo from "../../components/common/UserInfo";

type TProps = StackScreenProps<THomeStackParamsList, "Item">;

const ItemScreen = ({ navigation, route }: TProps) => {
  const item: TItem = {
    id: "1",
    seller_id: "2",
    title: "Zara Classic White Shirt",
    price: 28,
    category: "Clothing",
    condition: "Like New",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore sequi nemo magnam laborum libero deleniti earum quos placeat. Nostrum, nihil harum. Sapiente aperiam dicta saepe unde iure recusandae mollitia ex.",
    address: "1234 Main St",
    address_extra: "Apt 123",
    size: "Medium",
    score: 10,
    created_at: new Date(),
    buyer_id: "3",
    price_sold: 28,
    sold_at: new Date(),
    completed_at: new Date(),
  };

  const images = [
    { uri: "https://picsum.photos/203" },
    { uri: "https://picsum.photos/203" },
    { uri: "https://picsum.photos/203" },
  ];

  const { width } = Dimensions.get("window");

  const [saved, setSaved] = useState<boolean>(false);

  function handleBackPress() {
    navigation.goBack();
  }

  function handleBookmarkPress() {
    setSaved((prev) => !prev);
  }

  const progress = useSharedValue<number>(0);

  return (
    <SafeAreaView edges={["top", "right", "left"]} style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backContainer}>
          <MaterialCommunityIcons name="chevron-left" color={COLORS.black} size={32} />
        </TouchableOpacity>
        <View style={styles.carouselContainer}>
          <Carousel
            data={images}
            renderItem={({ item }) => <Image source={{ uri: item.uri }} style={styles.image} />}
            width={width}
            onProgressChange={progress}
            loop={true}
          />
          <Pagination.Basic
            progress={progress}
            data={images}
            dotStyle={{
              borderRadius: 16,
              backgroundColor: COLORS.smallGray,
            }}
            activeDotStyle={{
              borderRadius: 16,
              overflow: "hidden",
              backgroundColor: COLORS.black,
            }}
            containerStyle={styles.paginationContainer}
          />
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.titleContainer}>
            <AppText style={styles.title}>{item.title}</AppText>
            <TouchableOpacity onPress={handleBookmarkPress}>
              {saved ? (
                <MaterialCommunityIcons name="bookmark" color={COLORS.primary} size={36} />
              ) : (
                <MaterialCommunityIcons name="bookmark-outline" color={COLORS.black} size={36} />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.detailsContainer}>
            <AppText style={styles.price}>${item.price}</AppText>
            <AppText style={styles.detail}>{item.category}</AppText>
            <AppText style={styles.detail}>{item.condition}</AppText>
          </View>
          <AppText style={styles.description}>{item.description}</AppText>
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
      <View style={styles.contactContainer}>
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
  backContainer: {
    margin: 16,
  },
  carouselContainer: {
    position: "relative",
    height: 250,
  },
  image: {
    height: 250,
    width: "100%",
  },
  paginationContainer: {
    position: "absolute",
    bottom: 16,
    left: "50%",
    transform: [{ translateX: "-50%" }],
    gap: 4,
  },
  bodyContainer: {
    padding: 16,
    marginBottom: 96,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontFamily: WEIGHTS.semiBold,
    fontSize: SIZES.subheader,
  },
  detailsContainer: {
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
  contactContainer: {
    position: "absolute",
    bottom: 32,
    paddingHorizontal: 32,
    width: "100%",
  },
});

export default ItemScreen;
