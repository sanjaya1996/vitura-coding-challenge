import constants from "@/src/styles/constants";
import { Feather } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

type Props = {
  value: string;
  onSearch: (text: string) => void;
  placeholder?: string;
  debounceDelay?: number;
};

export default function SearchBar({
  value,
  onSearch,
  placeholder,
  debounceDelay = 0,
}: Props) {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  useEffect(() => {
    if (debounceDelay > 0) {
      const timeout = setTimeout(() => {
        onSearch(inputValue);
      }, debounceDelay);
      return () => clearTimeout(timeout);
    } else {
      onSearch(inputValue);
    }
  }, [debounceDelay, inputValue]);

  return (
    <View style={styles.container}>
      <Feather name="search" size={20} color="#666" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder || "Search..."}
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
        placeholderTextColor="#999"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#F1F1F1",
    borderRadius: 8,
    paddingHorizontal: constants.space.smMd,
    paddingVertical: constants.space.sm,
    alignItems: "center",
    marginBottom: constants.space.md,
  },
  icon: {
    marginRight: constants.space.sm,
  },
  input: {
    flex: 1,
    fontSize: constants.fonts.md,
    color: "#333",
  },
});
