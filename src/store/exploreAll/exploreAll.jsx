
import { create } from "zustand";

import API_URL from "@/apiConfig/api.config";
import { axiosInstance } from "@/apiConfig/axios.instance";

const useDisplayAll= create((set) => ({
  allListing: [],
  loading: false,
  fetchAll: async (countryCode) => {
    try {
      set({ loading: true });
      const response = await axiosInstance.get(API_URL.SEARCH.TATTOO_LIST(countryCode));
      set({ allListing: response.data, loading: false })
    } catch (error) {
      set({ loading: false });
    }
  },
}));
export default useDisplayAll;
