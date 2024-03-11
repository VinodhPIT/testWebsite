import { create } from "zustand";
import { analyticsArtistCountWithFIlter } from "@/apiConfig/artistAnalyticsService";
import {artistApitype} from '@/analyticsComponents/common/constant'

const useAnalyticsStore = create((set) => ({
  countData: "",
  dateRange: "",
  selectedDayRange: "",
  myToken: "",
  initialCounts: "",

  fetchInitialData: (initialCounts, initialValue, token) => {
    set({
      countData: initialCounts,
      dateRange: initialValue,
      selectedDayRange: initialValue,
      myToken: token,
      initialCounts,
    });
  },
  handleDateFilter: async (key, dateRangeValue) => {
    set((state) => ({
      selectedDayRange: { ...state.selectedDayRange, [key]: dateRangeValue },
    }));

    const { from, to } = dateRangeValue;
    const fromDate =
      `${from?.year}-${from?.month > 9 ? from?.month : `0${from?.month}`}-${
        from?.day > 9 ? from?.day : `0${from?.day}`
      }` || "";
    const toDate = to
      ? `${to?.year}-${to?.month > 9 ? to?.month : `0${to?.month}`}-${
          to?.day > 9 ? to?.day : `0${to?.day}`
        }`
      : null;

    if (fromDate && toDate) {
      const res = await analyticsArtistCountWithFIlter(
        {
          endDate: toDate,
          startDate: fromDate,
          type: artistApitype[key],
        },
        useAnalyticsStore.getState().myToken
      );

      set((state) => ({
        countData: { ...state.countData, [key]: res[artistApitype[key]] },
      }));
      set((state) => ({
        dateRange: {
          ...state.dateRange,
          [key]: {
            from: fromDate,
            to: toDate,
          },
        },
      }));
    }
  },

  resetCalender: (key) => {
    set((state) => ({
      selectedDayRange: {
        ...state.selectedDayRange,
        [key]: {
          from: null,
          to: null,
        },
      },
      dateRange: {
        ...state.dateRange,
        [key]: {
          from: null,
          to: null,
        },
      },
      countData: {
        ...state.countData,
        [key]: useAnalyticsStore.getState().initialCounts[key],
      },
    }));
  },
}));

export default useAnalyticsStore;
