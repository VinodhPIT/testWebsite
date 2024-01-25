import React from 'react'
import Link from "next/link";
import Image from "next/image";

export default function CustomerinfoAlert() {
  return (
    <div className="row">
        <div className="col-md-12 col-sm-6">
            <div className="db_card block_bg_white">
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
        </div>
        
        <div className="col-md-12 col-sm-6">  
            <div className="db_card block_bg_white">
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
    </div>
  )
}
