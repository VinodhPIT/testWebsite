import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

const usePath = create(
  persist(
    (set) => ({
      pathname: "",
      setPathname: (value) => {
        set({ pathname: value });
      },
    }),
    {
      name: "path-storage", 
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default usePath;
