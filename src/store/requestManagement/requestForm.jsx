import { create } from "zustand";
import { artistListing, getStyles } from "@/apiConfig/webService";
import {
  Parameters,
  requestFormParameters,
} from "@/components/parameters/params";
import { getPlaceDetails } from "@/utils/placesApi";
import axios from "axios";

export const useRequestForm = create((set) => ({
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

  // Function to set the page number
  setPageNo: (value) => set((state) => ({ ...state, pageNo: value })),

  // Function to set the tattoo size and increment the page number
  setTattooSize: (value, state) => {
    // Set tattoo size
    set((prevState) => ({ ...prevState, tattooSize: value }));
    // Increment page number
    set((prevState) => ({ ...prevState, pageNo: prevState.pageNo + 1 }));
  },

  // Function to set the selected body part and increment the page number
  setSelectedPart: (value, state) => {
    // Set selected body part
    set((prevState) => ({ ...prevState, bodyPart: value }));
    // Increment page number
    set((prevState) => ({ ...prevState, pageNo: prevState.pageNo + 1 }));
  },

  // Function to set the description/message
  setDescription: (value) => set((state) => ({ ...state, message: value })),

  // Function to set the email
  setEmail: (value) => set((state) => ({ ...state, email: value })),

  // Function to set the phone number
  setPhone: (value) => set((state) => ({ ...state, phone: value })),

  // Function to add an image at a specified index
  addImage: (image, index) =>
    set((state) => {
      const updatedImages = [...state.images];
      updatedImages[index] = image;
      return { images: updatedImages };
    }),

  // Function to delete an image at a specified index
  deleteImage: (index) =>
    set((state) => ({
      images: state.images.filter((image, i) => i !== index),
    })),

  // Function to fetch the initial artist list
  fetchArtistList: async () => {
    try {
      const response = await artistListing({
        ...requestFormParameters,
        search_key:  "",
        latitude:"",
        longitude:  "",
        page_no: 0,
        style: '',

      });
      set({
        artistList: response.rows.hits,
        totalCount: response.rows.total.value,
      });
    } catch (error) {
      set({ loading: false });
    }
  },

  // Function to fetch artists by style
  fetchArtistByStyle: async (slug) => {
    try {
      let styleId = [];
      const slugsToCheck = Array.isArray(slug) ? slug : [slug]; // Ensure slug is an array
      const stylesArray = await getStyles();

      const matchingStyles = slugsToCheck.map((style) => {
        const matchingStyle = stylesArray.data.find(
          (styleObj) => styleObj.slug === style
        );
        return matchingStyle ? matchingStyle.id : null;
      });

      styleId = matchingStyles.filter((id) => id !== null);

      const { searchKey, latitude, longitude, loadNo, totalCount } =
        useRequestForm.getState();

      const response = await artistListing({
        ...requestFormParameters,
        search_key: searchKey ?? "",
        latitude: latitude ?? "",
        longitude: longitude ?? "",
        page_no: loadNo,
        style: styleId,
      });

      useRequestForm.setState({
        artistList: response.rows.hits,
        styleId,
        totalCount: response.rows.total.value,
      });
    } catch (error) {
      console.error("Error fetching artists by style:", error);
    }
  },





  clearStyle: async () => {
    try {
     
      const response = await artistListing({
        ...requestFormParameters,
        search_key: "",
        latitude:  "",
        longitude:  "",
        page_no: 0,
        style: '',
      });

      useRequestForm.setState({
        artistList: response.rows.hits,
        styleId: '', 
        totalCount: response.rows.total.value,
      });
    } catch (error) {
      console.error("Error on clearStyles:", error);
    }
  },




  // Function to search artists by a given key
  searchArtist: async (key) => {
    try {
      const { loadNo, styleId, latitude, longitude } =
        useRequestForm.getState(); // Destructure values

      const response = await artistListing({
        ...requestFormParameters,
        search_key: key,
        latitude: latitude ?? "", // Ensuring latitude and longitude are defined before destructuring
        longitude: longitude ?? "",
        page_no: loadNo,
        style: styleId,
      });

      set({
        artistList: response.rows.hits,
        totalCount: response.rows.total.value,
      });
    } catch (error) {
      console.error("Error fetching artists by style:", error);
    }
  },

  // Function to filter artists by location
  filterLocation: async (address) => {
    try {
      // Fetch place details

      const placeResponse = await axios.get(
        `/api/getPlaceDetails?location=${encodeURIComponent(address)}`
      );
      const { latitude, longitude } = placeResponse.data;

      const { searchKey, styleId, pageNo } = useRequestForm.getState(); // Destructure loadNo

      // Fetch artists based on location and other parameters
      const artistResponse = await artistListing({
        ...requestFormParameters,
        page_no: pageNo,
        search_key: searchKey ?? "",
        latitude: latitude ?? "",
        longitude: longitude ?? "",
        style: styleId ?? "",
      });

      // Update state with fetched data
      set({
        artistList: artistResponse.rows.hits,
        location: address,
        latitude,
        longitude,
        totalCount: artistResponse.rows.total.value,
      });
    } catch (error) {
      console.error("Error fetching artists by location:", error);
    }
  },

  // Function to filter artists by currentLocation
  filterCurrentLocation: async (currentLocation, isChecked) => {
    try {
        let latitude = "";
        let longitude = "";

        if (!isChecked) {
            latitude = currentLocation.latitude;
            longitude = currentLocation.longitude;
        }

        const { searchKey, styleId, pageNo } = useRequestForm.getState();

        // Fetch artists based on location and other parameters
        const artistResponse = await artistListing({
            ...requestFormParameters,
            page_no: pageNo,
            search_key: searchKey ?? "",
            latitude,
            longitude,
            style: styleId ?? "",
        });

        // Update state with fetched data
        set({
            artistList: artistResponse.rows.hits,
            location: '',
            latitude,
            longitude,
            totalCount: artistResponse.rows.total.value,
        });
    } catch (error) {
        console.error("Error fetching artists by location:", error);
    }
}
,

  // Function to load more artists
  loadMore: async () => {
    try {
      set((prevState) => ({ loadNo: prevState.loadNo + 1 })); // Increment loadNo

      const { loadNo, latitude, longitude, searchKey, styleId, pageNo } =
        useRequestForm.getState();

      const response = await artistListing({
        ...requestFormParameters,
        page_no: loadNo,
        latitude: latitude ?? "",
        longitude: longitude ?? "",
        style: styleId,
        search_key: searchKey,
      });

      set((prevState) => ({
        ...prevState,
        artistList: [...prevState.artistList, ...response.rows.hits],
        totalCount: response.rows.total.value,
      }));
    } catch (error) {
      console.error("Error loading more artists:", error);
    }
  },

  // Function to add a selected artist
  addSelectedArtist: (artist) =>
    set((state) => ({
      selectedArtists: [...state.selectedArtists, artist],
    })),

  // Function to remove a selected artist
  removeSelectedArtist: (id) =>
    set((state) => ({
      selectedArtists: state.selectedArtists.filter(
        (artist) => artist.id !== id
      ),
    })),

  // Function to move to the next page
  nextPage: () =>
    set((prevState) => ({ ...prevState, pageNo: prevState.pageNo + 1 })),

  // Function to move to the previous page
  prevPage: () =>
    set((prevState) => ({ ...prevState, pageNo: prevState.pageNo - 1 })),
}));
