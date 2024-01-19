import React, { useState } from 'react'
import Link from "next/link";
import Image from "next/image";

export default function CustomerDetails({initialCounts}) {
    const [countData, setCountData]=useState(initialCounts)

    const handleDownload = (type, startDate, endDate) => {
    const link = document.createElement('a');
    link.href = `${process.env.analyticsBaseUrl}/customer/csv/${type}?start_date=${startDate}&end_date=${endDate}`;
    link.target = '_blank';
    link.download = `${new Date().getTime()}.csv`;
    link.click();
  };

    return (
        <section className="container-fluid">
            <div className="db_customer_detail_wrap">
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div className="db_card db_card_animate block_bg_yellow_300">
                            <div className="db_card_body p_16">
                                <div className="d_flex justify_space_between align_item_center pb_12">
                                    <div>
                                        <h4>Total customers</h4>
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
                                    <h2>{countData.totalCustomers}</h2>
                                    <div className="db_icon_shape">
                                        <Link href="" className="d_inline_block" onClick={() => handleDownload('total_count','2023-01-01','2024-01-01')}>
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
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div className="db_card db_card_animate block_bg_green_100">
                            <div className="db_card_body p_16">
                                <div className="d_flex justify_space_between align_item_center pb_12">
                                    <div>
                                        <h4>Customers not contacted any artists</h4>
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
                                    <h2>{countData.notContacted}</h2>
                                    <div className="db_icon_shape">
                                        <Link href="" className="d_inline_block" onClick={() => handleDownload('no_contacted','2023-01-01','2024-01-01')}>
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
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div className="db_card db_card_animate block_bg_blue_50">
                            <div className="db_card_body p_16">
                                <div className="d_flex justify_space_between align_item_center pb_12">
                                    <div>
                                        <h4>Customers not completed any offers</h4> 
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
                                    <h2>{countData.noCompletedOffer}</h2>
                                    <div className="db_icon_shape">
                                        <Link href="" className="d_inline_block" onClick={() => handleDownload('customer_no_offer_completed','2023-01-01','2024-01-01')}>
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
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div className="db_card db_card_animate block_bg_orange_100">
                            <div className="db_card_body p_16">
                                <div className="d_flex justify_space_between align_item_center pb_12">
                                    <div>
                                        <h4>Customers contacted the artist and no offer</h4>   
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
                                    <h2>{countData.contactedWithNoOffer}</h2>
                                    <div className="db_icon_shape">
                                        <Link href="" className="d_inline_block" onClick={() => handleDownload('contacted_with_no_offer','2023-01-01','2024-01-01')}>
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
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div className="db_card db_card_animate block_bg_yellow_300">
                            <div className="db_card_body p_16">
                                <div className="d_flex justify_space_between align_item_center pb_12">
                                    <div>
                                        <h4>Deleted customers</h4>
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
                                    <h2>{countData.deletedCustomers}</h2>
                                    <div className="db_icon_shape">
                                        <Link href="" className="d_inline_block" onClick={() => handleDownload('deleted','2023-01-01','2024-01-01')}>
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
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div className="db_card db_card_animate block_bg_green_100">
                            <div className="db_card_body p_16">
                                <div className="d_flex justify_space_between align_item_center pb_12">
                                    <div>
                                        <h4>Customers used any vouchers</h4>
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
                                    <h2>{countData.voucherUserCustomers}</h2>
                                    <div className="db_icon_shape">
                                        <Link href="" className="d_inline_block" onClick={() => handleDownload('voucher_used_customer','2023-01-01','2024-01-01')}>
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
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div className="db_card db_card_animate block_bg_blue_50">
                            <div className="db_card_body p_16">
                                <div className="d_flex justify_space_between align_item_center pb_12">
                                    <div>
                                        <h4>Customers joined using referral</h4>   
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
                                    <h2>{countData.referralUsedCustomers}</h2>
                                    <div className="db_icon_shape">
                                        <Link href="" className="d_inline_block" onClick={() => handleDownload('referral_used_customer','2023-01-01','2024-01-01')}>
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
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div className="db_card db_card_animate block_bg_orange_100">
                            <div className="db_card_body p_16">
                                <div className="d_flex justify_space_between align_item_center pb_12">
                                    <div>
                                        <h4>Customers joined from the website</h4>  
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
                                    <h2>{countData.joinedFromWeb}</h2>
                                    <div className="db_icon_shape">
                                        <Link href="" className="d_inline_block" onClick={() => handleDownload('deleted','2023-01-01','2024-01-01')}>
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
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div className="db_card db_card_animate block_bg_yellow_300">
                            <div className="db_card_body p_16">
                                <div className="d_flex justify_space_between align_item_center pb_12">
                                    <div>
                                        <h4>Customers joined from the app</h4>
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
                                    <h2>{countData.joinedFromApp}</h2>
                                    <div className="db_icon_shape">
                                        <Link href="" className="d_inline_block" onClick={() => handleDownload('total_count','2023-01-01','2024-01-01')}>
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
                
            </div>
        </section>
    )
}
