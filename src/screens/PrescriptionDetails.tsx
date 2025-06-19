import { ActivityIndicator, StyleSheet, View } from "react-native";

import Text from "@/src/components/common/Text";
import { useAppDispatch, useAppSelector } from "@/src/store/hooks";
import { fetchPrescriptionDetails } from "@/src/store/thunks/prescriptionThunks";
import colors from "@/src/styles/colors";
import constants from "@/src/styles/constants";
import { useEffect } from "react";
import Screen from "../components/common/Screen";
import { RootStackScreenProps } from "../navigation/RootNavigator/types";

type Props = RootStackScreenProps<"PrescriptionDetails">;

const PrescriptionDetails: React.FC<Props> = ({ route, navigation }) => {
  const dispatch = useAppDispatch();
  const { prescriptionId } = route.params;

  const { prescriptionDetails, loadingDetails, errorDetails } = useAppSelector(
    (state) => state.prescriptions
  );

  const prescription = prescriptionId
    ? prescriptionDetails[prescriptionId]
    : null;

  useEffect(() => {
    dispatch(fetchPrescriptionDetails(prescriptionId));
  }, [dispatch, prescriptionId]);

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
        <Text type="smallBody">
          No prescription found for ID: {prescriptionId}
        </Text>
      </View>
    );
  }

  return (
    <Screen>
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
    </Screen>
  );
};

const styles = StyleSheet.create({
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

export default PrescriptionDetails;
