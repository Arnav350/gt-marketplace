import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackScreenProps } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { THomeStackParamsList } from "../../constants/types";
import { COLORS } from "../../constants/theme";
import AppText from "../../components/common/AppText";
import Item from "../../components/home/Item";
import PrimaryButton from "../../components/common/PrimaryButton";

type TProps = StackScreenProps<THomeStackParamsList, "Item">;

const ItemScreen = ({ navigation, route }: TProps) => {
  const [saved, setSaved] = useState<boolean>(false);

  function handleBackPress() {
    navigation.goBack();
  }

  return (
    <SafeAreaView edges={["top", "right", "left"]}>
      <TouchableOpacity onPress={handleBackPress}>
        <MaterialCommunityIcons name="chevron-left" color={COLORS.black} size={40} />
      </TouchableOpacity>
      <View>
        <Image source={{ uri: "https://picsum.photos/203" }} />
        <Image source={{ uri: "https://picsum.photos/203" }} />
        <Image source={{ uri: "https://picsum.photos/203" }} />
      </View>
      <View>
        <AppText>{route.params.title}</AppText>
        <TouchableOpacity>
          {saved ? (
            <MaterialCommunityIcons name="bookmark" color={COLORS.primary} size={36} />
          ) : (
            <MaterialCommunityIcons name="bookmark-outline" color={COLORS.black} size={36} />
          )}
        </TouchableOpacity>
      </View>
      <View>
        <AppText>${route.params.price}</AppText>
        <AppText>{route.params.category}</AppText>
        <AppText>{route.params.condition}</AppText>
      </View>
      <AppText>{route.params.description}</AppText>
      <AppText>About the Seller</AppText>
      <View>
        <Image source={{ uri: "https://picsum.photos/204" }} />
        <View>
          <AppText>{route.params.seller_id}</AppText>
          <AppText>{route.params.seller_id}</AppText>
        </View>
      </View>
      <AppText>Similar Items</AppText>
      <ScrollView horizontal>
        <Item title="title" price={1} />
        <Item title="title" price={1} />
        <Item title="title" price={1} />
      </ScrollView>
      <PrimaryButton text="Contact Seller" handlePress={() => {}} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default ItemScreen;
