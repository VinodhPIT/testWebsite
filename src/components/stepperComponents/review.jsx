import React from "react";
import { useRequestForm } from "@/store/requestManagement/requestForm"; // Import Zustand store hook
const Review = () => {
  const { pageNo, bodyPart, tattooSize, message, email, phone, prevPage } =
    useRequestForm(); // Zustand store and setter

  return (
    <div>
      <h2>Review</h2>

      <p>page no : {pageNo}</p>
      <p>Body part :{bodyPart}</p>

      <p>Size: {tattooSize}</p>

      <p>Email{email}</p>

      <p>Phone{phone}</p>

      <p>{message}</p>

      <button onClick={() => prevPage()}>prevv page</button>
    </div>
  );
};

export default Review;
