import React from 'react'
import Link from "next/link";
import Image from "next/image";

export default function CustomerGender() {
  return (
    <div className="db_card block_bg_white db_col_35 m_max_w_pc_100">
        <div className="db_card_body">
            <div className="d_flex justify_content_start align_item_center pb_12">
                <div>
                    <h3>Total customers by gender</h3>
                </div>                           
            </div>
            <div className="d_flex justify_content_center align_item_center pb_12">
                <div className="db_chart_bar">
                    graph
                </div>   
            </div>
            <div className="d_flex justify_content_center align_item_center pt_12">                           
                <div className="db_piechart_legend">
                    <div className="db_piechart_legend_col">
                        <span className="db_piechart_legend_marker block_bg_blue_150"></span>
                        <span className="db_piechart_legend_text">Male</span>
                    </div>
                    <div className="db_piechart_legend_col">
                        <span className="db_piechart_legend_marker block_bg_pink_100"></span>
                        <span className="db_piechart_legend_text">Female</span>
                    </div>
                    <div className="db_piechart_legend_col">
                        <span className="db_piechart_legend_marker block_bg_gray_light_200"></span>
                        <span className="db_piechart_legend_text">Other</span>
                    </div>
                </div>                            
            </div>                        
        </div>
    </div>
  )
}
