import { useLocalSearchParams } from "expo-router";

export default function PrescriptionDetail() {
  const { id } = useLocalSearchParams();

  return (
    <div>
      <h1>Prescription Detail</h1>
      <p>Prescription ID: {id}</p>
    </div>
  );
}
