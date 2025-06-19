import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  fetchPrescriptionDetails,
  fetchPrescriptions,
} from "../thunks/prescriptionThunks";

export type Prescription = {
  id: string;
  patient: string;
  medication: string;
  prescriber: string;
  datePrescribed: string;
  status: "active" | "inactive" | "expired";
  pharmacy: string;
};

interface State {
  prescriptions: Prescription[];
  prescriptionDetails: Record<string, Prescription>;
  loadingList: boolean;
  loadingDetails: boolean;
  errorList: string | null;
  errorDetails: string | null;
}

const initialState: State = {
  prescriptions: [],
  prescriptionDetails: {},
  loadingList: false,
  loadingDetails: false,
  errorList: null,
  errorDetails: null,
};

const prescriptionsSlice = createSlice({
  name: "prescriptions",
  initialState,
  reducers: {
    clearPrescriptions(state) {
      state.prescriptions = [];
      state.errorList = null;
      state.loadingList = false;
    },
    clearPrescriptionDetails(state) {
      state.prescriptionDetails = {};
      state.errorDetails = null;
      state.loadingDetails = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPrescriptions.pending, (state) => {
        state.loadingList = true;
        state.errorList = null;
      })
      .addCase(
        fetchPrescriptions.fulfilled,
        (state, action: PayloadAction<Prescription[]>) => {
          state.prescriptions = action.payload;
          state.loadingList = false;
        }
      )
      .addCase(fetchPrescriptions.rejected, (state, action) => {
        state.loadingList = false;
        state.errorList = action.error.message || "Something went wrong";
      });
    // Details fetch
    builder
      .addCase(fetchPrescriptionDetails.pending, (state) => {
        state.loadingDetails = true;
        state.errorDetails = null;
      })
      .addCase(
        fetchPrescriptionDetails.fulfilled,
        (state, action: PayloadAction<Prescription>) => {
          state.loadingDetails = false;
          const prescription = action.payload;
          state.prescriptionDetails[prescription.id] = prescription;
        }
      )
      .addCase(fetchPrescriptionDetails.rejected, (state, action) => {
        state.loadingDetails = false;
        state.errorDetails =
          action.error.message || "Failed to load prescription details";
      });
  },
});

export const { clearPrescriptions } = prescriptionsSlice.actions;
export default prescriptionsSlice.reducer;
