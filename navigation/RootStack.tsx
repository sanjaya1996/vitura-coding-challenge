import colors from "@/styles/colors";
import { Stack } from "expo-router";

export default function RootStack() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Welcome",
          headerStyle: { backgroundColor: colors.primaryOrange },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
      <Stack.Screen
        name="prescriptions/index"
        options={{
          title: "Prescriptions",
          headerStyle: { backgroundColor: colors.primaryOrange },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
      <Stack.Screen
        name="prescriptions/[id]"
        options={({ route }) => ({
          title: "Prescription",
          headerStyle: { backgroundColor: colors.primaryOrange },
          headerTintColor: colors.white,
          headerTitleStyle: { fontWeight: "bold" },
        })}
      />
    </Stack>
  );
}
