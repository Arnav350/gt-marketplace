import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../../components/common/AppText";
import SearchBar from "../../components/common/SearchBar";
import UserCard from "../../components/messages/UserCard";
import { COLORS, SIZES, WEIGHTS } from "../../constants/theme";
import { StackScreenProps } from "@react-navigation/stack";
import { TMessagesStackParamsList } from "../../constants/types";
import PrimaryButton from "../../components/common/PrimaryButton";

type TProps = StackScreenProps<TMessagesStackParamsList, "Messages">;

const MessagesScreen = ({ navigation }: TProps) => {
  const users = [
    {
      name: "Arnav Patel",
      last: "Lorem, ipsum dolor sit amet sit amet consectetur adipisicing consectetur adipisicing elit. Ut, nesciunt accusamus, quisquam culpa vitae cumque",
      date: "Wednesday",
    },
    {
      name: "Arnav Patel",
      last: "Lorem, ipsum dolor sit amet elit. Ut, nesciunt accusamus, quisquam culpa vitae cumque adipisci minima optio veniam officia, quas provident quae deserunt? Quod nobis rerum illum asperiores numquam.",
      date: "Wednesday",
    },
    {
      name: "Arnav Patel",
      last: "Lorem, ipsum dolor consectetur adipisicing elit. Ut, nesciunt accusamus, quisquam culpa vitae cumque adipisci minima optio veniam officia, quas provident quae deserunt? Quod nobis rerum illum asperiores numquam.",
      date: "Wednesday",
    },
  ];

  const [search, setSearch] = useState<string>("");

  function handleEditPress() {}

  function handleStartPress() {}

  return (
    <SafeAreaView edges={["top", "right", "left"]} style={styles.container}>
      <View style={styles.headerContainer}>
        <AppText style={styles.header} onPress={() => navigation.navigate("Summary")}>
          Messages
        </AppText>
        <TouchableOpacity onPress={handleEditPress}>
          <MaterialCommunityIcons name="pencil-box-outline" color={COLORS.black} size={28} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={users}
        keyExtractor={(__, index) => index.toString()}
        contentContainerStyle={styles.cardsContainer}
        ListHeaderComponent={
          <View style={styles.searchContainer}>
            <SearchBar text={search} setText={setSearch} />
          </View>
        }
        ListEmptyComponent={
          users.length === 0 ? (
            <View style={styles.startContainer}>
              <PrimaryButton text="Start a Conversation" handlePress={handleStartPress} />
            </View>
          ) : (
            <View>
              <AppText style={styles.none}>
                No matches found for '<AppText style={styles.searched}>Arnav Patel</AppText>'
              </AppText>
              <AppText style={styles.subheader}>More Chats</AppText>
              <UserCard name={users[0].name} last={users[0].last} date={users[0].date} navigation={navigation} />
              <UserCard name={users[0].name} last={users[0].last} date={users[0].date} navigation={navigation} />
              <UserCard name={users[0].name} last={users[0].last} date={users[0].date} navigation={navigation} />
            </View>
          )
        }
        renderItem={({ item }) => (
          <UserCard name={item.name} last={item.last} date={item.date} navigation={navigation} />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: COLORS.white,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24,
    marginHorizontal: 16,
  },
  header: {
    fontFamily: WEIGHTS.semiBold,
    fontSize: SIZES.header,
  },
  cardsContainer: {
    marginVertical: 8,
  },
  searchContainer: {
    flexDirection: "row",
    marginHorizontal: 16,
    marginBottom: 8,
  },
  startContainer: {
    marginTop: 24,
    marginHorizontal: 16,
  },
  none: {
    marginVertical: 40,
    alignSelf: "center",
    color: COLORS.textGray,
    fontSize: SIZES.medium,
  },
  searched: {
    fontSize: SIZES.medium,
  },
  subheader: {
    marginLeft: 16,
    marginBottom: 8,
    fontFamily: WEIGHTS.semiBold,
    fontSize: SIZES.subheader,
  },
});

export default MessagesScreen;
