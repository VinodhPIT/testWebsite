import React from 'react'
import Image from "next/image";
import Link from "next/link";

export default function Comingsoon() {
  return (
    <main>
        <div className="page-wrapper">
          <section className="coming_soon_wrap">
            <div className="container">
              <div className="coming_soon_block">
                <Image
                  src="/coming_soon.svg"
                  alt="coming soon"
                  width={100}
                  height={100}
                  priority
                />
                <h1 className="color_gray_550 page_title custom_fs_34 fw_600 mt_25 mb_8">We are landing soon</h1>
                <p className="color_gray_550 custom_fs_14 fw_300 max_w_360 mb_0">Sorry! we are not available in your country, but don’t worry we are growing so fast and we will be there soon</p>                
                <button type="submit" class="btn_secondary h_48 btn_cutom_new_mob bdr_rad_16 mt_25">Explore inckd</button>
              </div>
            </div>
          </section>
        </div>
      </main>

  )
}
