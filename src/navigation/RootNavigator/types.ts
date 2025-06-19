import { NativeStackScreenProps } from "@react-navigation/native-stack";
export type RootStackParamList = {
  Home: undefined;
  Prescriptions: undefined;
  PrescriptionDetails: { prescriptionId: string };
};

export type IRootStackNavigator = {
  [K in keyof RootStackParamList]: {
    screen: K;
    params?: RootStackParamList[K];
  };
}[keyof RootStackParamList];

export type RootStackScreenProps<RouteName extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, RouteName>;

export type RootStackNavigationProps<
  RouteName extends keyof RootStackParamList
> = RootStackScreenProps<RouteName>["navigation"];

export type RootStackRouteProps<RouteName extends keyof RootStackParamList> =
  RootStackScreenProps<RouteName>["route"];
