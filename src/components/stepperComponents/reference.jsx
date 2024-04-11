import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";

import useTranslation from "next-translate/useTranslation";
import { useRequestForm } from "@/store/requestManagement/requestForm"; // Import Zustand store hook
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
export default function Reference() {
  const { t } = useTranslation();
  const { images, addImage, deleteImage, nextPage  } = useRequestForm();



//   const handleFileUpload = (event, index) => {
//     const file = event.target.files[0];
//     // Check if the selected file is an image
//     if (file && file.type.startsWith('image/')) {
//         const reader = new FileReader();
//         reader.onloadend = () => {
//             const newImage = {
//                 id: uuidv4(),
//                 url: reader.result,
//             };
//             addImage(newImage, index);
//         };

//         reader.readAsDataURL(file);
//     } else {
//         toast.error('Please select an image file.', {
//           position: toast.POSITION.TOP_CENTER
          
//       });
//     }
// };

const handleFileUpload = (event, index) => {
 
  const file = event.target.files[0];

  console.log(file ,"d';,c;'sd,cs'")


  if (file && file.type.startsWith('image/')) {
      // Create object URL for the file
      const imageUrl = URL.createObjectURL(file);

      // Display the selected image in the UI
      const newImage = {
          id: uuidv4(),
          url: imageUrl,
          file: file // Optionally, you can store the file object if needed
      };
      addImage(newImage, index);
  } else {
      toast.error(t("common:select an image file"), {
        position: toast.POSITION.TOP_CENTER
    });
  }






  
    // console.log(file);
  
    // const formData = new FormData();
    // formData.append('body_part', 'head');
    // formData.append('artist_uids', 'f7f533e6-2fe9-477a-9eac-b0367e0f6843');
    // formData.append('size', '10 cm');
    // formData.append('comments', 'hi');
    // formData.append('customer_email', 'vio@gmail.com');
    // formData.append('customer_phone_no', '');
    // formData.append('secondary_images', file);
  
  
    // axios.post('https://admin.inckd.com/web/api/customer-request/save', formData, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data'
    //   }
    // })
    // .then(response => {
    //   console.log(response.data, "response");
    //   // Handle API response
    // })
    // .catch(error => {
    //   console.error(error);
    //   // Handle error
    // });
  
  

};


  return (
    <>
      <div className="full_col_block h_126_vh m_h_118_vh">
        <div className="container">
          <div className="row">
            <div className="col-md-12 align_content">
              <section className="request_landing_content">
                <div className="request_landing_content_col align_self_stretch">
                  <h2>{t("common:stepper.title4")}</h2>
                  <div className="request_file_uploader">
                    {[0, 1, 2].map((index) => (
                      <div key={index} className="request_file_up_list">
                        {images[index] ? (
                          <div className="request_upload_img">
                            <button onClick={() => deleteImage(index)} className="request_upload_close">
                              <Image
                                src="/Trash_Bin.svg"
                                width={18}
                                height={18}
                                alt="Trash"
                              />
                            </button>
                            <img
                              src={images[index].url}
                              alt={`Uploaded ${index}`}
                              style={{ maxWidth: "180px", maxHeight: "180px" }}
                            />
                          </div>
                        ) : (
                          <div className="request_upload_field">
                            <input
                              type="file"
                              onChange={(event) => handleFileUpload(event, index)}
                              accept="image/*"
                             
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {images.length > 0 && (
                    <button onClick={() => nextPage()} className="btn_secondary btn_cutom_40 mt_15 pull_right align_self_end">{t("common:next")}</button>
                  )}













                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
}
