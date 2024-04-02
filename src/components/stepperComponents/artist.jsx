// components/Reference.js
import React from "react";
import { useRequestForm } from "@/store/requestManagement/requestForm"; // Import Zustand store hook

const Artist = () => {
  const { nextPage, prevPage } = useRequestForm(); // Zustand store and setter

  return (
    <div>
      <h2>Artist</h2>
      {/* Add your content related to the reference here */}

      <button onClick={() => nextPage()}>Next page</button>

      <button onClick={() => prevPage()}>prevv page</button>
    </div>
  );
};

export default Artist;
