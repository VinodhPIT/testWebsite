import React from 'react'
import Link from "next/link";
import Image from "next/image";

export default function CustomerinfoAlert() {
  return (
    <div className="db_col_block db_col_25 m_max_w_pc_100 m_d_grid_xs m_d_grid_lg">
        <div className="db_card block_bg_white m_max_w_pc_100">
            <div className="db_card_body p_16">
                    <div className="d_flex justify_space_between align_item_center pb_12">
                        <div>
                            <h4>Not contacted any artists</h4>
                        </div>                               
                    </div>
                    <div className="d_flex justify_space_between align_item_center">
                        <h2>458</h2>                        
                    </div>
            </div>
        </div>

        <div className="db_card block_bg_white m_max_w_pc_100">
            <div className="db_card_body p_16">
                <div className="d_flex justify_space_between align_item_center pb_12">
                    <div>
                        <h4>No offers yet</h4>                        
                    </div>                   
                </div>
                <div className="d_flex justify_space_between align_item_center">
                    <h2>458</h2>                   
                </div>
            </div>
        </div>
    </div>
  )
}
