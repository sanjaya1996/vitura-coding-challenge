import RootStack from "@/navigation/RootStack";
import { store } from "@/store";
import { Provider } from "react-redux";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <RootStack />
    </Provider>
  );
}
