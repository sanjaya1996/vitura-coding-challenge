import { useLocalSearchParams } from "expo-router";
import { ActivityIndicator, StyleSheet, View } from "react-native";

import Text from "@/components/common/Text";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchPrescriptionDetails } from "@/store/thunks/prescriptionThunks";
import colors from "@/styles/colors";
import constants from "@/styles/constants";
import { useEffect } from "react";

export default function PrescriptionDetail() {
  const dispatch = useAppDispatch();
  const { id } = useLocalSearchParams<{ id: string }>();

  const { prescriptionDetails, loadingDetails, errorDetails } = useAppSelector(
    (state) => state.prescriptions
  );

  const prescription = id ? prescriptionDetails[id] : null;

  useEffect(() => {
    dispatch(fetchPrescriptionDetails(id));
  }, [dispatch, id]);

  if (loadingDetails) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={colors.primaryOrange} />
        <Text type="smallBody">Loading prescription...</Text>
      </View>
    );
  }

  if (errorDetails) {
    return (
      <View style={styles.centered}>
        <Text type="smallBodyBold" style={{ color: "red" }}>
          {errorDetails}
        </Text>
      </View>
    );
  }

  if (!prescription) {
    return (
      <View style={styles.centered}>
        <Text type="smallBody">No prescription found for ID: {id}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text type="h1" style={styles.title}>
        {prescription.patient}
      </Text>

      <View style={styles.detailItem}>
        <Text type="label">Medication</Text>
        <Text type="smallBody">{prescription.medication}</Text>
      </View>

      <View style={styles.detailItem}>
        <Text type="label">Prescriber</Text>
        <Text type="smallBody">{prescription.prescriber}</Text>
      </View>

      <View style={styles.detailItem}>
        <Text type="label">Date Prescribed</Text>
        <Text type="smallBody">{prescription.datePrescribed}</Text>
      </View>

      <View style={styles.detailItem}>
        <Text type="label">Pharmacy</Text>
        <Text type="smallBody">{prescription.pharmacy}</Text>
      </View>

      <View style={styles.detailItem}>
        <Text type="label">Status</Text>
        <Text
          type="smallBodyBold"
          style={{
            color:
              prescription.status === "active"
                ? "green"
                : prescription.status === "expired"
                ? "gray"
                : "orange",
          }}
        >
          {prescription.status.toUpperCase()}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: constants.space.xMd,
  },
  centered: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: constants.space.xMd,
  },
  title: {
    fontSize: constants.fonts.lg,
    marginBottom: constants.space.md,
  },
  detailItem: {
    marginBottom: 12,
  },
});
