
import React, { useEffect } from "react";

import  {useNavigation} from '@/hooks/useRouter';

import useTranslation from "next-translate/useTranslation";

import { useRequestForm } from "@/store/requestManagement/requestForm"; // Import Zustand store hook
import { useGlobalState } from "@/context/Context";

import { CustomerRequestSize} from "@/constants/index";


const TattooSize = () => {
  const {goBack} =useNavigation()
  const { fetchArtistList, setTattooSize, tattooSize ,tattoondex ,fetchArtistByStyle ,nextPage } = useRequestForm();
  const { t } = useTranslation();
  const { selectedIds } = useGlobalState();


  useEffect(() => {
    // Fetch artists based on selected IDs if any, otherwise fetch the entire artist list
    if (selectedIds !== "") {
        fetchArtistByStyle(selectedIds);
    } else {
        fetchArtistList();
    }
}, []); 




  return (
    <>
      <div className="full_col_block h_126_vh m_h_60_vh">
        <div className="container">
          <div className="row">
            <div className="col-md-12 align_content m_align_content">
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
                  <div className="request_ref_btn rqst_btn_bottom request_mob_fixed m_gap_16 m_pb_15 m_pt_10">
                    <button className="btn_outline_base m_w_50pc" onClick={goBack}>Back</button>
                    <button className="btn_defult_base m_w_50pc"  onClick={nextPage} disabled={tattooSize === ""}>Next</button>
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
