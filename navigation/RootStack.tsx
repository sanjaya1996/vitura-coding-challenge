import { Stack } from "expo-router";

export default function RootStack() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Welcome",
          headerStyle: { backgroundColor: "rgb(239, 90, 33)" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
      <Stack.Screen
        name="prescriptions/index"
        options={{
          title: "Prescriptions",
          headerStyle: { backgroundColor: "rgb(239, 90, 33)" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
      <Stack.Screen
        name="prescriptions/[id]"
        options={({ route }) => ({
          title: "Prescription",
          headerStyle: { backgroundColor: "rgb(239, 90, 33)" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        })}
      />
    </Stack>
  );
}
