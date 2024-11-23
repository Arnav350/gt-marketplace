import React from 'react';
import { View, StyleSheet } from 'react-native';
import SignIn from '../components/SignIn';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <SignIn />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default LoginScreen;
