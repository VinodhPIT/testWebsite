import Link from "next/link";
import DownloadApps from "@/components/DownloadApps-klarna/DownloadApps";
import style from "./style.module.css";
function Klarnadownloads() {
    const listingItems =[
        {
          title: "Pay Later",
          content:
            "Tattoo now and pay up to 30 days later. No interest. No fees, when you pay on time.",
        },
        {
          title: "Pay in 3",
          content:
            "Spread the cost of your purchase into 3 interest-free instalments. The first payment is made at point of the tattoo appointment day, with remaining instalments scheduled automatically every 30 days.",
        },
    
        {
          title: "Pay in 4",
          content:
            "Spread the cost of your purchase into 4 interest-free instalments. The first payment is made at point of the tattoo appointment day, with remaining instalments scheduled automatically every 2 weeks.",
        },
        {
          title: "Financing",
          content:
            "This Financing options are credit plans with repayment terms ranging up to 36 months. The first payment is made at point of the tattoo appointment day, with remaining instalments scheduled automatically every 30 days.",
        },
      ];
  return (

    <div>


<section className="img_text_banner_box pt_150 pt_mid_90 m_pt_80">
      <div className="col_full">
        <div className="img_text_box_wrapper">
          <div
            className={"text_box_wrap right pb_75 pt_35 m_pt_25"}
          >
            <div className="container">
            <span className={`${"d_inline_block"} ${style.btn_klarna}`}>
                <img
                    src="/klarna.svg" alt="klarna"
                />            
            </span>
            <h3 className="color_gray_550 text_left heading_h2 pb_50 pt_35">You choose how you want to pay!</h3>
              <div className={style.listGrid}>
                {listingItems.map((el, index) => {
                  return (
                    <div
                      className={`item ${
                        index < listingItems.length - 2
                          ? style.with_margin
                          : style.grid_mobileView
                      }`}
                      key={index}
                    >
                      <h4 className="color_gray_550 custom_fs_26 fw_700 custom_fs_m_24 mb_15">
                        {el.title}
                      </h4>
                      <p className="custom_fs_16 custom_fs_m_16 color_gray_550 mb_0">
                        {el.content}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>








    <DownloadApps title="Download the" subTitle="App & Explore more!" />


    </div>
  )
}
export default Klarnadownloads


