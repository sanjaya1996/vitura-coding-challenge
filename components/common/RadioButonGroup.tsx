import React from "react";
import {
  Pressable,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

import Text from "@/components/common/Text";
import constants from "@/styles/constants";

type Option = {
  label: string;
  value: string;
};

type Props = {
  options: Option[];
  selected: string;
  onSelect: (value: string) => void;
  style?: ViewStyle;
  labelStyle?: TextStyle;
};

export default function RadioButtonGroup({
  options,
  selected,
  onSelect,
  style,
  labelStyle,
}: Props) {
  return (
    <View style={[styles.container, style]}>
      {options.map((opt) => {
        const isSelected = selected === opt.value;
        return (
          <Pressable
            key={opt.value}
            style={[styles.button, isSelected && styles.selected]}
            onPress={() => onSelect(opt.value)}
          >
            <Text
              style={[
                styles.label,
                isSelected && styles.selectedLabel,
                labelStyle,
              ]}
            >
              {opt.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
    flexWrap: "wrap",
    marginBottom: constants.space.md,
  },
  button: {
    paddingVertical: constants.space.sm,
    paddingHorizontal: constants.space.md,
    borderRadius: 20,
    backgroundColor: "#eee",
  },
  selected: {
    backgroundColor: "#EF5A21",
  },
  label: {
    color: "#333",
    fontWeight: "500",
  },
  selectedLabel: {
    color: "#fff",
  },
});
