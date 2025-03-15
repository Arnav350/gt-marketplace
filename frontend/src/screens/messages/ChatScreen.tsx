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
import { TMessagesStackParamsList } from "../../constants/types";

type TProps = StackScreenProps<TMessagesStackParamsList, "Chat">;
type MessageType = {
  id: string;
  text?: string;
  image?: string;
  file?: { name: string; type: string; size: string };
  isUser: boolean;
  timestamp: string;
};

const ChatScreen = ({ navigation }: TProps) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<MessageType[]>([
    { id: "1", text: "Hi there! How can I help you?", isUser: false, timestamp: "10:30 AM" },
    { id: "2", text: "I'm interested in your calculator", isUser: true, timestamp: "10:32 AM" },
    { id: "3", text: "Is it still available?", isUser: true, timestamp: "10:32 AM" },
    { id: "4", text: "Yes, it's still available! When would you like to meet?", isUser: false, timestamp: "10:35 AM" },
    { id: "5", image: "https://picsum.photos/200", isUser: true, timestamp: "10:36 AM" },
    { id: "6", file: { name: "assignment.pdf", type: "PDF", size: "2.3 MB" }, isUser: false, timestamp: "10:40 AM" },
  ]);

  const flatListRef = useRef<FlatList>(null);

  const handleSend = () => {
    if (message.trim() === "") return;

    const newMessage: MessageType = {
      id: Date.now().toString(),
      text: message,
      isUser: true,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages([...messages, newMessage]);
    setMessage("");

    // Scroll to bottom
    setTimeout(() => {
      flatListRef.current?.scrollToEnd({ animated: true });
    }, 200);
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const renderMessage = ({ item }: { item: MessageType }) => {
    return (
      <View style={[styles.messageContainer, item.isUser ? styles.userMessageContainer : styles.otherMessageContainer]}>
        {item.text && (
          <View style={[styles.messageBubble, item.isUser ? styles.userBubble : styles.otherBubble]}>
            <AppText style={item.isUser ? styles.userMessageText : styles.otherMessageText}>{item.text}</AppText>
          </View>
        )}

        {item.image && (
          <View style={[styles.messageBubble, item.isUser ? styles.userBubble : styles.otherBubble]}>
            <Image source={{ uri: item.image }} style={styles.messageImage} />
          </View>
        )}

        {item.file && (
          <View style={[styles.messageBubble, styles.fileBubble, item.isUser ? styles.userBubble : styles.otherBubble]}>
            <MaterialCommunityIcons
              name="file-document-outline"
              size={24}
              color={item.isUser ? COLORS.white : COLORS.black}
            />
            <View style={styles.fileInfo}>
              <AppText style={[styles.fileName, item.isUser && styles.userMessageText]}>{item.file.name}</AppText>
              <AppText style={[styles.fileType, item.isUser && styles.userMessageText]}>
                {item.file.type} · {item.file.size}
              </AppText>
            </View>
          </View>
        )}

        <AppText style={styles.timestamp}>{item.timestamp}</AppText>
      </View>
    );
  };

  return (
    <SafeAreaView edges={["top", "right", "left"]} style={styles.container}>
      {/* Header */}
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
        renderItem={renderMessage}
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
  messageContainer: {
    marginVertical: 6,
    maxWidth: "80%",
  },
  userMessageContainer: {
    alignSelf: "flex-end",
  },
  otherMessageContainer: {
    alignSelf: "flex-start",
  },
  messageBubble: {
    borderRadius: 16,
    padding: 12,
    maxWidth: "100%",
  },
  userBubble: {
    backgroundColor: COLORS.primary,
    borderBottomRightRadius: 4,
  },
  otherBubble: {
    backgroundColor: COLORS.smallGray,
    borderBottomLeftRadius: 4,
  },
  userMessageText: {
    color: COLORS.white,
  },
  otherMessageText: {
    color: COLORS.black,
  },
  messageImage: {
    width: 200,
    height: 150,
    borderRadius: 8,
  },
  fileBubble: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  fileInfo: {
    marginLeft: 8,
  },
  fileName: {
    fontFamily: WEIGHTS.medium,
    fontSize: SIZES.small,
  },
  fileType: {
    fontSize: SIZES.tiny,
    color: COLORS.textGray,
  },
  timestamp: {
    fontSize: 10,
    color: COLORS.textGray,
    marginTop: 4,
    alignSelf: "flex-end",
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
