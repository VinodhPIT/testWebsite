import { analyticsGetApiCall } from "@/utils/apiUtils";

export const analyticsCustomerCount = async () => {
  try {
    const response = await analyticsGetApiCall("/customer/count");
    return response;
  } catch (error) {
    return [];
  }
};

export const analyticsCustomerCountWithFIlter = async (params) => {
  try {
    const response = await analyticsGetApiCall(
      `/customer/count/${params.type}?start_date=${params.startDate}&end_date=${params.endDate}`
    );
    return response;
  } catch (error) {
    return [];
  }
};

export const analyticsCustomerLeadSourceCount = async () => {
  try {
    const response = await analyticsGetApiCall("/customer/details");
    return response;
  } catch (error) {
    return [];
  }
};

export const analyticsCustomerLeadSourceCountWithFIlter = async (params) => {
  try {
    const response = await analyticsGetApiCall(
      `/customer/details?start_date=${params.startDate}&end_date=${params.endDate}`
    );
    return response;
  } catch (error) {
    return [];
  }
};

export const analyticsArtistCount = async () => {
  try {
    const response = await analyticsGetApiCall('/artist/count');
    return response;
  } catch (error) {
    return [];
  }
};

export const analyticsArtistCountWithFIlter = async (params) => {
  try {
    const response = await analyticsGetApiCall(`/artist/count/${params.type}?start_date=${params.startDate}&end_date=${params.endDate}`);
    return response;
  } catch (error) {
    return [];
  }
};

export const analyticsCustomeFilter = async (params, parma1) => {
  try {
    const response = await analyticsGetApiCall(
      `/customer/details?start_date=${params}&end_date=${parma1}`
    );

    return response;
  } catch (error) {
    return [];
  }
};

export const analyticsRevenueDetails = async () => {
  try {
    const response = await analyticsGetApiCall(`/revenue/details`);

    return response;
  } catch (error) {
    return [];
  }
};



export const analyticsConvertion = async () => {
  try {
    const response = await analyticsGetApiCall(`/customer/convertion`);
    return response;
  } catch (error) {
    return [];
  }
};
