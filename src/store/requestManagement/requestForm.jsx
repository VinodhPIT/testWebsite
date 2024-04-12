import { create } from "zustand";
import { artistListing, getStyles } from "@/apiConfig/webService";
import { requestFormParameters } from "@/components/parameters/params";
import axios from "axios";
import {getLocation} from '@/utils/getLocation'

// Define initial states
const initialState = {
  tattoondex: '',
  bodyPartIndex: "",
  stepNumber: 0,
  pageNo: 0,
  bodyPart: "",
  tattooSize: "",
  message: "",
  email: "",
  phone: "",
  images: [],
  artistList: [],
  styleId: "",
  searchKey: " ",
  loadNo: 0,
  latitude: "",
  longitude: "",
  selectedArtists: [],
  location: "",
  totalCount: "",
  loader: false,
  isChecked: false,
  locationDenied:false,
  userExists:null
};

export const useRequestForm = create((set, get) => ({
  ...initialState,

  setPageNo: (value) => set({ stepNumber: value }),

  setTattooSize: (value, index) => {
    set({
      tattooSize: value,
      tattoondex: index,
      stepNumber: get().stepNumber + 1
    });
  },

  setSelectedPart: (value, index) => {
    set({
      bodyPart: value,
      bodyPartIndex: index,
      stepNumber: get().stepNumber + 1
    });
  },

  setDescription: (value) => set({ message: value }),

  setEmail: (value) => set({ email: value }),

  setPhone: (value) => set({ phone: value }),

  addImage: (image, index) =>
    set((state) => ({
      images: [...state.images.slice(0, index), image, ...state.images.slice(index + 1)]
    })),

  deleteImage: (index) =>
    set((state) => ({
      images: state.images.filter((_, i) => i !== index)
    })),

  fetchArtistList: async () => {
    try {
      const response = await artistListing({
        ...requestFormParameters,
        search_key: get().searchKey,
        latitude: get().latitude,
        longitude: get().longitude,
        page_no: 0,
        style: get().styleId
      });
      set({
        artistList: response.rows.hits,
        totalCount: response.rows.total.value
      });
    } catch (error) {
      console.error("Error fetching artist list:", error);
    }
  },

  fetchArtistByStyle: async (slug) => {
    try {
      set({ loader: true ,loadNo:0 });
      let styleId = [];
      const slugsToCheck = Array.isArray(slug) ? slug : [slug];
      const stylesArray = await getStyles();
      const matchingStyles = slugsToCheck.map((style) => {
        const matchingStyle = stylesArray.data.find((styleObj) => styleObj.slug === style);
        return matchingStyle ? matchingStyle.id : null;
      });
      styleId = matchingStyles.filter((id) => id !== null);
      const response = await artistListing({
        ...requestFormParameters,
        search_key: get().searchKey,
        latitude: get().latitude,
        longitude: get().longitude,
        page_no: 0,
        style: styleId
      });
      set({
        artistList: response.rows.hits,
        styleId,
        totalCount: response.rows.total.value,
        loader: false
      });
    } catch (error) {
      console.error("Error fetching artists by style:", error);
    }
  },

 
  
    // Function to clear selected style
    clearStyle: async () => {
      try {
        set({ loader: true });
        const { searchKey, latitude, longitude, styleId } = get();
        const response = await artistListing({
          ...requestFormParameters,
          search_key: searchKey || "",
          latitude: latitude || "",
          longitude: longitude || "",
          page_no: 0,
          style: []
        });
        set({
          artistList: response.rows.hits,
          styleId: "",
          totalCount: response.rows.total.value,
          loader: false
        });
      } catch (error) {
        console.error("Error on clearStyles:", error);
      }
    },
  
    // Function to clear search key
    clearField: async () => {
      try {
        set({ loader: true });
        const { latitude, longitude, styleId } = get();
        const response = await artistListing({
          ...requestFormParameters,
          search_key: "",
          latitude: latitude || "",
          longitude: longitude || "",
          page_no: 0,
          style: styleId || []
        });
        set({
          artistList: response.rows.hits,
          totalCount: response.rows.total.value,
          searchKey: "",
          loader: false
        });
      } catch (error) {
        console.error("Error on clearField:", error);
      }
    },
  
    // Function to search artists by a given key
    searchArtist: async (key) => {
      try {
        set({ loadNo: 0, searchKey: key, loader: true });
        const response = await artistListing({
          ...requestFormParameters,
          search_key: key,
          latitude: get().latitude || "",
          longitude: get().longitude || "",
          page_no: 0,
          style: get().styleId
        });
        set({
          artistList: response.rows.hits,
          totalCount: response.rows.total.value,
          loader: false
        });
      } catch (error) {
        console.error("Error fetching artists by style:", error);
      }
    },
  
    // Function to filter artists by location
    filterLocation: async (address) => {
      try {
        set({ loader: true });
        const placeResponse = await axios.get(
          `/api/getPlaceDetails?location=${encodeURIComponent(address)}`
        );
        const { latitude, longitude } = placeResponse.data;
        const artistResponse = await artistListing({
          ...requestFormParameters,
          page_no: get().pageNo,
          search_key: get().searchKey || "",
          latitude,
          longitude,
          style: get().styleId || ""
        });
        set({
          artistList: artistResponse.rows.hits,
          location: address,
          latitude,
          longitude,
          totalCount: artistResponse.rows.total.value,
          loader: false
        });
      } catch (error) {
        console.error("Error fetching artists by location:", error);
      }
    },
  
    // Function to filter artists by current location
    filterCurrentLocation: async (isChecked) => {
      try {
        set({ loader: true, locationDenied: false});
    
        let latitude = "" 
        let longitude =  ""; 
        
        if (!isChecked) {
          const currentLocation = await getLocation();
    
          if (currentLocation) {
            latitude = currentLocation.latitude;
            longitude = currentLocation.longitude;
          }
        }
        
        const artistResponse = await artistListing({
          ...requestFormParameters,
          page_no: get().pageNo,
          search_key: get().searchKey || "",
          latitude,
          longitude,
          style: get().styleId || ""
        });
        set({
          artistList: artistResponse.rows.hits,
          location: "",
          latitude,
          longitude,
          totalCount: artistResponse.rows.total.value,
          loader: false
        });
      } catch (error) {
        set({
          locationDenied: true
        });
      }
    }
,    
    
    // Function to clear location
    clearLocation: async () => {
      try {
        set({ loader: true });
        const { searchKey, styleId } = get();
        const response = await artistListing({
          ...requestFormParameters,
          search_key: searchKey || "",
          latitude: "",
          longitude: "",
          page_no: 0,
          style: styleId || []
        });
        set({
          artistList: response.rows.hits,
          totalCount: response.rows.total.value,
          location: "",
          latitude: "",
          longitude: "",
          loader: false
        });
      } catch (error) {
        console.error("Error on clearLocation:", error);
      }
    },
  
    // Function to load more artists
    loadMore: async () => {
      try {
        set({ loadNo: get().loadNo + 1 }); // Increment loadNo
        const response = await artistListing({
          ...requestFormParameters,
          page_no: get().loadNo,
          latitude: get().latitude || "",
          longitude: get().longitude || "",
          style: get().styleId,
          search_key: get().searchKey
        });
        set((prevState) => ({
          ...prevState,
          artistList: [...prevState.artistList, ...response.rows.hits],
          totalCount: response.rows.total.value
        }));
      } catch (error) {
        console.error("Error loading more artists:", error);
      }
    },
  
    addSelectedArtist: (artist) =>
      set((state) => ({
        selectedArtists: [...state.selectedArtists, artist]
        
      })),
  
    removeSelectedArtist: (id) =>
      set((state) => ({
        selectedArtists: state.selectedArtists.filter((artist) => artist.id !== id)
      })),
  
    nextPage: () =>
      set((prevState) => ({ ...prevState, stepNumber: prevState.stepNumber + 1 })),
  
    prevPage: () =>
      set((prevState) => ({ ...prevState, stepNumber: prevState.stepNumber - 1 })),
  
    resetState: () =>
      set({
        ...initialState
      }),
  
    setIsChecked: () => set((state) => ({ isChecked: !state.isChecked })),




    checkUserExists: (value) => {
      set({
        userExists: value,
      });
    },


  }));
  







export const useResetRequestFormState = () => {
  useRequestForm.getState().resetState();
};
