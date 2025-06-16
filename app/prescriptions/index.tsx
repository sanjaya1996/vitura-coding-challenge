import PrescriptionListItem from "@/components/PrescriptionListItem";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchPrescriptions } from "@/store/thunks/prescriptionThunks";
import React, { useEffect } from "react";
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
    <FlatList
      data={prescriptions}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <PrescriptionListItem item={item} />}
      contentContainerStyle={{ padding: 16 }}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={
        loadingList ? (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            style={styles.container}
          />
        ) : (
          <View style={styles.container}>
            <Text>{errorList || "No prescriptions found."}</Text>
          </View>
        )
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default Prescriptions;
