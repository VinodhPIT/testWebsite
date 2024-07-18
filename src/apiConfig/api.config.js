import moment from "moment";

const API_URL = {
  SEARCH: {
    SEARCH_BY_CATRGORY: (params) => `/web/api/${params}/search`,
    GET_TATTOO_SEARCH: "/web/api/tattoo/search",
    GET_TATTOO_DETAIL: (params) => `/web/api/tattoo/detail?tattoo_uid=${params}`,
    GET_FLASH_SEARCH: "/web/api/flash/search",
    GET_ARTIST_DETAIL: (slug) => `/web/api/artist/detail/${slug}`,
    GET_STYLE_ALL: "/web/api/style/all",
    GET_REFERRAL_CODE: (slug) => `/web/api/customer/referral/${slug}`,
    GET_ARTIST_GALLERY: (params) => `/web/api/tattoo/artist?artist_uid=${params}`,
    ARTIST_FORM: "/api/profile/artist/verification/request",
    ARTIST_LISTING :'/web/api/customer-request/artist/list',
    REQUEST_CONTACT : (params) =>`/web/api/customer-request/user-exists?customer_email=${params.email.toLowerCase()}&customer_phone_no=${params.phone}`,
     REQUEST_SAVE :`/web/api/customer-request/save`,
     CUSTOMER_REQUEST:`/web/api/customer-request/detail?artist_uid=${1}`,
     STYLE_LIST:"/web/api/style/detail",
     TATTOO_LIST:(countryCode)=>`/web/api/explore/tattoo/details?country_code=${countryCode}`,
     GET_COUNTRY_CODE:'/web/api/customer-request/country/list',
     GET_SINGLE_STYLE_DETAIL:(styleId)=>`/web/api/style/single/detail?style_uid=${styleId}`
  },

  ANALYTICS_LOGIN: {
    LOGIN: "/analytics/login",
  },

  ANALYTICS_CUSTOMER: {
    GET_CUSTOMER_COUNT: "/analytics/customer/count",
    FILTER_BY_TYPE: (params) => `/analytics/customer/count/${params.type}?start_date=${params.startDate}&end_date=${params.endDate}`,
    GET_CUSTOMER_DETAILS: "/analytics/customer/details",
    GET_CUSTOMER_CONVERSION: "/analytics/customer/conversion",
    CUSTOEMR_FILTER_BY_DATE: (params) => `/analytics/customer/details?start_date=${params.startDate}&end_date=${params.endDate}`,
    GET_REVENUE_DETAILS: `/analytics/offer/revenue/details`,
    DOWNLOAD_EXCEL: "/analytics/customer",
  },

  ANALYTICS_ARTISTS: {
    GET_ARTIST_COUNT: "/analytics/artist/count",
    ARTIST_FILTER_BY_DATE: (params) => `/analytics/artist/count/${params.type}?start_date=${params.startDate}&end_date=${params.endDate}`,
    GET_ARTIST_DETAILS: "/analytics/artist/details",
    GET_ARTIST_CONVERSION: "/analytics/artist/conversion",
    DOWNLOAD_EXCEL: "/analytics/artist",

    CONVERSION_COUNTRY: (country) => `/analytics/artist/conversion?country=${country}`,

    ARTIST_PROFILE_DETAIL:(slug)=>`/web/api/artist/profile/details?artist_uid=${slug}`,

    OFFER_DATA_TABLE:(slug)=>`/web/api/artist/offer?artist_uid=${slug}`,

    OFFER_DATA_LOG :(slug)=>`/web/api/artist/offer/details?offer_uid=${slug}`,

  },

  ANALYTICS_OFFER: {
    GET_OFFER_COUNT: "/analytics/offer/count",
    GET_OFFER_DETAILS: "/analytics/offer/details",
    OFFER_FILTER_BY_DATE: (params) => `/analytics/offer/count/${params.type}?start_date=${params.startDate}&end_date=${params.endDate}`,
    DOWNLOAD_EXCEL: "/analytics/offer",
  },

  ANALYTICS_DASHBOARD: {
    GET_DOWNLOAD_COUNT: "/analytics/download/count",

    GET_COUNTRIES: "/analytics/country/list",
    GET_CUSTOMER_REQUEST_DETAILS_DATA:"/analytics/customer/customer-request",
    GET_OFFER_DASHBOARD_DETAILS : "/analytics/offer/send-offers",
    GET_ACCEPTED_OFFER_DASHBOARD_DETAILS : "/analytics/offer/accepted-offers",
    GET_COMPLETED_OFFER_DASHBOARD_DETAILS : "/analytics/offer/completed-offers"

    
  },

  EXCEL_DOWNLOAD: {
    GET_EXCEL_FILE: (path, type, startDate, endDate) =>
      `${path}/csv/${type}${startDate && endDate
        ? `?start_date=${moment(startDate).format(
          "YYYY-MM-DD"
        )}&end_date=${moment(endDate).format("YYYY-MM-DD")}`
        : ""
      }`,
  },
  GET_CONTENT: "/v2/api/cms/list"
};

export default API_URL;

