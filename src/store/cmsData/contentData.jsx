import { create } from "zustand";
import axios from "axios";
import API_URL from '@/apiConfig/api.config'

const useStore = create((set) => ({
  separatedData: {},
  error: null,
  loader: false,
  fetchData: async (lng) => {
    set({ loader: true });
    try {
      const url = `${process.env.apiDomain}${API_URL.GET_CONTENT}`;
      const params = {
        language: lng,
      };

      const response = await axios.post(url, params);

      let data = response.data.data;

      const separatedData = {};
      data.forEach((item) => {
        if (separatedData[item.type]) {
          // If exists, push the item to the existing array
          separatedData[item.type].push(item);
        } else {
          separatedData[item.type] = [item];
        }
      });

      set({ separatedData, error: null, loader: false });
    } catch (error) {
      set({ separatedData: null, error: error, loader: false });
    }
  },
}));

export default useStore;
