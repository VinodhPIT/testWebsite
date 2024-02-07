const customerConversion = ["Registered", "Contacted", "Offer pending"];

const artistConversion = ["Registered", "Contacted", "Public artist" ,"Offer created count"];


const keyMappings = {
  "public artist": "public_artist",
  "offer created count": "offer_created_count",
  "offer pending" :'offer_pending'
};




module.exports = {
    customerConversion,
    artistConversion ,keyMappings
  };