import React from 'react';
import Modal from 'react-modal';
import {APP_LINK_APPLE,APP_LINK_GOOGLE} from '@/constants/constants'
import useTranslation from "next-translate/useTranslation";
import Image from 'next/image'
import {useResetRequestFormState} from '@/store/requestManagement/requestForm'
import { detectOS } from "@/utils/detectOS";

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(6, 6, 6, 0.78)', 
    zIndex: 1000, 
  },
  content: {
    border: 'none', 
    background: 'transparent', 
    maxWidth: '800px', 
    margin: '0 auto', 
    padding: '0px',
    top:'0',
    bottom: '0px',
    right:'0px',
    left: '0px',
    overflow: 'inherit',
    maxHeight: 'inherit',
    borderRadius: '8px'
  },
};
const TattooSearchModal1Popup = ({}) => {

  const { t } = useTranslation();


  const openApp = () => {
    const os = detectOS();
    let appLink = APP_LINK_GOOGLE; // Default to Google Play Store link
  
    if (os === 'iOS' || os === 'MacOS' || os === 'iPad' || os === 'iPod') {
      appLink = APP_LINK_APPLE; // Update to App Store link for iOS and macOS
    }
  
    window.open(appLink, '_blank');
  };
  


  return (
    <Modal
    isOpen={true}
    
    contentLabel="Example Modal"
    style={customStyles} 
    ariaHideApp={false}
    >
      <div className="popup_wrap custom_popup_design max_h_inherit">        
        <div className="popup_container align_content top_inherit m_max_100">
          <div className="popup_box_inner justify_content_center align_item_center h_auto m_h_inherit">           
            <div className="popup_coming_soon">
              <button className="close_button" onClick={useResetRequestFormState}>
                <Image  width={25} height={25} src="/popup-close.svg" alt="close"/>        
              </button>
              <div className="popup_coming_soon_content justify_content_center">
                <div className="popup_content_wrap mt_0">
                  <div class="max_w_100pc text_center d_flex flex_direction_column align_item_center">                    
                    <Image
                      src="/coming_soon.svg"
                      alt="coming soon"
                      width={95}
                      height={95}
                      priority
                    />              
                    <h1 className="color_gray_550 page_title custom_fs_34 fw_600 mt_25 mb_8">We are landing soon</h1>
                    <p className="color_gray_550 custom_fs_14 fw_300 max_w_360 mb_0">Sorry! we are not available in your country, but don’t worry we are growing so fast and we will be there soon</p>                
                    <button type="submit" class="btn_secondary h_48 btn_cutom_new_mob bdr_rad_16 mt_25">Explore inckd</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Modal>
  );
};

export default TattooSearchModal1Popup;
