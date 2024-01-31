import React from 'react'
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';

import CountDisplayCard from '../countDisplayCard';

export default function DashboardDetails({initialCounts, token}) {
  return (
        <section className="container-fluid">
            <div className="db_customer_detail_wrap">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <CountDisplayCard 
                            bgColorClass="block_bg_yellow_300"
                            count={initialCounts.androidDownloads}
                            hideDownload
                            hideFilter
                            title="Android Downloads"
                        />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <CountDisplayCard 
                            bgColorClass="block_bg_green_100"
                            count={initialCounts.iosDownloads}
                            hideDownload
                            hideFilter
                            title="IOS Downloads"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}