import colors from "@/src/styles/colors";
import constants from "@/src/styles/constants";
import React from "react";
import { Pressable, StyleSheet, ViewStyle } from "react-native";
import Text from "./Text";

type Props = {
  label: string;
  onPress: () => void;
  style?: ViewStyle;
};

export default function ButtonPrimary({ label, onPress, style }: Props) {
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      <Text type="smallBodyBold" style={styles.buttonText}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primaryOrange,
    paddingVertical: constants.space.md,
    paddingHorizontal: constants.space.lg,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  buttonText: {
    color: colors.white,
  },
});
