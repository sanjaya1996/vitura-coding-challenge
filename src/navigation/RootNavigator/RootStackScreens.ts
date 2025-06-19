import Home from "@/src/screens/Home";
import PrescriptionDetails from "@/src/screens/PrescriptionDetails";
import Prescriptions from "@/src/screens/Prescriptions";
import { ComponentType } from "react";
import { IRootStackNavigator, RootStackParamList } from "./types";

type ScreenEntry = {
  [K in keyof RootStackParamList]: {
    component: ComponentType<any>;
    title: string;
  };
};

const RootStackScreens: ScreenEntry = {
  Home: { component: Home, title: "Vitura Canview" },
  Prescriptions: { component: Prescriptions, title: "My Prescriptions" },
  PrescriptionDetails: {
    component: PrescriptionDetails,
    title: "Prescription Details",
  },
};

type RootStackScreensSmokeTest = {
  [K in keyof RootStackParamList]: IRootStackNavigator;
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
