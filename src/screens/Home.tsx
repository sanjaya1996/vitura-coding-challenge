import ButtonPrimary from "@/src/components/common/ButtonPrimary";
import Text from "@/src/components/common/Text";
import colors from "@/src/styles/colors";
import constants from "@/src/styles/constants";
import { StyleSheet } from "react-native";
import Screen from "../components/common/Screen";
import { RootStackScreenProps } from "../navigation/RootNavigator/types";

type Props = RootStackScreenProps<"Home">;

const Home: React.FC<Props> = ({ navigation }) => {
  return (
    <Screen style={styles.container}>
      <Text type="h1" style={styles.title}>
        Welcome to Vitura
      </Text>
      <Text type="smallBody" style={styles.subtitle}>
        Manage your prescriptions with ease
      </Text>

      <ButtonPrimary
        label="View Prescriptions"
        onPress={() => navigation.navigate("Prescriptions")}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
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

export default Home;
