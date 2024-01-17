import React from 'react'
import Link from "next/link";
import Image from "next/image";

export default function CustomerDetails() {
    return (
        <section className="container_full pl_0 pr_0 block_bg_gray_150">            
            <div className="db_customer_detail_wrap">
                <div className="db_full_block m_d_grid_lg m_d_grid_xs">
                    <div className="db_card db_card_animate block_bg_yellow_300 db_four_col m_max_w_pc_100">
                        <div className="db_card_body p_16">
                            <div className="d_flex justify_space_between align_item_center pb_12">
                                <div>
                                    <h4>Total customers</h4>
                                </div>                               
                            </div>
                            <div className="d_flex justify_space_between align_item_center">
                                <h2>458</h2>
                                <div className="db_icon_shape">
                                    <Link href="#" className="d_inline_block">
                                        <Image
                                        src="/db_icon_download.svg"
                                        alt="Download"
                                        width="24"
                                        height="24"
                                        priority
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="db_card db_card_animate block_bg_green_100 db_four_col m_max_w_pc_100">
                        <div className="db_card_body p_16">
                            <div className="d_flex justify_space_between align_item_center pb_12">
                                <div>
                                    <h4>New customers</h4>
                                    <p>
                                       July 2023- Aug 2024
                                    </p>
                                </div>
                                <div className="db_icon_shape db_icon_cal">                               
                                    <Link href="#" className="d_inline_block">
                                        <Image
                                        src="/icon_calender_new.svg"
                                        alt="Download"
                                        width="24"
                                        height="24"
                                        priority
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="d_flex justify_space_between align_item_center">
                                <h2>458</h2>
                                <div className="db_icon_shape">
                                    <Link href="#" className="d_inline_block">
                                        <Image
                                        src="/db_icon_download.svg"
                                        alt="Download"
                                        width="24"
                                        height="24"
                                        priority
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="db_card db_card_animate block_bg_blue_50 db_four_col m_max_w_pc_100">
                        <div className="db_card_body p_16">
                            <div className="d_flex justify_space_between align_item_center pb_12">
                                <div>
                                    <h4>Total customers</h4>                                   
                                </div>                               
                            </div>
                            <div className="d_flex justify_space_between align_item_center">
                                <h2>458</h2>
                                <div className="db_icon_shape">
                                    <Link href="#" className="d_inline_block">
                                        <Image
                                        src="/db_icon_download.svg"
                                        alt="Download"
                                        width="24"
                                        height="24"
                                        priority
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="db_card db_card_animate block_bg_orange_100 db_four_col m_max_w_pc_100">
                        <div className="db_card_body p_16">
                            <div className="d_flex justify_space_between align_item_center pb_12">
                                <div>
                                    <h4>Deleted customers</h4>                                    
                                </div>                               
                            </div>
                            <div className="d_flex justify_space_between align_item_center">
                                <h2>458</h2>
                                <div className="db_icon_shape">
                                    <Link href="#" className="d_inline_block">
                                        <Image
                                        src="/db_icon_download.svg"
                                        alt="Download"
                                        width="24"
                                        height="24"
                                        priority
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                   
                  
                </div>
            </div>
        </section>
    )
}
