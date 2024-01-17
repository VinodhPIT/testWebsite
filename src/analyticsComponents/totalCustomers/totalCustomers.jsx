import React from 'react'
import Link from "next/link";
import Image from "next/image";

export default function TotalCustomers() {
  return (    
    <div className="db_card block_bg_white db_col_65 m_max_w_pc_100">
        <div className="db_card_body">
            <div className="d_flex justify_space_between align_item_center pb_12 position_relative">
                <div>
                    <h3>Total customers</h3>
                </div>                
                <div className="db_btn_chart">
                    <Link href="#" className="d_inline_block">
                        By month   
                    </Link>                                    
                </div>
            </div>
            <div className="d_flex justify_content_center align_item_center pb_12">
                <div className="db_chart_bar">
                    graph
                </div>                            
            </div>                        
        </div>
    </div>
  )
}
