import typographyStyles from "@/styles/typography";
import React from "react";
import { Text as RNText, StyleSheet, TextProps } from "react-native";

const getTypographyStyle = (type?: keyof typeof typographyStyles) => {
  if (!type || !typographyStyles[type]) {
    return undefined;
  }
  return typographyStyles[type];
};

const Text: React.FC<TextProps & { type?: keyof typeof typographyStyles }> = ({
  type,
  style,
  ...props
}) => {
  const typographyStyle = getTypographyStyle(type);
  return <RNText {...props} style={[styles.text, typographyStyle, style]} />;
};

const styles = StyleSheet.create({
  text: { ...typographyStyles.smallBody },
});

export default Text;
