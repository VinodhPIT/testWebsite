import React from "react";
import Image from "next/image";

import useTranslation from "next-translate/useTranslation";

export default function HeaderProfile({ data }) {

  const { t } = useTranslation();

  return (
    <>
      <header className="db_header_wrap block_bg_white">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <nav className="header_dashboard profile_head">
                <div className="header_logo_nav">
                  <div className="header_logo">
                    <div className="navbar_brand">
                      <Image
                        src="/Inckd-logo-footer-black.svg"
                        alt="Logo"
                        width="105"
                        height="31"
                        priority
                      />
                    </div>
                    <div className="header_db_title_logo">
                      <h6>{t("common:Analytics")}</h6>
                    </div>
                  </div>                 
                </div>                
                <div className="header_right">
                  <div className="db_user_profile">
                    <span style={{ textTransform: "capitalize" }}>
                      Hello, {data}
                    </span>
                  </div>                  
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
