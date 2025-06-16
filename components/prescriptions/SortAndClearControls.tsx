import Text from "@/components/common/Text";
import colors from "@/styles/colors";
import constants from "@/styles/constants";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

interface Props {
  sortOrder: "newest" | "oldest" | null;
  onChangeSort: (order: "newest" | "oldest") => void;
  onClear: () => void;
}

export default function SortAndClearControls({
  sortOrder,
  onChangeSort,
  onClear,
}: Props) {
  return (
    <View style={styles.sortAndClear}>
      <View style={styles.sortButtons}>
        <Text type="label">Sort by:</Text>
        {["newest", "oldest"].map((order) => (
          <Pressable
            key={order}
            style={[
              styles.sortButton,
              sortOrder === order && styles.sortButtonActive,
            ]}
            onPress={() => onChangeSort(order as "newest" | "oldest")}
          >
            <Text
              style={
                sortOrder === order ? styles.sortTextActive : styles.sortText
              }
            >
              {order === "newest" ? "Newest" : "Oldest"}
            </Text>
          </Pressable>
        ))}
      </View>

      <Pressable onPress={onClear} style={styles.clearButton}>
        <Text style={styles.clearButtonText}>Clear Filters</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  sortAndClear: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: constants.space.md,
    gap: constants.space.smMd,
  },
  sortButtons: {
    flexDirection: "row",
    alignItems: "center",
    gap: constants.space.sm,
  },
  sortButton: {
    paddingVertical: 6,
    paddingHorizontal: constants.space.smMd,
    borderRadius: 6,
    backgroundColor: "#eee",
  },
  sortButtonActive: {
    backgroundColor: colors.primaryOrange,
  },
  sortText: {
    color: "#333",
    fontWeight: "500",
  },
  sortTextActive: {
    color: "#fff",
    fontWeight: "bold",
  },
  clearButton: {
    paddingHorizontal: constants.space.smMd,
    paddingVertical: 6,
    backgroundColor: "#ddd",
    borderRadius: 6,
  },
  clearButtonText: {
    color: "#333",
    fontSize: 14,
  },
});
