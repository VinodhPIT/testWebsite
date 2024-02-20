
import { create } from "zustand";
import { analyticsRevenueDetails } from "@/apiConfig/customerAnalyticsService";
const useRevenueStore = create((set) => ({
  revenue: {},
  loading: false,
  fetchRevenue: async (token) => {
    try {
      set({ loading: true });
      const response = await analyticsRevenueDetails(token);
      set({ revenue: response, loading: false });
    } catch (error) {
      set({ loading: false });
    }
  },
}));
export default useRevenueStore; 