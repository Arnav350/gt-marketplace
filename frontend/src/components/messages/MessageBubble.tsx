import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../common/AppText";
import { COLORS, SIZES, WEIGHTS } from "../../constants/theme";
import { TMessage } from "../../constants/types";

type Props = {
  message: TMessage;
};

const MessageBubble = ({ message }: Props) => {
  const currentUser = { id: "1" };
  const myMessage = message.sender_id === currentUser.id;

  const getFormattedTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <View style={[styles.container, myMessage ? styles.userContainer : styles.otherContainer]}>
      {message.format === "Text" && (
        <View style={[styles.messageBubble, myMessage ? styles.userBubble : styles.otherBubble]}>
          <AppText style={myMessage ? styles.userMessageText : styles.otherMessageText}>{message.content}</AppText>
        </View>
      )}

      {message.format === "Image" && (
        <View style={[styles.messageBubble, myMessage ? styles.userBubble : styles.otherBubble]}>
          <Image source={{ uri: message.content }} style={styles.messageImage} />
        </View>
      )}

      {message.format === "File" && (
        <View style={[styles.messageBubble, styles.fileBubble, myMessage ? styles.userBubble : styles.otherBubble]}>
          <MaterialCommunityIcons
            name="file-document-outline"
            size={24}
            color={myMessage ? COLORS.white : COLORS.black}
          />
          <View style={styles.fileInfo}>
            <AppText style={[styles.fileName, myMessage && styles.userMessageText]}>{message.content}</AppText>
          </View>
        </View>
      )}

      <AppText style={styles.time}>{getFormattedTime(message.created_at)}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 6,
    maxWidth: "80%",
  },
  userContainer: {
    alignSelf: "flex-end",
  },
  otherContainer: {
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
  time: {
    fontSize: 10,
    color: COLORS.textGray,
    marginTop: 4,
    alignSelf: "flex-end",
  },
});

export default MessageBubble;
