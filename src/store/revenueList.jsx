
import { create } from "zustand";
import { analyticsRevenueDetails } from "@/action/analyticsAdmin";
const useRevenueStore = create((set) => ({
  revenue: {},
  loading: false,
  fetchMorePosts: async () => {
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