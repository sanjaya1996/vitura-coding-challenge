import RadioButtonGroup from "@/components/common/RadioButonGroup";
import PrescriptionListItem from "@/components/PrescriptionListItem";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchPrescriptions } from "@/store/thunks/prescriptionThunks";
import colors from "@/styles/colors";
import constants from "@/styles/constants";
import React, { useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

type Props = {};

const Prescriptions: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const { prescriptions, loadingList, errorList } = useAppSelector(
    (state) => state.prescriptions
  );

  const [filter, setFilter] = useState<string>("all");

  const filteredPrescriptions = useMemo(() => {
    if (filter === "all") return prescriptions;
    return prescriptions.filter((p) => p.status === filter);
  }, [prescriptions, filter]);

  useEffect(() => {
    dispatch(fetchPrescriptions());
  }, [dispatch]);

  if (loadingList) {
    return (
      <ActivityIndicator
        size="large"
        color="#0000ff"
        style={styles.container}
      />
    );
  }

  return (
    <View style={styles.container}>
      <RadioButtonGroup
        options={[
          { label: "All", value: "all" },
          { label: "Active", value: "active" },
          { label: "Inactive", value: "inactive" },
          { label: "Expired", value: "expired" },
        ]}
        selected={filter}
        onSelect={(value) => setFilter(value)}
      />
      <FlatList
        data={filteredPrescriptions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <PrescriptionListItem item={item} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          loadingList ? (
            <ActivityIndicator
              size="large"
              color={colors.primaryOrange}
              style={styles.container}
            />
          ) : (
            <View style={styles.container}>
              <Text>{errorList || "No prescriptions found."}</Text>
            </View>
          )
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: constants.space.xMd,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default Prescriptions;
