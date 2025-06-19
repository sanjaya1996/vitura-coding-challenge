import { Prescription } from "@/src/store/slices/prescriptionSlice";
import React, { useCallback } from "react";
import { Pressable, StyleSheet } from "react-native";

import constants from "@/src/styles/constants";
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigationProps } from "../navigation/RootNavigator/types";
import Text from "./common/Text";

type Props = {
  item: Prescription;
};

const PrescriptionListItem: React.FC<Props> = React.memo(({ item }) => {
  const navigation = useNavigation<RootStackNavigationProps<"Prescriptions">>();

  const { medication, patient, status, id } = item;

  const handlePress = useCallback(() => {
    navigation.navigate("PrescriptionDetails", {
      prescriptionId: id,
    });
  }, [navigation, id]);

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <Text type="smallBodyBold">{patient}</Text>
      <Text type="smallBody">{medication}</Text>
      <Text type="label">{`Status: ${status.toUpperCase()}`}</Text>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    flexDirection: "column",
    gap: constants.space.xs,
  },
});

PrescriptionListItem.displayName = "PrescriptionListItem";

export default PrescriptionListItem;
