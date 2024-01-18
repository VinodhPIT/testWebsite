import React from 'react'
import Link from "next/link";
import Image from "next/image";

export default function CustomerChart() {
  return (
    <div className="db_card block_bg_white db_col_74 m_max_w_pc_100">
        <div className="db_card_body">
            <div className="d_flex justify_space_between align_item_center pb_12 m_flex_wrap_xs">
                <div>
                    <h3>Normal vs referred customers</h3>
                </div>
                <div className="db_piechart_legend m_pt_10_xs">
                    <div className="db_piechart_legend_col">
                        <span className="db_piechart_legend_marker block_bg_green_dark_400"></span>
                        <span className="db_piechart_legend_text">Normal customers</span>
                    </div>
                    <div className="db_piechart_legend_col">
                        <span className="db_piechart_legend_marker block_bg_green_light_200"></span>
                        <span className="db_piechart_legend_text">Referred customers</span>
                    </div>                    
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
