import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchPrescriptions } from "@/store/thunks/prescriptionThunks";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {};

const Prescriptions: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const { prescriptions, loading, error } = useAppSelector(
    (state) => state.prescriptions
  );

  useEffect(() => {
    dispatch(fetchPrescriptions());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text>Prescriptions</Text>
    </View>
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
