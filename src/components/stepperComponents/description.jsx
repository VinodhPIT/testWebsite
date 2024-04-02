// components/Reference.js
import React, { useState } from "react";
import { useRequestForm } from "@/store/requestManagement/requestForm"; // Import Zustand store hook

const Description = () => {
  const { message, setDescription, nextPage } = useRequestForm(); // Zustand store and setter

  const handleSubmit = (event) => {
    event.preventDefault();

    nextPage();
  };

  return (
    <div>
      <h2>Description</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Enter your  message..."
          rows={4} // Set the number of rows for the textarea
          cols={50} // Set the number of columns for the textarea
        />
        <br />
        {message && <button type="submit">Save</button>}
      </form>
    </div>
  );
};

export default Description;
