
import { create } from "zustand";

import API_URL from "@/apiConfig/api.config";
import { axiosInstance } from "@/apiConfig/axios.instance";

const useStyleListing = create((set) => ({
  styleList: [],
  loader: false,
  fetchStyle: async () => {
    try {
      set({ loader: true });
      const response = await axiosInstance.get(API_URL.SEARCH.STYLE_LIST);
      set({ styleList: response.data.data, loader: false });
    } catch (error) {
      set({ loader: false });
    }
  },
}));
export default useStyleListing;
