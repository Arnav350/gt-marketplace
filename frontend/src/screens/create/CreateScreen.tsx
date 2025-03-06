import React, { useState } from "react";
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { COLORS, SIZES, WEIGHTS } from "../../constants/theme";
import { categories, conditions, sizes } from "../../constants/init";
import Input from "../../components/common/Input";
import AppText from "../../components/common/AppText";
import PrimaryButton from "../../components/common/PrimaryButton";
import Dropdown from "../../components/common/Dropdown";

const CreateScreen = () => {
  const [itemName, setItemName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [more, setMore] = useState<boolean>(false);

  const [description, setDescription] = useState<string>("");
  const [descriptionFocused, setDescriptionFocused] = useState<boolean>(false);
  const [category, setCategory] = useState<string>("");
  const [condition, setCondition] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [addressExtra, setAddressExtra] = useState<string>("");

  function handleShowPress() {
    setMore((prev) => !prev);
  }

  function handleCreatePress() {}

  return (
    <SafeAreaView edges={["top", "right", "left"]} style={styles.container}>
      <AppText style={styles.header}>Create a Listing</AppText>
      <ScrollView contentContainerStyle={styles.inputsContainer}>
        <Input placeholder="item name" text={itemName} setText={setItemName} />
        <Input placeholder="price" text={price} setText={setPrice} type="numeric" />
        <TouchableOpacity style={styles.imagesContainer}>
          <MaterialCommunityIcons name="plus" size={36} color={COLORS.textGray} />
        </TouchableOpacity>
        {more && (
          <View style={styles.moreContainer}>
            <View style={styles.rowContainer}>
              <Dropdown placeholder="category" options={categories} selected={category} setSelected={setCategory} />
              <Dropdown placeholder="condition" options={conditions} selected={condition} setSelected={setCondition} />
              <Dropdown placeholder="size" options={sizes} selected={size} setSelected={setSize} />
            </View>
            <TextInput
              placeholder="description"
              placeholderTextColor={COLORS.textGray}
              selectionColor={COLORS.primary}
              multiline
              value={description}
              style={[
                styles.description,
                descriptionFocused && { backgroundColor: COLORS.lightPrimary, borderColor: COLORS.primary },
              ]}
              onChangeText={setDescription}
              onFocus={() => setDescriptionFocused(true)}
              onBlur={() => setDescriptionFocused(false)}
            />
            <Input placeholder="address" text={address} setText={setAddress} />
            <Input placeholder="po box, room, etc." text={addressExtra} setText={setAddressExtra} />
          </View>
        )}
        <PrimaryButton
          text={more ? "Show less" : "Show more"}
          handlePress={handleShowPress}
          icon={more ? "chevron-up" : "chevron-down"}
        />
      </ScrollView>
      <View style={styles.createContainer}>
        <PrimaryButton text="Create Listing" handlePress={handleCreatePress} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    height: "100%",
  },
  header: {
    padding: 16,
    textAlign: "center",
    fontFamily: WEIGHTS.semiBold,
    fontSize: SIZES.header,
  },
  inputsContainer: {
    display: "flex",
    marginHorizontal: 16,
    gap: 8,
  },
  imagesContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 112,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.borderGray,
  },
  moreContainer: {
    display: "flex",
    gap: 8,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
  description: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    height: 112,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.borderGray,
  },
  createContainer: {
    marginBottom: 16,
    padding: 16,
  },
});

export default CreateScreen;
