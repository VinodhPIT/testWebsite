
import { create } from "zustand";

import API_URL from "@/apiConfig/api.config";
import { axiosInstance } from "@/apiConfig/axios.instance";

const useOfferDataTable= create((set) => ({
  offerTable: [],
  total_count:"",
  loading: false,
  offerLog: [],

  fetchData: async (slug) => {
    try {

      const response = await axiosInstance.get(API_URL.ANALYTICS_ARTISTS.OFFER_DATA_TABLE(slug));
      const {data}=response.data

      set({ offerTable: data, total_count: data.total_count });
    } catch (error) {
      set({ offerTable: []});
    }
  },


  fetchLog: async (logUid) => {
    try {
      const response = await axiosInstance.get(API_URL.ANALYTICS_ARTISTS.OFFER_DATA_LOG(logUid));

      const {data}=response.data

      set({ offerLog:data.offer_log});

    } catch (error) {
      set({ offerLog: []});
    }
  },


  
}));
export default useOfferDataTable; 
