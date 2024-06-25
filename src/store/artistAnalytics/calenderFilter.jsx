import { create } from "zustand";

import {artistApitype} from '@/analyticsComponents/common/constant'

import API_URL from "@/apiConfig/api.config";
import { axiosInstance } from "@/apiConfig/axios.instance";


const useAnalyticsStore = create((set) => ({
  countData: "",
  dateRange: "",
  selectedDayRange: "",
  initialCounts: "",

  fetchInitialData: (initialCounts, initialValue) => {
    set({
      countData: initialCounts,
      dateRange: initialValue,
      selectedDayRange: initialValue,
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

      const res = await axiosInstance.get(API_URL.ANALYTICS_ARTISTS.ARTIST_FILTER_BY_DATE({
        endDate: toDate,
        startDate: fromDate,
        type: artistApitype[key],
      }))

      set((state) => ({
        countData: { ...state.countData, [key]: res.data[artistApitype[key]] },
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
