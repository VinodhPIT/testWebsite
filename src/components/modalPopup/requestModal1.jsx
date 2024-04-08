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
const TattooSearchModal1Popup = ({ isOpen, closeModal }) => {

  const { t } = useTranslation();



  return (
    <Modal
    isOpen={false}
    onRequestClose={closeModal}
    contentLabel="Example Modal"
    style={customStyles} 
    ariaHideApp={false}
    >
      <div className="popup_wrap custom_popup_design">        
        <div className="popup_container">
          <div className="popup_box_inner">          
            <div className="popup_left justify_content_center block_bg_green_100 mob_hidden">
              <Image src="/Great-idea-tattoo!.png" alt="Manage your business" className="w_auto max_w_100pc object_fit_contain object_position"   width={398} height={500}/>
            </div>
            <div className="popup_right">
              <button className="close_button" onClick={closeModal}>
                <Image  width={25} height={25} src="/popup-close.svg" alt="close"/>        
              </button>
              <div className="popup_right_content justify_content_center pl_16 pr_16">
                <div className="popup_content_wrap mt_0">
                  <div class="max_w_100pc text_center custom_text_with_icon">
                    <div class="icon mb_15">
                      <Image
                        priority
                        src="/icon_pallete.svg"
                        alt="pallete"
                        width={40}
                        height={41}                    
                        className="custom_download_icons"
                      />
                    </div>                
                    <h5 class="color_gray_550 mb_0">Great idea for a tattoo!</h5>                  
                    <p class="custom_fs_16 fw_300 color_gray_550 mb_0 mt_10">Now, let's bring your idea to life with the inckd app. Login with your existing email/phone number to easily track your progress.</p>
                    <a class="btn_outline_secondary btn_cutom_new fw_600 mt_30 w_100pc d_max_248" href="#">Open your app</a>
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
