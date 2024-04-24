//

import { create } from "zustand";
import { exploreAll } from "@/apiConfig/webService";
const useDisplayAll= create((set) => ({
  allListing: [],
  loading: false,
  fetchAll: async (lng) => {

    try {
      set({ loading: true });
      const response = await exploreAll(lng);
 
      set({ allListing: response, loading: false });
    } catch (error) {
      set({ loading: false });
    }
  },
}));
export default useDisplayAll;
