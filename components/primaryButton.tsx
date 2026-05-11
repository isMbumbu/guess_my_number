import React from "react";
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";
import { colors } from "../themes/colors";

type PrimaryButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  style?: ViewStyle;
};

export default function PrimaryButton({
  title,
  onPress,
  disabled = false,
  style,
}: PrimaryButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.button, disabled && styles.disabled, style]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
  },

  disabled: {
    backgroundColor: colors.secondary,
    opacity: 0.6,
  },

  text: {
    color: colors.text, // soft warm white
    fontWeight: "600",
    fontSize: 16,
  },
});
