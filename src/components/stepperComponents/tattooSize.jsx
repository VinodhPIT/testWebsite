// components/TattooComponent.js
import React ,{useEffect} from 'react';
import { useRequestForm } from '@/store/requestManagement/requestForm'; // Import Zustand store hook
import useTranslation from "next-translate/useTranslation";


const TattooSize = () => {
  const { setTattooSize ,tattoondex  ,fetchArtistList} = useRequestForm(); // Zustand store and setter

  const { t } = useTranslation();
 
  const tattooValues = ['1-5 cm', '5-10 cm','10-20 cm' ,'20-40 cm', "I don't Know yet"];


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
                    {tattooValues.map((value, index) => (                    
                      <button key={index} onClick={() => setTattooSize(value ,index)} className={tattoondex === index ? 'requestActive' : 'inActiveRequest'}>
                        {value}
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
