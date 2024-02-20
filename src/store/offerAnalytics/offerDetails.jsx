import { create } from "zustand";
import { offerDetails } from "@/apiConfig/offerAnalyticsService";
const useOfferDetail = create((set) => ({
  offerData: {},
  loading: false,
  scheduledOffers: [],
  completedOffers:[],
  fetchOffer: async (token) => {
    try {
      set({ loading: true });
      const response = await offerDetails(token);
      const scheduledOffers = response.filter((e) => e.status === "scheduled");
      const completedOffers = response.filter((e) => e.status === "completed");
      const filter = response.filter(
        (e) => e.status === "completed" || e.status === "cancelled"
      );

      const result = {};
      filter.forEach((item) => {
        const { status, total_amount, currency } = item;
        if (!result[currency]) {
          result[currency] = {
            completed: 0,
            cancelled: 0,
          };
        }
        result[currency][status] += total_amount;
      });

      const formattedResult = Object.entries(result).reduce(
        (acc, [currency, { completed, cancelled }]) => {
          acc[currency] = {
            completed: completed.toFixed(2),
            cancelled: cancelled.toFixed(2),
          };
          return acc;
        },
        {}
      );

      set({ offerData: formattedResult, loading: false, scheduledOffers ,completedOffers });
    } catch (error) {
      set({ loading: false });
    }
  },
}));
export default useOfferDetail;
