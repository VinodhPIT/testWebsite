import React  from "react";
import Image from "next/image";

import { v4 as uuidv4 } from "uuid";
import useTranslation from "next-translate/useTranslation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRequestForm } from "@/store/requestManagement/requestForm"; // Import Zustand store hook


export default function Reference() {
  const { t } = useTranslation();
  const { images, addImage, deleteImage, nextPage  } = useRequestForm();


const handleFileUpload = (event, index) => {
  const file = event.target.files[0];
  if (file && file.type.startsWith('image/')) {
    const imageUrl = URL.createObjectURL(file);
    const uuid = uuidv4();
    addImage(file, imageUrl, uuid ,index);
  } else {
    toast.error(t("common:select an image file"), {
      position: toast.POSITION.TOP_CENTER
    });
  }
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
                                  <button onClick={() => deleteImage(images[index].uuid)} className="request_upload_close">
                              <Image
                                src="/Trash_Bin.svg"
                                width={18}
                                height={18}
                                alt="Trash"
                              />
                            </button>
                            <Image
                              src={images[index].imageUrl}
                              alt={`Uploaded ${index}`}
                              width={180}
                              height= {180}
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
                    <button onClick={() => nextPage()} className="btn_secondary btn_cutom_40 mt_15 pull_right align_self_end bdr_rad_4">{t("common:next")}</button>
                  )}

                  <div className="btn_group rqst_btn_bottom">
                    <button className="btn_outline_base">Back</button>
                    <button className="btn_defult_base">Next</button>
                  </div>













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
