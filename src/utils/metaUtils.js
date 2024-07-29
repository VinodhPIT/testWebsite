
/**
 * Function to get meta details for each tab from server-side for SEO performance
 * @param {string} tab - The current tab or section of the page ('all', 'tattoo', 'artist', 'flash'.
 * @param {function} t - The translation function to fetch localized strings.
 * @param {string} liveUrl - The base URL of the  site,for constructing full URLs for meta tags.
 * @returns {object} An object containing meta tags for the specified tab.
 */


export const getMetaTags = (tab) => {
    switch (tab) {
      case 'all':
        return {
          title: "common:exploreAll_Meta.title",
          keyword:"common:exploreAll_Meta.keyword",
          description: "common:exploreAll_Meta.description",
          og_title: "common:exploreAll_Meta.title",
          og_description:"common:exploreAll_Meta.description",
          og_image:`${process.env.LIVE_URL}/metaAll.png`,
          twitter_card:"",
          twitter_title:"common:exploreAll_Meta.title",
          twitter_description:"common:exploreAll_Meta.description",
          twitter_site:""
        };
      case 'tattoo':
        return {
          title: `${"common:exploreTattoosScreen_Meta.title"}`,
          keyword:`${ "common:exploreTattoosScreen_Meta.keyword"}`,
          description: `${"common:exploreTattoosScreen_Meta.title"}`,
          og_title: `${"common:exploreTattoosScreen_Meta.title"}`,
          og_description:`${"common:exploreTattoosScreen_Meta.description"}`,
          og_image: `${process.env.LIVE_URL}/metaTattoosearch.png`,
          twitter_card:"",
          twitter_title:`${"common:exploreTattoosScreen_Metatitle"}`,
          twitter_description:`${"common:exploreTattoosScreen_Meta.description"}`,
          twitter_site:""
        };
      case 'artist':
        return {
          title: "common:exploreArtistScreen_Meta.title",
          keyword:"common:exploreArtistScreen_Meta.keyword",
          description: "common:exploreArtistScreen_Meta.title",
          og_title: "common:exploreArtistScreen_Meta.title",
          og_description:"common:exploreArtistScreen_Meta.description",
          og_image: `${process.env.LIVE_URL}/metaArtist.png`,
          twitter_card:"",
          twitter_title:"common:exploreArtistScreen_Meta.title",
          twitter_description:"common:exploreArtistScreen_Meta.description",
          twitter_site:""
        };
      case 'flash':
        return {
          title: "common:exploreFlashScreen_Meta.title",
          keyword:"common:exploreFlashScreen_Meta.keyword",
          description: "common:exploreFlashScreen_Meta.title",
          og_title: "common:exploreFlashScreen_Meta.title",
          og_description:"common:exploreFlashScreen_Meta.description",
          og_image: `${process.env.LIVE_URL}/metaFlash.png`,
          twitter_card:"",
          twitter_title:"common:exploreFlashScreen_Meta.title",
          twitter_description:"common:exploreFlashScreen_Meta.description",
          twitter_site:""
        };
    }
  };
  