//

import { create } from "zustand";
import { exploreStyle } from "@/apiConfig/webService";
const useStyleListing = create((set) => ({
  styleList: [],
  loading: false,
  fetchStyle: async () => {
    try {
      set({ loading: true });
      const response = await exploreStyle();
      set({ styleList: response.data, loading: false });
    } catch (error) {
      set({ loading: false });
    }
  },
}));
export default useStyleListing;
