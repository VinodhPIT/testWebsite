
import { create } from "zustand";

import API_URL from "@/apiConfig/api.config";
import { axiosInstance } from "@/apiConfig/axios.instance";

const useSArtistConversionStore = create((set) => ({
  registered: [],
  contacted:[],
  offerpending:[],
  loading: false,
  fetchData: async (selectedYear) => {
    try {
      set({ loading: true });
      const response = await axiosInstance.get(API_URL.ANALYTICS_ARTISTS.GET_ARTIST_CONVERSION);
      const filteredData = response.data.filter((entry) => entry.year === selectedYear);
      set({ registered: filteredData, contacted:filteredData ,offerpending:filteredData,loading: false });
    } catch (error) {
      set({ loading: false });
    }
  },
}));
export default useSArtistConversionStore; 
