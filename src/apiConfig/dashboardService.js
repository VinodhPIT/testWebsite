import { analyticsGetApiCall, analyticsPostApiCall } from "./api.service";
import API_URL from "./api.config";

export const analyticsDashboardCount = async (token) => {
  try {
    const response = await analyticsGetApiCall(
      API_URL.ANALYTICS_DASHBOARD.GET_DOWNLOAD_COUNT,
      token
    );
    return response;
  } catch (error) {
    return [];
  }
};

export const getCustomerRequestAnalyticsData = async (token, params) => {
  console.log('<><> token', params)
  try {
    const response = await analyticsPostApiCall(
      API_URL.ANALYTICS_DASHBOARD.GET_CUSTOMER_REQUEST_DETAILS_DATA(
        params,
        token
      )
    );
    console.log('<><> ress', response);
    return response;
  } catch (error) {
    return [];
  }
};

// export const fetchCategoryData = async (params) => {


//   try {
//     const responseCategory = await postApiCall(
//       API_URL.SEARCH.SEARCH_BY_CATRGORY(params),
//       searchParam(params)
//     );

//     return responseCategory;
//   } catch (error) {
//     return [];
//   }
// };

export const getCountriesData = async (token) => {
  try {
    const response = await analyticsGetApiCall(
      API_URL.ANALYTICS_DASHBOARD.GET_COUNTRIES,
      token
    );
    return response;
  } catch (error) {
    return [];
  }
}