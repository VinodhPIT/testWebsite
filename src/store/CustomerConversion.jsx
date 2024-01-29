
import { create } from "zustand";
import { analyticsConvertion } from "@/action/analyticsAdmin";
const useCustomerConversionStore = create((set) => ({
  registered: [],
  contacted:[],
  offerpending:[],
  loading: false,
  fetchData: async (selectedYear) => {
    try {
      set({ loading: true });
      const response = await analyticsConvertion();
      const filteredData = response.filter((entry) => entry.year === selectedYear);
      set({ registered: filteredData, contacted:filteredData ,offerpending:filteredData,loading: false });
    } catch (error) {
      set({ loading: false });
    }
  },
}));
export default useCustomerConversionStore; 