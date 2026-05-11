import { router } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../themes/colors";

const Home = () => {
  function handlePress() {
    router.push("/startGame");
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.heading}>
        <Text style={styles.title}>GUESS MY NUMBER</Text>
        <Text style={styles.subtitle}>Try to beat the game</Text>
      </View>

      {/* Game Button */}
      <Pressable
        onPress={handlePress}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
      >
        {({ pressed }) => (
          <Text style={styles.buttonText}>
            {pressed ? "Starting..." : "Start Guessing"}
          </Text>
        )}
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  heading: {
    marginBottom: 40,
    alignItems: "center",
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    color: colors.text,
    letterSpacing: 2,
  },

  subtitle: {
    marginTop: 8,
    fontSize: 14,
    color: colors.supplementary,
  },

  button: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.97 }],
  },

  buttonText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "600",
  },
});
