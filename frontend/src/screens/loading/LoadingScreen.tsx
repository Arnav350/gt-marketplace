import React, { useContext } from "react";
import { View, ActivityIndicator, StyleSheet, Pressable } from "react-native";

import { AuthContext } from "../../hooks/useAuth";

const LoadingScreen = () => {
  const { setCurrentUser } = useContext(AuthContext);

  return (
    // Temporary
    <Pressable style={styles.container} onPress={() => setCurrentUser(null)}>
      <ActivityIndicator size="large" color="#0000ff" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoadingScreen;
