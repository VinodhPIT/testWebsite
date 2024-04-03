import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";

import useTranslation from "next-translate/useTranslation";
import { useRequestForm } from "@/store/requestManagement/requestForm"; // Import Zustand store hook

export default function Reference() {
  const { t } = useTranslation();
  const { images, addImage, deleteImage, nextPage } = useRequestForm();

  const handleFileUpload = (event, index) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const newImage = {
        id: uuidv4(),
        url: reader.result,
      };

      addImage(newImage, index);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  return (
    <div>
      <h5>{t("common:stepper.title4")}</h5>

      <div>
        {[0, 1, 2].map((index) => (
          <div key={index}>
            {images[index] ? (
              <div>
                <button onClick={() => deleteImage(index)}>
                  <Image
                    src="/deleteIcon.svg"
                    width={30}
                    height={30}
                    alt="Trash"
                  />
                </button>
                <img
                  src={images[index].url}
                  alt={`Uploaded ${index}`}
                  style={{ maxWidth: "200px", maxHeight: "200px" }}
                />
              </div>
            ) : (
              <input
                type="file"
                onChange={(event) => handleFileUpload(event, index)}
                accept="image/*"
              />
            )}
          </div>
        ))}
      </div>

      {images.length > 0 && (
        <button onClick={() => nextPage()}>{t("common:next")}</button>
      )}
    </div>
  );
}
