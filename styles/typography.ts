import { StyleSheet } from "react-native";
import colors from "./colors";

const typographyStyles = StyleSheet.create({
  h1: {
    fontWeight: "bold",
    fontSize: 32,
    lineHeight: 32,
    color: colors.secondaryText,
  },
  h2: {
    fontWeight: "400",
    fontSize: 24,
    lineHeight: 28.8,
    letterSpacing: -1.1,
    color: colors.secondaryText,
  },
  h3: {
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 28.8,
    color: colors.secondaryText,
  },
  largeBody: {
    fontWeight: "800",
    fontSize: 20,
    lineHeight: 24.3,
    color: colors.secondaryText,
  },
  mediumBody: {
    fontWeight: "400",
    fontSize: 18,
    lineHeight: 21.8,
    color: colors.secondaryText,
  },
  mediumBodyBold: {
    fontWeight: "700",
    fontSize: 18,
    lineHeight: 19.6,
    color: colors.secondaryText,
  },
  smallBody: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 18.9,
    color: colors.secondaryText,
  },
  smallBodyBold: {
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 19.9,
    color: colors.secondaryText,
  },
  label: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 16,
    color: colors.secondaryText,
  },
});

export default typographyStyles;
