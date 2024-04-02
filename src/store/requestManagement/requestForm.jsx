import { create } from "zustand";



export const useRequestForm = create((set) => ({
  pageNo: 0,
  bodyPart: "",
  tattooSize: "",
  message: "",
  email: "",
  phone: "",

  setPageNo: (value) => set((state) => ({ ...state, pageNo: value })),
  setTattooSize: (value, state) => {
    set((prevState) => ({ ...prevState, tattooSize: value }));
    set((prevState) => ({ ...prevState, pageNo: prevState.pageNo + 1 }));
  },
  setSelectedPart: (value, state) => {
    set((prevState) => ({ ...prevState, bodyPart: value }));
    set((prevState) => ({ ...prevState, pageNo: prevState.pageNo + 1 }));
  },
  setDescription: (value) => set((state) => ({ ...state, message: value })),
  setEmail: (value) => set((state) => ({ ...state, email: value })),
  setPhone: (value) => set((state) => ({ ...state, phone: value })),

  nextPage: () => set((prevState) => ({ ...prevState, pageNo: prevState.pageNo + 1 })),
  prevPage: () => set((prevState) => ({ ...prevState, pageNo: prevState.pageNo - 1 }))
}));


