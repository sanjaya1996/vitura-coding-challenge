import { Prescription } from "@/store/slices/prescriptionSlice";
import React from "react";
import { Pressable, StyleSheet } from "react-native";

import constants from "@/styles/constants";
import { router } from "expo-router";
import Text from "./common/Text";

type Props = {
  item: Prescription;
};

const PrescriptionListItem: React.FC<Props> = ({ item }) => {
  const { medication, patient, status, id } = item;

  const handlePress = () => {
    router.push(`/prescriptions/${id}`);
  };
  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <Text type="smallBodyBold">{patient}</Text>
      <Text type="smallBody">{medication}</Text>
      <Text type="label">{`Status: ${status.toUpperCase()}`}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    flexDirection: "column",
    gap: constants.space.xs,
  },
});

export default PrescriptionListItem;
