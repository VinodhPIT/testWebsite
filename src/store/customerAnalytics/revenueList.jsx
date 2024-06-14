
import { create } from "zustand";
import { analyticsRevenueDetails } from "@/pages/api/customerAnalytics.service";
const useRevenueStore = create((set) => ({
  revenue: {},
  loading: false,
  fetchRevenue: async () => {
    try {
      set({ loading: true });
      const response = await analyticsRevenueDetails();
      set({ revenue: response, loading: false });
    } catch (error) {
      set({ loading: false });
    }
  },
}));
export default useRevenueStore; 