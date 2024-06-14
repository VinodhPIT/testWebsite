//

import { create } from "zustand";
import { artistConvertion } from "@/pages/api/artistAnalytics.service";
const useSArtistConversionStore = create((set) => ({
  registered: [],
  contacted:[],
  offerpending:[],
  loading: false,
  fetchData: async (selectedYear) => {
    try {
      set({ loading: true });
      const response = await artistConvertion();
      const filteredData = response.filter((entry) => entry.year === selectedYear);
      set({ registered: filteredData, contacted:filteredData ,offerpending:filteredData,loading: false });
    } catch (error) {
      set({ loading: false });
    }
  },
}));
export default useSArtistConversionStore; 
