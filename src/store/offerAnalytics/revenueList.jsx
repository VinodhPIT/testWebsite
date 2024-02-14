
import { create } from "zustand";
import { offerRevenueDetails } from "@/action/offerAnalyticsService";
const useRevenueStore = create((set) => ({
  revenue: {},
  loading: false,
  fetchRevenue: async (token) => {
    try {
      set({ loading: true });
      const response = await offerRevenueDetails(token);
      set({ revenue: response, loading: false });
    } catch (error) {
      set({ loading: false });
    }
  },
}));
export default useRevenueStore; 