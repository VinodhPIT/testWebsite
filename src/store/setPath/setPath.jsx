import { create } from "zustand";
import { persist } from "zustand/middleware";

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
      getStorage: () => localStorage, // Storage method
    }
  )
);

export default usePath;
