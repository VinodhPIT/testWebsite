
import { create } from "zustand";
import { fetchOfferDataTable ,fetchOfferLog } from "@/apiConfig/artistAnalyticsService";

const useOfferDataTable= create((set) => ({
  offerTable: [],
  total_count:"",
  loading: false,
  offerLog:[],

  fetchData: async (token, slug) => {
    try {
      set({ loading: true });

      const response = await fetchOfferDataTable(token, slug);
      set({ offerTable: response.data, total_count: response.total_count });
    } catch (error) {
        set({ loading: false});  
    }
  },


  fetchLog: async (token,slug) => {
    try {
      set({ loading: true });
      const response = await fetchOfferLog(token ,slug)
      set({ offerLog:response.data.offer_log});
    } catch (error) {
      set({ loading: false});
    }
  },


  
}));
export default useOfferDataTable; 
