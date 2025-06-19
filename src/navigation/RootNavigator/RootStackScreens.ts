import Home from "@/src/screens/Home";
import PrescriptionDetails from "@/src/screens/PrescriptionDetails";
import Prescriptions from "@/src/screens/Prescriptions";
import { IRootStackNavigator } from "./types";

const RootStackScreens = {
  Home,
  Prescriptions,
  PrescriptionDetails,
};

type RootStackScreensSmokeTest = {
  [K in keyof typeof RootStackScreens]: IRootStackNavigator;
};

const rootStackScreensSmokeTestData: RootStackScreensSmokeTest = {
  Home: {
    screen: "Home",
    params: undefined,
  },
  Prescriptions: {
    screen: "Prescriptions",
    params: undefined,
  },
  PrescriptionDetails: {
    screen: "PrescriptionDetails",
    params: { prescriptionId: "123" },
  },
};

export { rootStackScreensSmokeTestData };
export default RootStackScreens;
