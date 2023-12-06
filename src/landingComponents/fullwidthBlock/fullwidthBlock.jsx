import React from 'react'

export default function FullWidthBlock({title,content ,sectionBackgrounColor}) {
  return (
    <section className="img_text_banner_box" style={{"backgroundColor":sectionBackgrounColor}}>
    <div className={`${'col_full'}`}>
        <div className="img_text_box_wrapper">
            <div className={"text_box_wrap right pt_75 pb_75 m_pt_pb_50"}>
                <div className="img_text_box_inner container">
                    <div className="text_box_content w_100pc justify_content_center p_0 min_h_reset m_pb_0 m_text_center">
                        <div className="text_box_content_inner max_w_100pc text_center">
                            <h2 className="color_gray_550">{title}</h2>
                            <p className="custom_fs_20 w_1090 max_w_100pc lh_30 custom_fs_m_16 color_gray_550 mb_0"
                            
                            >{content}</p>                       
                        </div>
                    </div>                        
                </div>
            </div> 
        </div>
    </div>
</section>
  )
}
