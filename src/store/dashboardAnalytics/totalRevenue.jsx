import { create } from "zustand";

import API_URL from "@/apiConfig/api.config";
import { axiosInstance } from "@/apiConfig/axios.instance";

const useTotalRevenue = create((set) => ({
  totalAmount: {},
  loading: false,
  fetchTotalRevenue: async () => {
    try {
      set({ loading: true });
      
      const response = await axiosInstance.get(API_URL.ANALYTICS_OFFER.GET_OFFER_DETAILS);

      const filter = response.data.filter(
        (e) =>
          e.status === "completed" ||
          e.status === "cancelled" ||
          e.status === "scheduled"
      );

      const result = {};
      filter.forEach((item) => {
        const { status, total_amount, currency } = item;
        if (!result[currency]) {
          result[currency] = {
            completed: 0,
            cancelled: 0,
            scheduled: 0,
          };
        }
        result[currency][status] += total_amount;
      });

      const formattedResult = Object.entries(result).reduce(
        (acc, [currency, { completed, cancelled, scheduled }]) => {
          const total = (completed + cancelled + scheduled).toFixed(2);
          acc[currency] = {
            total: total,
          };
          return acc;
        },
        {}
      );
      set({ totalAmount: formattedResult, loading: false });
    } catch (error) {
      set({ loading: false });
    }
  },
}));
export default useTotalRevenue;
