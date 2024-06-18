import { create } from "zustand";
import { artistListing, getStyles } from "@/apiConfig/webService";
import { requestFormParameters } from "@/components/parameters/params";
import axios from "axios";
import { getLocation } from "@/utils/getLocation";
import { getRandomSeed } from "@/helpers/helper";

// Define initial states
const initialState = {
  getTattooSize: [],
  countryCode:'',
  tattoondex: "",
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
  searchKey: "",
  loadNo: 0,
  latitude: "",
  longitude: "",
  selectedArtists: [],
  location: "",
  totalCount: "",
  loader: false,
  isChecked: false,
  locationDenied: false,
  userExists: null,
  loadData: false,
  seed: "",
};

export const useRequestForm = create((set, get) => ({
  ...initialState,

  setPageNo: (value) => set({ stepNumber: value }),


  setTattooSize: (value, index) => {
    set({
      tattooSize: value,
      tattoondex: index,
      // stepNumber: get().stepNumber + 1,
    });
  },

  setSelectedPart: (value, index) => {
    set({
      bodyPart: value,
      bodyPartIndex: index,
      // stepNumber: get().stepNumber + 1,
    });
  },

  setDescription: (value) => set({ message: value }),

  setEmail: (value) => set({ email: value }),

  setPhone: (value) => set({ phone: value }),

  addImage: (file, imageUrl, uuid, index) => {
    set((state) => {
      const newFileName = `${state.images.length}.jpg`;
      const newFile = new File([file], newFileName, {
        type: file.type,
      });

      return {
        images: [
          ...state.images,
          {
            File: newFile,
            imageUrl,
            uuid,
          },
        ],
      };
    });
  },

  deleteImage: (uuid) =>
    set((state) => {
      const updatedImages = state.images.filter((img) => img.uuid !== uuid);
      // Reassign filenames based on the updated index
      updatedImages.forEach((img, index) => {
        img.filename = `${index}.jpg`;
      });
      return { images: updatedImages };
    }),

  fetchArtistList: async () => {
    const fetchParams = {
      ...requestFormParameters,
      search_key: get().searchKey,
      latitude: get().latitude,
      longitude: get().longitude,
      page_no: 0,
      style: get().styleId,
      seed: getRandomSeed(),
    };

    try {
      const response = await artistListing(fetchParams);
      set({
        artistList: response.rows.hits,
        totalCount: response.rows.total.value,
        seed: fetchParams.seed,
      });
    } catch (error) {
      //console.error("Error fetching artist list:", error);
    }
  },

  fetchArtistByStyle: async (slug) => {
    try {
      set({ loader: true, loadNo: 0 });
      let styleId = [];
      const slugsToCheck = Array.isArray(slug) ? slug : [slug];
      const stylesArray = await getStyles();
      const matchingStyles = slugsToCheck.map((style) => {
        const matchingStyle = stylesArray.data.find(
          (styleObj) => styleObj.slug === style
        );
        return matchingStyle ? matchingStyle.id : null;
      });
      styleId = matchingStyles.filter((id) => id !== null);

      const fetchParams = {
        ...requestFormParameters,
        search_key: get().searchKey,
        latitude: get().latitude,
        longitude: get().longitude,
        page_no: 0,
        style: styleId,
        seed: getRandomSeed(),
      };

      const response = await artistListing(fetchParams);

      set({
        artistList: response.rows.hits,
        styleId,
        totalCount: response.rows.total.value,
        loader: false,
        seed: fetchParams.seed,
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
        style: [],
      });
      set({
        artistList: response.rows.hits,
        styleId: "",
        totalCount: response.rows.total.value,
        loader: false,
        seed: getRandomSeed(),
      });
    } catch (error) {
      //console.error("Error on clearStyles:", error);
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
        style: styleId || [],
      });
      set({
        artistList: response.rows.hits,
        totalCount: response.rows.total.value,
        searchKey: "",
        loader: false,
        seed: getRandomSeed(),
      });
    } catch (error) {
      //console.error("Error on clearField:", error);
    }
  },

  // Function to search artists by a given key
  searchArtist: async (key) => {
    try {
      set({ loadNo: 0, searchKey: key, loader: true });

      const fetchParams = {
        ...requestFormParameters,
        search_key: key,
        latitude: get().latitude || "",
        longitude: get().longitude || "",
        page_no: 0,
        style: get().styleId,
        seed: getRandomSeed(),
      };

      const response = await artistListing(fetchParams);

      set({
        artistList: response.rows.hits,
        totalCount: response.rows.total.value,
        loader: false,
        seed: fetchParams.seed,
        searchKey:key


      });
    } catch (error) {
      //console.error("Error fetching artists by style:", error);
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

      const fetchParams = {
        ...requestFormParameters,
        page_no: get().pageNo,
        search_key: get().searchKey || "",
        latitude,
        longitude,
        style: get().styleId || "",
        seed: getRandomSeed(),
      };

      const artistResponse = await artistListing(fetchParams);

      set({
        artistList: artistResponse.rows.hits,
        location: address,
        latitude,
        longitude,
        totalCount: artistResponse.rows.total.value,
        loader: false,
        seed: fetchParams.seed,
      });
    } catch (error) {
     // console.error("Error fetching artists by location:", error);
    }
  },

  // Function to filter artists by current location
  filterCurrentLocation: async (isChecked) => {
    try {
      set({ loader: true, locationDenied: false });

      let latitude = "";
      let longitude = "";

      if (!isChecked) {
        const currentLocation = await getLocation();

        if (currentLocation) {
          latitude = currentLocation.latitude;
          longitude = currentLocation.longitude;
        }
      }

      const fetchParams = {
        ...requestFormParameters,
        page_no: get().pageNo,
        search_key: get().searchKey || "",
        latitude,
        longitude,
        style: get().styleId || "",
      };

      const artistResponse = await artistListing(fetchParams);
      set({
        artistList: artistResponse.rows.hits,
        location: "",
        latitude,
        longitude,
        totalCount: artistResponse.rows.total.value,
        loader: false,
        seed: fetchParams.seed,
      });
    } catch (error) {
      set({
        locationDenied: true,
      });
    }
  },
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
        style: styleId || [],
      });
      set({
        artistList: response.rows.hits,
        totalCount: response.rows.total.value,
        location: "",
        latitude: "",
        longitude: "",
        loader: false,
        seed: getRandomSeed(),
      });
    } catch (error) {
      console.error("Error on clearLocation:", error);
    }
  },

  // Function to load more artists
  loadMore: async () => {
    try {
      set({ loadNo: get().loadNo + 1, loadData: true }); // Increment loadNo
      const response = await artistListing({
        ...requestFormParameters,
        page_no: get().loadNo,
        latitude: get().latitude || "",
        longitude: get().longitude || "",
        style: get().styleId,
        search_key: get().searchKey,
        seed: get().seed,
      });
      set((prevState) => ({
        ...prevState,
        artistList: [...prevState.artistList, ...response.rows.hits],
        totalCount: response.rows.total.value,
        loadData: false,
      }));
    } catch (error) {
      console.error("Error loading more artists:", error);
    }
  },

  addSelectedArtist: (artist) =>
    set((state) => ({
      selectedArtists: [
        ...state.selectedArtists,
        {
          ...artist,
          isSelected: true,
        },
      ],
    })),

  removeSelectedArtist: (id) =>
    set((state) => ({
      selectedArtists: state.selectedArtists
        .map((artist) => {
          if (artist.id === id) {
            return {
              ...artist,
              isSelected: false,
            };
          }
          return artist;
        })
        .filter((artist) => artist.id !== id),
    })),

  //

  checkBoxTrigger: (id) => {
    set((state) => ({
      selectedArtists: state.selectedArtists.map((artist) => {
        if (artist.id === id) {
          return { ...artist, isSelected: !artist.isSelected };
        }
        return artist;
      }),
    }));
  },

  removeUncheckArtist: () => {
    set((state) => ({
      selectedArtists: state.selectedArtists.filter(
        (artist) => artist.isSelected
      ),
    }));
  },

revertCheckBox:()=>{// Set all artists to true
  set((state) => ({
    selectedArtists: state.selectedArtists.map((artist) => {
      return { ...artist, isSelected: true };
    }),
  }));
},


  nextPage: () =>
    set((prevState) => ({
      ...prevState,
      stepNumber: prevState.stepNumber + 1,
    })),

  prevPage: () =>
    set((prevState) => ({
      ...prevState,
      stepNumber: prevState.stepNumber - 1,
    })),

  resetState: () =>
    set((prevState) => ({
      ...initialState,
    })),

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
