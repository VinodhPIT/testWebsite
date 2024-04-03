import { create } from "zustand";

export const useRequestForm = create((set) => ({
  pageNo: 0,
  bodyPart: "",
  tattooSize: "",
  message: "",
  email: "",
  phone: "",
  images: [],

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

  addImage: (image, index) =>
    set((state) => {
      const updatedImages = [...state.images];
      updatedImages[index] = image;
      return { images: updatedImages };
    }),

  deleteImage: (index) =>
    set((state) => ({
      images: state.images.filter((image, i) => i !== index),
    })),

  nextPage: () =>
    set((prevState) => ({ ...prevState, pageNo: prevState.pageNo + 1 })),
  prevPage: () =>
    set((prevState) => ({ ...prevState, pageNo: prevState.pageNo - 1 })),
}));
