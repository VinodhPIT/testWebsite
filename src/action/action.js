// actions.js//
import {
  searchParam,
  prepareRequest,
  fetchMulticategory,
} from "@/helpers/helper";
import { postApiCall, getApiCall } from "@/utils/apiUtils";

export const fetchCategoryData = async (params) => {

  try {
    const responseCategory = await postApiCall(
      `/${params.category}/search`,
      searchParam(params)
    );

    return responseCategory; // Return the actual data
  } catch (error) {
    return [];
  }
};

export const getStyles = async () => {
  try {
    const reponseStyles = await getApiCall(
      `/style/all`
    );
  
    return reponseStyles;
   
   
  } catch (error) {

    // Handle error if needed
    return [];
  }
};

export async function fetchMultiData(param) {

  try {
    const tattooFetch = await fetch(`${process.env.apiDomain}/tattoo/search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        fetchMulticategory({ ...param, category: (param.category = "tattoo") })
      ),
    });

    const flashFetch = await fetch(`${process.env.apiDomain}/flash/search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        fetchMulticategory({ ...param, category: (param.category = "flash") })
      ),
    });

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
      tattoosResult.rows.total.value +
      flashesResult.rows.total.value 
      // artistsResult.rows.total.value;

    return {
      data: shuffledResults,
      totalCount: resultsCount,
    };
  } catch (error) {}

}

export const fetchTattooDetail = async (params) => {
  try {
    const response = await getApiCall(`/tattoo/detail?tattoo_uid=${params}`);
    return response;
  } catch (error) {
    return [];
  }
};

export const fetchArtistDetail = async (slug) => {
  try {
    const response = await getApiCall(`/artist/detail/${slug}`);
    return response;
  } catch (error) {
    return [];
  }
};

export const artistGallery = async (uid) => {
  try {
    const response = await getApiCall(`/tattoo/artist?artist_uid=${uid}`);

    return response;
  } catch (error) {
    return [];
  }
};


export const referralCode = async (slug) => {
  try {
    const response = await getApiCall(`/customer/referral/${slug}`);

    return response;
  } catch (error) {
    return [];
  }
};
