import React, { useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { COLORS, SIZES, WEIGHTS } from "../../constants/theme";
import Input from "../../components/common/Input";
import AppText from "../../components/common/AppText";
import PrimaryButton from "../../components/common/PrimaryButton";
import { TextInput } from "react-native-gesture-handler";

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
              <Input placeholder="category" text={category} setText={setCategory} />
              <Input placeholder="condition" text={condition} setText={setCondition} />
              <Input placeholder="size" text={size} setText={setSize} />
            </View>
            <TextInput
              placeholder="description"
              placeholderTextColor={COLORS.textGray}
              selectionColor={COLORS.primary}
              multiline
              value={description}
              style={[
                styles.description,
                descriptionFocused && { backgroundColor: COLORS.alphaPrimary, borderColor: COLORS.primary },
              ]}
              onChangeText={setDescription}
              onFocus={() => setDescriptionFocused(true)}
              onBlur={() => setDescriptionFocused(false)}
            />
            <Input placeholder="address" text={address} setText={setAddress} />
            <Input placeholder="po box, room, etc." text={addressExtra} setText={setAddressExtra} />
          </View>
        )}
        <PrimaryButton text={more ? "Show less /\\" : "Show more \\/"} handlePress={handleShowPress} />
      </ScrollView>
      <View style={styles.createContainer}>
        <PrimaryButton text="Create Listing" handlePress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
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
  },
  description: {
    padding: 12,
    height: 112,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.borderGray,
  },
  createContainer: {
    padding: 16,
  },
});

export default CreateScreen;
