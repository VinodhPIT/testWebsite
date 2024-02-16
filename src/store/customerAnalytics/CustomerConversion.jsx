
import { create } from "zustand";
import { analyticsConvertion } from "@/action/customerAnalyticsService";
const useCustomerConversionStore = create((set) => ({
  registered: [],
  loading: false,
  fetchData: async (selectedYear ,token) => {
    try {
      set({ loading: true });
      const response = await analyticsConvertion(token);
      const filteredData = response.filter((entry) => entry.year === selectedYear);
      set({ registered: filteredData, loading: false });
    } catch (error) {
      set({ loading: false });
    }
  },
}));
export default useCustomerConversionStore; 