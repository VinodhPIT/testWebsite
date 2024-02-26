import React from 'react';
import Modal from 'react-modal';
import {APP_LINK_APPLE,APP_LINK_GOOGLE} from '@/constants/constants'
import useTranslation from "next-translate/useTranslation";
import Image from 'next/image'



import Link from 'next/link';

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
const TattooSearchModalPopup = ({ isOpen, closeModal }) => {

  const { t } = useTranslation();



  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={closeModal}
    contentLabel="Example Modal"
    style={customStyles} 
    ariaHideApp={false}
    >
      <div className='popup_wrap explore_feature_app_popup'>        
        <div className="popup_container">
          <div className="popup_box_inner">          
            <div className="popup_left justify_content_center block_bg_orange mob_hidden">
              <Image src="/mockup-iPhone-business-popup.png" alt="Manage your business" className="w_auto max_w_100pc object_fit_contain object_position"   width={291} height={396}/>
            </div>
            <div className="popup_right">
              <button className="close_button" onClick={closeModal}>
                <Image  width={25} height={25} src="/popup-close.svg" alt="close"/>        
              </button>
              <div className="popup_right_content">
                <div className="popup_logo">
                  <Image width={105}  height={30} src="/Inckd-logo-black.svg" alt="Picture of the author"/>
                </div>
                <div className="popup_content_wrap">
                  <h2><span>{t("common:explore-the")}</span>
                  
                  <span className='textBlock'>{t("common:featuresApp")}</span>
                  </h2>
                  <ul class="download_app">
                    <li class="download_app_title">
                      <h6>{t("common:downloadOurApp")}</h6>
                    </li>
                    <li>
                      <Link target="_blank" href={APP_LINK_APPLE}>
                        <Image width={134} height={41} src="/app-store-new.svg" alt="Appstore" />
                      </Link>
                    </li>
                    <li>
                      <Link target="_blank" href={APP_LINK_GOOGLE}>
                        <Image src="/g-play-new.svg" alt="Googleplay" width={134} height={41} />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Modal>
  );
};

export default TattooSearchModalPopup;
