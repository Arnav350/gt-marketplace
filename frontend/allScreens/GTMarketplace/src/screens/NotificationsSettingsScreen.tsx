import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NotificationsSettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Notifications Settings Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NotificationsSettingsScreen;
