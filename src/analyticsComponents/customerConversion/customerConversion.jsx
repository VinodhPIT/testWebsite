import React from 'react'
import Link from "next/link";
import Image from "next/image";

export default function CustomerConversion() {
  return (
    <div className="db_card block_bg_white">
        <div className="db_card_body pl_0 pr_0">
            <div className="d_flex justify_space_between align_item_center mb_18 pl_20 pr_20 position_relative">
                <div>
                    <h3>Customer Conversion</h3>
                </div>
                <div className="db_btn_chart right_20">
                    <Link href="#" className="d_inline_block">
                        This year 
                    </Link>                                    
                </div>
            </div>
            <div className="d_flex justify_content_start align_item_center pb_12">
                <div className="db_table_block">
                    <div class="table-responsive">
                        <table class="table table-striped table-nowrap table-centered mb-0">
                            <thead>
                                <tr>
                                    <th className="main_head_title">Month</th>
                                    <th>Jan</th>
                                    <th>Feb</th>
                                    <th>Mar</th>
                                    <th>Apr</th>
                                    <th>May</th>
                                    <th>Jun</th>
                                    <th>Jul</th>
                                    <th>Aug</th>
                                    <th>Sep</th>
                                    <th>Oct</th>
                                    <th>Nov</th>
                                    <th>Dec</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className="main_col_title">Registered</th>
                                    <td>27</td>
                                    <td>37</td>
                                    <td>17</td>
                                    <td>27</td>
                                    <td>37</td>
                                    <td>17</td>
                                    <td>27</td>
                                    <td>37</td>
                                    <td>17</td>
                                    <td>27</td>
                                    <td>37</td>
                                    <td>17</td>
                                </tr>
                                <tr>
                                    <th className="main_col_title">Contacted</th>
                                    <td>27</td>
                                    <td>37</td>
                                    <td>17</td>
                                    <td>27</td>
                                    <td>37</td>
                                    <td>17</td>
                                    <td>27</td>
                                    <td>37</td>
                                    <td>17</td>
                                    <td>27</td>
                                    <td>37</td>
                                    <td>17</td>
                                </tr>
                                <tr>
                                    <th className="main_col_title">Offer created</th>
                                    <td>27</td>
                                    <td>37</td>
                                    <td>17</td>
                                    <td>27</td>
                                    <td>37</td>
                                    <td>17</td>
                                    <td>27</td>
                                    <td>37</td>
                                    <td>17</td>
                                    <td>27</td>
                                    <td>37</td>
                                    <td>17</td>
                                </tr>
                                <tr>
                                    <th className="main_col_title">Percentage</th>
                                    <td className="color_green_900">10%</td>
                                    <td className="color_green_900">21%</td>
                                    <td className="color_red_100">12%</td>
                                    <td className="color_green_900">10%</td>
                                    <td className="color_green_900">21%</td>
                                    <td className="color_red_100">12%</td>
                                    <td className="color_green_900">10%</td>
                                    <td className="color_green_900">21%</td>
                                    <td className="color_red_100">12%</td>
                                    <td className="color_green_900">10%</td>
                                    <td className="color_green_900">21%</td>
                                    <td className="color_red_100">12%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>                    
                </div>                            
            </div>                        
        </div>
    </div>
  )
}


