import React from "react";

import All from '@/components/exploreScreens/allListing'
import Flash from '@/components/exploreScreens/flashListing'
import Artist from '@/components/exploreScreens/artistListing'
import Tattoo from '@/components/exploreScreens/tattooListing'


import ArtistAll from '@/components/artistGallery/all'
import ArtistFlash from '@/components/artistGallery/flash'
import ArtistInfo from '@/components/artistGallery/info'
import ArtistTattoo from '@/components/artistGallery/tattoo'




export   function renderCategoryComponent(tab, categoryCollection) {
  switch (tab) {
    case "all":
      return <All data={categoryCollection} />;
    case "tattoo":
      return <Tattoo data={categoryCollection}  />;
    case "artist":
      return <Artist data={categoryCollection}  />;
    case "flash":
      return <Flash data={categoryCollection} />;
    default:
      return null;
  }
}




  export   function renderArtistGallery(tab,getAll ,tattooList,flashList ,artistProfile ,loading) {
  switch (tab) {
    case "all":
      return <ArtistAll  data={getAll} loading={loading} />;
    case "tattoo":
      return <ArtistTattoo data={tattooList}  />;
    case "Information":
      return <ArtistInfo data={artistProfile}   />;
    case "flash":
      return <ArtistFlash data={flashList}   />;
    default:
      return null;
  }
}
