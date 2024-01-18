import React from 'react'
import Link from "next/link";
import Image from "next/image";

export default function CustomerPayment() {
  return (                
    <div className="db_card block_bg_white">
        <div className="db_card_body">
            <div className="d_flex justify_content_start align_item_center pb_12">
                <div>
                    <h3>Payment method</h3>
                </div>                           
            </div>
            <div className="d_flex justify_content_center align_item_center pb_12">
                <div className="db_chart_bar">
                    graph
                </div> 
            </div>
            <div className="d_flex justify_content_center align_item_center pt_12">                           
                <div className="db_piechart_payment">
                    <div className="db_piechart_payment_col">
                        <div className="d_flex align_item_start gap_8">
                            <span className="db_piechart_payment_marker block_bg_pink"></span>
                            <span className="db_piechart_payment_text">Klarna</span>
                        </div>
                        <h2>412 CHF</h2>
                    </div>
                    <div className="db_piechart_payment_col">
                        <div className="d_flex align_item_start gap_8">
                            <span className="db_piechart_payment_marker block_bg_orange"></span>
                            <span className="db_piechart_payment_text">Normal Payment</span>
                        </div>
                        <h2>1458 CHF</h2>
                    </div>
                </div>   
            </div>
        </div>
    </div>    
  )
}
