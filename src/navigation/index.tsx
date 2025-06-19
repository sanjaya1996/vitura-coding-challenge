import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import RootNavigator from "./RootNavigator";

function AppContainer() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
export default AppContainer;
