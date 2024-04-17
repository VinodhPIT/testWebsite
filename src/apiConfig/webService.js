import { searchParam, fetchMulticategory ,stepperParam  } from "@/helpers/helper";
import API_URL from "./api.config";
import { getApiCall, postApiCall } from "./api.service";

export const fetchCategoryData = async (params) => {


  try {
    const responseCategory = await postApiCall(
      API_URL.SEARCH.SEARCH_BY_CATRGORY(params),
      searchParam(params)
    );

    return responseCategory; 
  } catch (error) {
    return [];
  }
};

export const getStyles = async () => {
  try {
    const reponseStyles = await getApiCall(API_URL.SEARCH.GET_STYLE_ALL);

    return reponseStyles;
  } catch (error) {
    return [];
  }
};

export async function fetchMultiData(param) {
  try {
    const tattooFetch = await fetch(
      `${process.env.apiDomain}${API_URL.SEARCH.GET_TATTOO_SEARCH}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          fetchMulticategory({
            ...param,
            category: (param.category = "tattoo"),
          })
        ),
      }
    );

    const flashFetch = await fetch(
      `${process.env.apiDomain}${API_URL.SEARCH.GET_FLASH_SEARCH}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          fetchMulticategory({ ...param, category: (param.category = "flash") })
        ),
      }
    );

    // const artistsFetch = await fetch(`${process.env.apiDomain}/artist/search`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(
    //     fetchMulticategory({ ...param, category: (param.category = "artist") })
    //   ),
    // });

    const [tattooRes, flashRes, artistsRes] = await Promise.all([
      tattooFetch,
      flashFetch,
      // artistsFetch,
    ]);

    const [tattoosResult, flashesResult, artistsResult] = await Promise.all([
      tattooRes.json(),
      flashRes.json(),
      // artistsRes.json(),
    ]);

    const shuffledResults = [
      ...tattoosResult.rows.hits,
      ...flashesResult.rows.hits,
      // ...artistsResult.rows.hits,
    ];

    const resultsCount =
      tattoosResult.rows.total.value + flashesResult.rows.total.value;
    // artistsResult.rows.total.value;

    return {
      data: shuffledResults,
      totalCount: resultsCount,
    };
  } catch (error) {}
}

export const fetchTattooDetail = async (params) => {
  try {
    const response = await getApiCall(API_URL.SEARCH.GET_TATTOO_DETAIL(params));
    return response;
  } catch (error) {
    return [];
  }
};

export const fetchArtistDetail = async (slug) => {
  try {
    const response = await getApiCall(API_URL.SEARCH.GET_ARTIST_DETAIL(slug));
    return response;
  } catch (error) {
    return [];
  }
};

export const artistGallery = async (uid) => {
  try {
    const response = await getApiCall(API_URL.SEARCH.GET_ARTIST_GALLERY(uid));

    return response;
  } catch (error) {
    return [];
  }
};

export const referralCode = async (slug) => {
  try {
    const response = await getApiCall(API_URL.SEARCH.GET_REFERRAL_CODE(slug));
    return response;
  } catch (error) {
    return [];
  }
};





export const artistListing = async (params) => {
  
  try {
    const response = await postApiCall(API_URL.SEARCH.ARTIST_LISTING, stepperParam(params));
    return response;
  } catch (error) {
    return [];
  }
};


export const artistContact = async (params) => {
  
  try {
    const response = await getApiCall(API_URL.SEARCH.REQUEST_CONTACT(params));
    return response;
  } catch (error) {


    return [];
  }
};






export const customerRequest = async () => {
  try {
    const response = await getApiCall(API_URL.SEARCH.CUSTOMER_REQUEST);
  
    return response;
  } catch (error) {
    return [];
  }
};





