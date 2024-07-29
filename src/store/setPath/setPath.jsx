import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

const usePath = create(

    (set) => ({
      pathname: "",
      setPathname: (value) => {
        set({ pathname: value });
      },
    }),
    
  
);

export default usePath;
