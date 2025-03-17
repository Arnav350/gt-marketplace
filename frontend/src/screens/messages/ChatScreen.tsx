import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  FlatList,
  Image,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StackScreenProps } from "@react-navigation/stack";

import AppText from "../../components/common/AppText";
import { COLORS, SIZES, WEIGHTS } from "../../constants/theme";
import { TMessagesStackParamsList, TMessage } from "../../constants/types";
import MessageBubble from "../../components/messages/MessageBubble";

type TProps = StackScreenProps<TMessagesStackParamsList, "Chat">;

const ChatScreen = ({ navigation, route }: TProps) => {
  const { userId } = route.params;
  const currentUser = { id: "1" };

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<TMessage[]>([
    {
      id: "1",
      sender_id: currentUser.id,
      receiver_id: userId,
      format: "Text",
      content: "Hi there! How can I help you?",
      created_at: new Date("2024-03-15T10:30:00"),
    },
    {
      id: "2",
      sender_id: userId,
      receiver_id: currentUser.id,
      format: "Text",
      content: "I'm interested in your calculator",
      created_at: new Date("2024-03-15T10:32:00"),
    },
    {
      id: "3",
      sender_id: userId,
      receiver_id: currentUser.id,
      format: "Text",
      content: "Is it still available?",
      created_at: new Date("2024-03-15T10:34:00"),
    },
    {
      id: "4",
      sender_id: currentUser.id,
      receiver_id: userId,
      format: "Text",
      content:
        "Yes, it's still available! When would you like to meet? This is going to be a long message so that I can test out how the spacing of the overall message works. I am just realizing now that I will probably need to add a word limit to each of these messages.",
      created_at: new Date("2024-03-15T10:36:00"),
    },
    {
      id: "5",
      sender_id: userId,
      receiver_id: currentUser.id,
      format: "Image",
      content: "https://picsum.photos/200",
      created_at: new Date("2024-03-15T10:38:00"),
    },
    {
      id: "6",
      sender_id: currentUser.id,
      receiver_id: userId,
      format: "File",
      content: "assignment.pdf",
      created_at: new Date("2024-03-15T10:40:00"),
    },
  ]);

  const flatListRef = useRef<FlatList>(null);

  const handleSend = () => {
    if (message.trim() === "") return;

    const newMessage: TMessage = {
      id: Date.now().toString(),
      sender_id: "current_user_id",
      receiver_id: userId,
      format: "Text",
      content: message,
      created_at: new Date(),
    };

    setMessages([...messages, newMessage]);
    setMessage("");

    setTimeout(() => {
      flatListRef.current?.scrollToEnd({ animated: true });
    }, 200);
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView edges={["top", "right", "left"]} style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <MaterialCommunityIcons name="chevron-left" color={COLORS.black} size={32} />
        </TouchableOpacity>
        <View style={styles.userInfoContainer}>
          <Image source={{ uri: "https://picsum.photos/200" }} style={styles.avatar} />
          <View>
            <AppText style={styles.username}>Arnav Patel</AppText>
            <View style={styles.statusContainer}>
              <View style={styles.onlineIndicator} />
              <AppText style={styles.onlineText}>Online</AppText>
            </View>
          </View>
        </View>
      </View>

      {/* Messages */}
      <FlatList
        ref={flatListRef}
        data={messages}
        renderItem={({ item }) => <MessageBubble message={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messagesContainer}
        showsVerticalScrollIndicator={false}
        onLayout={() => flatListRef.current?.scrollToEnd({ animated: false })}
      />

      {/* Input */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
      >
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <MaterialCommunityIcons name="attachment" color={COLORS.black} size={24} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton}>
            <MaterialCommunityIcons name="camera" color={COLORS.black} size={24} />
          </TouchableOpacity>

          <View style={styles.textInputWrapper}>
            <TextInput
              style={styles.input}
              value={message}
              onChangeText={setMessage}
              placeholder="Message..."
              placeholderTextColor={COLORS.textGray}
              multiline
            />
          </View>

          <TouchableOpacity
            style={[styles.sendButton, !message.trim() && styles.disabledSendButton]}
            onPress={handleSend}
            disabled={!message.trim()}
          >
            <MaterialCommunityIcons name="send" color={message.trim() ? COLORS.white : COLORS.textGray} size={20} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderGray,
  },
  backButton: {
    marginRight: 16,
  },
  userInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 12,
  },
  username: {
    fontFamily: WEIGHTS.semiBold,
    fontSize: SIZES.medium,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  onlineIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#4CAF50",
    marginRight: 4,
  },
  onlineText: {
    fontSize: SIZES.tiny,
    color: COLORS.textGray,
  },
  messagesContainer: {
    padding: 16,
    paddingBottom: 12,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: COLORS.borderGray,
  },
  iconButton: {
    padding: 8,
  },
  textInputWrapper: {
    flex: 1,
    marginHorizontal: 8,
    backgroundColor: COLORS.smallGray,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    maxHeight: 120,
  },
  input: {
    fontFamily: WEIGHTS.regular,
    fontSize: SIZES.small,
    color: COLORS.black,
  },
  sendButton: {
    backgroundColor: COLORS.primary,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  disabledSendButton: {
    backgroundColor: COLORS.smallGray,
  },
});

export default ChatScreen;
