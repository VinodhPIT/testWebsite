
import React, { useEffect } from "react";

import useTranslation from "next-translate/useTranslation";
import { useRequestForm } from "@/store/requestManagement/requestForm"; // Import Zustand store hook

import { CustomerRequestSize } from "@/utils/customerRequestType";

const TattooSize = () => {
  const { fetchArtistList, setTattooSize, tattoondex } = useRequestForm();
  const { t } = useTranslation();
  
  useEffect(() => {
    fetchArtistList();
  }, []);

  return (
    <>
      <div className="full_col_block h_126_vh m_h_118_vh">
        <div className="container">
          <div className="row">
            <div className="col-md-12 align_content">
              <section className="request_landing_content">
                <div className="request_landing_content_col">
                  <h2>{t("common:stepper.title1")}</h2>
                  <div className="request_list_item">
                    {Object.keys(CustomerRequestSize).map((size, index) => (
                      <button
                        key={size}
                        onClick={() =>
                          setTattooSize(
                            size === "nil"
                              ? t("common:stepper.dontKnowYet")
                              : CustomerRequestSize[size],
                            index
                          )
                        }
                        className={
                          tattoondex === index
                            ? "requestActive"
                            : "inActiveRequest"
                        }
                      >
                        {size === "nil"
                          ? t("common:stepper.dontKnowYet")
                          : CustomerRequestSize[size]}
                      </button>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TattooSize;
