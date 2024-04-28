
import { create } from "zustand";
import { getCountryCode } from "@/apiConfig/webService";
const useCountryCode = create((set) => ({
  getCountryCodeList: [],
  loading: false,
  countrycode:"DE +49",
  fetchCountryCodelists: async () => {
    try {
      set({ loading: true });
      const response = await getCountryCode();
      set({ getCountryCodeList: response, loading: false });
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
