import React, { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../themes/colors";

// Define a literal type for the guess direction
type Direction = "up" | "down";

export default function StartGame() {
  // Helper to ensure the next number isn't the same as the current one
  const generateNextNumber = (current: number): number => {
    let next = Math.floor(Math.random() * 100) + 1;
    while (next === current) {
      next = Math.floor(Math.random() * 100) + 1;
    }
    return next;
  };

  // State with explicit types
  const [currentNumber, setCurrentNumber] = useState<number>(
    () => Math.floor(Math.random() * 100) + 1,
  );
  const [nextNumber, setNextNumber] = useState<number>(() =>
    generateNextNumber(currentNumber),
  );
  const [score, setScore] = useState<number>(0);
  const [message, setMessage] = useState<string>(
    "Is the next number Higher or Lower?",
  );

  const resetGame = (): void => {
    const start = Math.floor(Math.random() * 100) + 1;
    setCurrentNumber(start);
    setNextNumber(generateNextNumber(start));
    setScore(0);
    setMessage("New game started! Higher or Lower?");
  };

  const handleGuess = (direction: Direction): void => {
    const isHigher = nextNumber > currentNumber;
    const userWasCorrect =
      (direction === "up" && isHigher) || (direction === "down" && !isHigher);

    if (userWasCorrect) {
      setMessage(` Correct! It was ${nextNumber}.`);
      setScore((prev) => prev + 1);
      // Move forward: the secret number becomes the new visible number
      setCurrentNumber(nextNumber);
      setNextNumber(generateNextNumber(nextNumber));
    } else {
      setMessage(` Wrong! It was ${nextNumber}. Game Over.`);
      Alert.alert("Game Over", `Final Score: ${score}`, [
        { text: "Restart", onPress: resetGame },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Higher or Lower</Text>
      <Text style={styles.scoreText}>Score: {score}</Text>

      <View style={styles.card}>
        <Text style={styles.subtitle}>Current Number:</Text>
        <Text style={styles.number}>{currentNumber}</Text>
      </View>

      <Text style={styles.message}>{message}</Text>

      <View style={styles.controls}>
        <Pressable
          style={[styles.button, { backgroundColor: "#4CAF50" }]}
          onPress={() => handleGuess("up")}
        >
          <Text style={styles.buttonText}>Higher ▲</Text>
        </Pressable>

        <Pressable
          style={[styles.button, { backgroundColor: "#F44336" }]}
          onPress={() => handleGuess("down")}
        >
          <Text style={styles.buttonText}>Lower ▼</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background || "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: colors.text || "#333",
    marginBottom: 5,
  },
  scoreText: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.primary || "#007AFF",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "white",
    padding: 40,
    borderRadius: 20,
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: "80%",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },
  number: {
    fontSize: 80,
    fontWeight: "bold",
    color: "#222",
  },
  controls: {
    flexDirection: "row",
    gap: 20,
    marginTop: 40,
  },
  button: {
    flex: 1,
    height: 60,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    minWidth: 120,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "700",
  },
  message: {
    marginTop: 30,
    fontSize: 16,
    textAlign: "center",
    color: colors.text || "#333",
    height: 50,
  },
});
