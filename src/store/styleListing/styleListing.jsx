//

import { create } from "zustand";
import { exploreStyle } from "@/apiConfig/webService";
const useStyleListing = create((set) => ({
  styleList: [],
  loader: false,
  fetchStyle: async (lng) => {
    try {
      set({ loader: true });
      const response = await exploreStyle(lng);
    
      set({ styleList: response.data, loader: false });
    } catch (error) {
      set({ loader: false });
    }
  },
}));
export default useStyleListing;
