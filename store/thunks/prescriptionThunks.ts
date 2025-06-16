import prescriptionsData from "@/data/prescriptions.json";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Prescription } from "../slices/prescriptionSlice";

const PRESCRIPTION_DATA = prescriptionsData as Prescription[];

export const fetchPrescriptions = createAsyncThunk<Prescription[]>(
  "prescriptions/fetchAll",
  async () => {
    return new Promise<Prescription[]>((resolve) => {
      setTimeout(() => {
        resolve(PRESCRIPTION_DATA);
      }, 1000); // Simulate network delay
    });
  }
);

export const fetchPrescriptionDetails = createAsyncThunk<Prescription, string>(
  "prescriptions/fetchDetails",
  async (id: string) => {
    // Simulate async loading and lookup from local JSON
    return new Promise<Prescription>((resolve, reject) => {
      setTimeout(() => {
        const detail = PRESCRIPTION_DATA.find((p) => p.id === id);
        if (detail) resolve(detail);
        else reject(new Error("Prescription not found"));
      }, 500);
    });
  }
);
