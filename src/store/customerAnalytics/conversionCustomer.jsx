//
import { create } from "zustand";
import { analyticsConvertion } from "@/pages/api/customerAnalytics.service";
const useCustomerConversionStore = create((set) => ({
  registered: [],
  loading: false,
  fetchData: async (selectedYear) => {
    try {
      set({ loading: true });
      const response = await analyticsConvertion();
      const filteredData = response.filter((entry) => entry.year === selectedYear);
      set({ registered: filteredData, loading: false });
    } catch (error) {
      set({ loading: false });
    }
  },
}));
export default useCustomerConversionStore; 
