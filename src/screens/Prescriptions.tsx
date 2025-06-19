import RadioButtonGroup from "@/src/components/common/RadioButonGroup";
import SearchBar from "@/src/components/common/SearchBar";
import PrescriptionListItem from "@/src/components/PrescriptionListItem";
import SortAndClearControls from "@/src/components/prescriptions/SortAndClearControls";
import { useAppDispatch, useAppSelector } from "@/src/store/hooks";
import { fetchPrescriptions } from "@/src/store/thunks/prescriptionThunks";
import colors from "@/src/styles/colors";
import constants from "@/src/styles/constants";
import array from "@/src/utils/array";
import React, { useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Screen from "../components/common/Screen";
import { RootStackScreenProps } from "../navigation/RootNavigator/types";

type Props = RootStackScreenProps<"Prescriptions">;

const Prescriptions: React.FC<Props> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const { prescriptions, loadingList, errorList } = useAppSelector(
    (state) => state.prescriptions
  );

  const [filter, setFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest" | null>(null);

  const filteredPrescriptions = useMemo(() => {
    let base =
      filter === "all"
        ? prescriptions
        : prescriptions.filter((p) => p.status === filter);

    if (searchQuery.trim()) {
      base = array.searchList(base, searchQuery, ["medication", "patient"]);
    }

    if (!sortOrder) {
      return base;
    }
    return array.sortByDate([...base], "datePrescribed", sortOrder);
  }, [prescriptions, filter, searchQuery, sortOrder]);

  useEffect(() => {
    dispatch(fetchPrescriptions());
  }, [dispatch]);

  const clearFilters = () => {
    setFilter("all");
    setSearchQuery("");
    setSortOrder(null);
  };

  if (loadingList) {
    return (
      <ActivityIndicator
        size="large"
        color={colors.primaryOrange}
        style={styles.container}
      />
    );
  }

  return (
    <Screen scroll={false}>
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
      <SearchBar
        value={searchQuery}
        placeholder="Search medication or patient"
        debounceDelay={300}
        onSearch={(searchQuery) => setSearchQuery(searchQuery)}
      />
      <SortAndClearControls
        sortOrder={sortOrder}
        onChangeSort={(order) => setSortOrder(order)}
        onClear={clearFilters}
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
    </Screen>
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
