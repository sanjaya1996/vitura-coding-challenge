import ButtonPrimary from "@/components/common/ButtonPrimary";
import Text from "@/components/common/Text";
import colors from "@/styles/colors";
import constants from "@/styles/constants";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text type="h1" style={styles.title}>
        Welcome to Vitura
      </Text>
      <Text type="smallBody" style={styles.subtitle}>
        Manage your prescriptions with ease
      </Text>

      <ButtonPrimary
        label="View Prescriptions"
        onPress={() => router.push("/prescriptions")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
    padding: constants.space.lg,
  },
  title: {
    color: colors.primaryOrange,
    marginBottom: 12,
    textAlign: "center",
  },
  subtitle: {
    marginBottom: constants.space.xl,
    textAlign: "center",
  },
});
