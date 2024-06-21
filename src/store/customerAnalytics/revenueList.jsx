
import { create } from "zustand";

import API_URL from "@/apiConfig/api.config";
import { axiosInstance } from "@/apiConfig/axios.instance";

const useRevenueStore = create((set) => ({
  revenue: {},
  loading: false,
  fetchRevenue: async () => {
    try {
      set({ loading: true });
      const response = await axiosInstance.get(API_URL.ANALYTICS_CUSTOMER.GET_REVENUE_DETAILS);
      set({ revenue: response.data, loading: false });
    } catch (error) {
      set({ loading: false });
    }
  },
}));
export default useRevenueStore; 