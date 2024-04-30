import moment from "moment";

const API_URL = {
  SEARCH: {
    SEARCH_BY_CATRGORY: (params) => `/web/api/${params.category}/search`,
    GET_TATTOO_SEARCH: "/web/api/tattoo/search",
    GET_TATTOO_DETAIL: (params) => `/web/api/tattoo/detail?tattoo_uid=${params}`,
    GET_FLASH_SEARCH: "/web/api/flash/search",
    GET_ARTIST_DETAIL: (slug) => `/web/api/artist/detail/${slug}`,
    GET_STYLE_ALL: "/web/api/style/all",
    GET_REFERRAL_CODE: (slug) => `/web/api/customer/referral/${slug}`,
    GET_ARTIST_GALLERY: (params) => `/web/api/tattoo/artist?artist_uid=${params}`,
    ARTIST_FORM: "/api/profile/artist/verification/request",
    ARTIST_LISTING :'/v2/api/customer-request/artist/list',
    REQUEST_CONTACT : (params) =>`/web/api/customer-request/user-exists?customer_email=${params.email}&customer_phone_no=${params.phone}`,
     REQUEST_SAVE :`/web/api/customer-request/save`,
     CUSTOMER_REQUEST:`/web/api/customer-request/detail?artist_uid=${1}`,
     STYLE_LIST:"/web/api/style/detail",
     TATTOO_LIST:(lng)=>`/web/api/explore/tattoo/details?country_code=${lng}`,
     GET_COUNTRY_CODE:'/web/api/customer-request/country/list'

    
  },

  ANALYTICS_LOGIN: {
    LOGIN: "/analytics/login",
  },

  ANALYTICS_CUSTOMER: {
    GET_CUSTOMER_COUNT: "/analytics/customer/count",
    FILTER_BY_TYPE: (params) => `/analytics/customer/count/${params.type}?start_date=${params.startDate}&end_date=${params.endDate}`,
    GET_CUSTOMER_DETAILS: "/analytics/customer/details",
    GET_CUSTOMER_CONVERSION: "/analytics/customer/conversion",
    CUSTOEMR_FILTER_BY_DATE: (params) =>`/analytics/customer/details?start_date=${params.startDate}&end_date=${params.endDate}`,
    GET_REVENUE_DETAILS: `/analytics/offer/revenue/details`,
    DOWNLOAD_EXCEL: "/analytics/customer",
  },

  ANALYTICS_ARTISTS: {
    GET_ARTIST_COUNT: "/analytics/artist/count",
    ARTIST_FILTER_BY_DATE: (params) => `/analytics/artist/count/${params.type}?start_date=${params.startDate}&end_date=${params.endDate}`,
    GET_ARTIST_DETAILS: "/analytics/artist/details",
    GET_ARTIST_CONVERSION: "/analytics/artist/conversion",
    DOWNLOAD_EXCEL: "/analytics/artist",

    CONVERSION_COUNTRY:(country)=>`/analytics/artist/conversion?country=${country}`
    

  },

  ANALYTICS_OFFER: {
    GET_OFFER_COUNT: "/analytics/offer/count",
    GET_OFFER_DETAILS: "/analytics/offer/details",
    OFFER_FILTER_BY_DATE: (params) => `/analytics/offer/count/${params.type}?start_date=${params.startDate}&end_date=${params.endDate}`,
    DOWNLOAD_EXCEL: "/analytics/offer",
  },

  ANALYTICS_DASHBOARD: {
    GET_DOWNLOAD_COUNT: "/analytics/download/count",
  },

  EXCEL_DOWNLOAD: {
    GET_EXCEL_FILE: (path, type, startDate, endDate) =>
      `${path}/csv/${type}${
        startDate && endDate
          ? `?start_date=${moment(startDate).format(
              "YYYY-MM-DD"
            )}&end_date=${moment(endDate).format("YYYY-MM-DD")}`
          : ""
      }`,
  },


    GET_CONTENT:"/v2/api/cms/list"

  


};

export default API_URL;
