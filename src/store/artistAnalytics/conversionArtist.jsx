//

import { create } from "zustand";
import { artistConvertion } from "@/apiConfig/artistAnalyticsService";
const useSArtistConversionStore = create((set) => ({
  registered: [],
  contacted:[],
  offerpending:[],
  loading: false,
  fetchData: async (selectedYear ,token) => {
    try {
      set({ loading: true });
      const response = await artistConvertion(token);
      const filteredData = response.filter((entry) => entry.year === selectedYear);
      set({ registered: filteredData, contacted:filteredData ,offerpending:filteredData,loading: false });
    } catch (error) {
      set({ loading: false });
    }
  },
}));
export default useSArtistConversionStore; 
