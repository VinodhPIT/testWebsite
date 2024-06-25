
import { create } from "zustand";


import API_URL from "@/apiConfig/api.config";
import { axiosInstance } from "@/apiConfig/axios.instance";

const useCountryCode = create((set) => ({
  getCountryCodeList: [],
  loading: false,
  countrycode:"DE +49",
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






}));
export default useCountryCode;
