import colors from "@/src/styles/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RootStackScreens from "./RootStackScreens";
import { RootStackParamList } from "./types";

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: true,
        animation: "fade",
        headerTintColor: colors.white,
        headerStyle: { backgroundColor: colors.primaryOrange },
      }}
    >
      {Object.entries(RootStackScreens).map(([name, { component, title }]) => (
        <RootStack.Screen
          key={name}
          name={name as keyof RootStackParamList}
          component={component}
          options={{ title }}
        />
      ))}
    </RootStack.Navigator>
  );
}
