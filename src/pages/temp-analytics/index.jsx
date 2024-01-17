import React from 'react'
import Header from "@/analyticsComponents/header/header";
import CustomerDetails from "@/analyticsComponents/customerDetails/customerDetails";
import TotalCustomers from "@/analyticsComponents/totalCustomers/totalCustomers"
import CustomerGender from "@/analyticsComponents/customerGender/customerGender"
import CustomerPayment from "@/analyticsComponents/customerPayment/customerPayment"
import CustomerConversion from "@/analyticsComponents/customerConversion/customerConversion"
import CustomerChart from "@/analyticsComponents/customerChart/customerChart"
import CustomerinfoAlert from "@/analyticsComponents/customerinfoAlert/customerinfoAlert"
export default function Analytics() {
  return (
    <> 
    <Header />
    <section className="pt_20 pb_20 block_bg_gray_150">
      <CustomerDetails />      
      <section className="container_full pl_0 pr_0">            
        <div className="db_customer_detail_wrap">                
          <div className="db_full_block m_flex_dir_column_lg">
            <TotalCustomers />
            <CustomerGender />
          </div>
        </div>
      </section>

      <section className="container_full pl_0 pr_0">            
        <div className="db_customer_detail_wrap">                
          <div className="db_full_block m_flex_dir_column_lg">
            <CustomerPayment />
            <CustomerConversion />
          </div>
        </div>
      </section>

      <section className="container_full pl_0 pr_0">            
        <div className="db_customer_detail_wrap">                
          <div className="db_full_block m_flex_dir_column_lg">
            <CustomerChart />
            <CustomerinfoAlert />
          </div>
        </div>
      </section>
          


    </section>
    </>
  )
}