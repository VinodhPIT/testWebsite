import { create } from "zustand";
import { persist } from "zustand/middleware";

const useDevice = create(
  persist(
    (set) => ({
      isMobile: '',
      setDevice: (value) => {
        set({ isMobile: value });
      },
    }),
    {
      name: "device-storage", 
      getStorage: () => localStorage, // Storage method
    }
  )
);

export default useDevice;
