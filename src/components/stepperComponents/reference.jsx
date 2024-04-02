import React from "react";
import { useRequestForm } from "@/store/requestManagement/requestForm"; // Import Zustand store hook
import StyleDropdown from '@/components/styleDropdown/styleDropdown'
import Location from '@/components/filterByLocation/location'

export default function Reference() {
  const { nextPage, prevPage } = useRequestForm(); // Zustand store and setter

  return (
    <div>
      <h5>Referrence</h5>
      <button onClick={() => nextPage()}>Next page</button>

      <button onClick={() => prevPage()}>prevv page</button>











    </div>
  );
}
