//

import { create } from "zustand";
import { exploreStyle } from "@/apiConfig/webService";
const useStyleListing = create((set) => ({
  styleList: [],
  loading: false,
  fetchStyle: async (lng) => {
    try {
      set({ loading: true });
      const response = await exploreStyle(lng);
    
      set({ styleList: response.data, loading: false });
    } catch (error) {
      set({ loading: false });
    }
  },
}));
export default useStyleListing;
