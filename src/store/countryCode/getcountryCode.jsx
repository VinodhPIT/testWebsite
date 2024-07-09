
import { create } from "zustand";

import API_URL from "@/apiConfig/api.config";
import { axiosInstance } from "@/apiConfig/axios.instance";

const initialState = {
  getCountryCodeList: [],
  loading: false,
  countrycode:"DE +49",
};

export const useCountryCode = create((set) => ({
  ...initialState,

  fetchCountryCodelists: async () => {
    try {
      set({ loading: true });
      const response = await axiosInstance.get(API_URL.SEARCH.GET_COUNTRY_CODE);
      set({ getCountryCodeList: response.data, loading: false });
    } catch (error) {
      set({ loading: false });
    }
  },

  getSingleCountryCode: (value) => {
    set({
      countrycode: value,
    });
  },

  resetCountrycode: () => set(initialState),

}));

