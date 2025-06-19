// src/components/Screen.tsx
import colors from "@/src/styles/colors";
import constants from "@/src/styles/constants";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
  ViewProps,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ScreenProps = {
  children: React.ReactNode;
  scroll?: boolean;
  style?: ViewProps["style"];
  contentContainerStyle?: ViewProps["style"];
};

export default function Screen({
  children,
  scroll = false,
  style,
  contentContainerStyle,
}: ScreenProps) {
  const Container = scroll ? ScrollView : View;

  return (
    <SafeAreaView style={[styles.safeArea, style]} edges={["left", "right"]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.flex}
        keyboardVerticalOffset={80}
      >
        <Container
          style={[styles.flex, !scroll && styles.scrollPadding, style]}
          contentContainerStyle={[
            scroll && styles.scrollPadding,
            contentContainerStyle,
          ]}
        >
          {children}
        </Container>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: constants.space.lg,
  },
  flex: {
    flex: 1,
  },
  scrollPadding: {
    paddingHorizontal: constants.space.xMd,
    paddingBottom: constants.space.lg,
  },
});
