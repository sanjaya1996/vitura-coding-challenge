import { configureStore } from "@reduxjs/toolkit";
import prescriptionReducer from "./slices/prescriptionSlice";

export const store = configureStore({
  reducer: {
    prescriptions: prescriptionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
