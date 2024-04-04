import { create } from "zustand";
import { artistListing, getStyles } from "@/apiConfig/webService";
import {
  Parameters,
  requestFormParameters,
} from "@/components/parameters/params";

export const useRequestForm = create((set) => ({
  pageNo: 0,
  bodyPart: "",
  tattooSize: "",
  message: "",
  email: "",
  phone: "",
  images: [],
  artistList: [],
  styleId:'',
  searchKey:" ",



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

  fetchArtistList: async () => {
    try {
      const response = await artistListing(requestFormParameters);
      set({ artistList: response.rows.hits });
    } catch (error) {
      set({ loading: false });
    }
  },

 

  fetchArtistBystyle: async (slug) => {
    try {
      let styleId = "";
      const slugsToCheck = slug;
      const stylesArray = await getStyles();
  
      const matchingStyles = slugsToCheck.map((style) => {
        const matchingStyle = stylesArray.data.find(
          (styleObj) => styleObj.slug === style
        );
        return matchingStyle ? matchingStyle.id : null;
      });
  
      styleId = matchingStyles.filter((id) => id !== null);
  
      const response = await artistListing({
        ...requestFormParameters,
        style: styleId,
        
      });
      console.log(styleId ,"search_keysearch_key")
  
      set({ artistList: response.rows.hits  ,styleId});
    } catch (error) {
      console.error("Error fetching artists by style:", error);
    }
  },

  

  searchArtist: async (key) => {
    try {
      
      const response = await artistListing({
        ...requestFormParameters,
        search_key: key,
        
      });
      console.log(response ,"search_keysearch_key")
  
      set({ artistList: response.rows.hits});
    } catch (error) {
      console.error("Error fetching artists by style:", error);
    }
  },







  nextPage: () =>
    set((prevState) => ({ ...prevState, pageNo: prevState.pageNo + 1 })),
  prevPage: () =>
    set((prevState) => ({ ...prevState, pageNo: prevState.pageNo - 1 })),
}));
