
import { create } from "zustand";

import API_URL from "@/apiConfig/api.config";
import { axiosInstance } from "@/apiConfig/axios.instance";

const useCustomerConversionStore = create((set) => ({
  registered: [],
  loading: false,
  fetchData: async (selectedYear) => {
    try {
      set({ loading: true });
      const response = await axiosInstance.get(API_URL.ANALYTICS_CUSTOMER.GET_CUSTOMER_CONVERSION);
      
      const filteredData = response.data.filter((entry) => entry.year === selectedYear);
      set({ registered: filteredData, loading: false });
    } catch (error) {
      set({ loading: false });
    }
  },
}));
export default useCustomerConversionStore; 
