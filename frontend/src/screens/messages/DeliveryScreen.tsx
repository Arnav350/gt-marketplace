import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../../components/common/AppText";
import Input from "../../components/common/Input";
import Checkbox from "../../components/common/Checkbox";
import PrimaryButton from "../../components/common/PrimaryButton";
import DeliveryDate from "../../components/messages/DeliveryDate";
import { TMessagesStackParamsList } from "../../constants/types";
import { COLORS, SIZES, WEIGHTS } from "../../constants/theme";
import Subtotal from "../../components/messages/Subtotal";

type TProps = StackScreenProps<TMessagesStackParamsList, "Messages">;

const DeliveryScreen = ({ navigation }: TProps) => {
  const item = 28;
  const delivery = 10;
  const discount = -4;
  const tax = 6000;

  const [address, setAddress] = useState<string>("");
  const [addressExtra, setAddressExtra] = useState<string>("");
  const [saveAddress, setSaveAddress] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<string>("2-4 days");

  function handleBackPress() {
    navigation.goBack();
  }

  function handleConfirmPress() {}

  return (
    <SafeAreaView edges={["top", "right", "left"]} style={styles.container}>
      <View>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={handleBackPress}>
            <MaterialCommunityIcons name="chevron-left" color={COLORS.black} size={32} />
          </TouchableOpacity>
          <AppText style={styles.header}>Delivery</AppText>
          <View style={styles.spacer}></View>
        </View>
        <View style={styles.inputContainer}>
          <Input placeholder="street address" text={address} setText={setAddress} />
        </View>
        <View style={styles.inputContainer}>
          <Input placeholder="po box, room number, etc." text={addressExtra} setText={setAddressExtra} />
        </View>
        <View style={styles.saveContainer}>
          <AppText>save address</AppText>
          <Checkbox checked={saveAddress} setChecked={setSaveAddress} />
        </View>
        <AppText style={styles.subheader}>Delivery Dates</AppText>
        <View style={styles.datesContainer}>
          <DeliveryDate text="same day" selected={selectedDate} setSelected={setSelectedDate} />
          <DeliveryDate text="2-4 days" selected={selectedDate} setSelected={setSelectedDate} />
          <DeliveryDate text="4+ days" selected={selectedDate} setSelected={setSelectedDate} />
        </View>
      </View>
      <View>
        <AppText style={styles.subheader}>Total Summary</AppText>
        <Subtotal text="item" price={item} />
        <Subtotal text="delivery" price={delivery} />
        <Subtotal text="discount" price={discount} />
        <Subtotal text="tax" price={tax} />
        <View style={styles.totalContainer}>
          <AppText>total</AppText>
          <AppText style={styles.price}>${item + delivery + discount + tax}</AppText>
        </View>
        <PrimaryButton text="confirm" handlePress={handleConfirmPress} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: COLORS.white,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
  },
  header: {
    fontFamily: WEIGHTS.semiBold,
    fontSize: SIZES.header,
  },
  spacer: {
    height: 32,
    width: 32,
  },
  inputContainer: {
    marginTop: 16,
  },
  saveContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 8,
    marginTop: 16,
  },
  subheader: {
    fontFamily: WEIGHTS.semiBold,
    fontSize: SIZES.subheader,
    marginTop: 24,
    marginBottom: 16,
  },
  datesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 32,
  },
  price: {
    color: COLORS.primary,
    fontFamily: WEIGHTS.medium,
    fontSize: SIZES.large,
  },
});

export default DeliveryScreen;
