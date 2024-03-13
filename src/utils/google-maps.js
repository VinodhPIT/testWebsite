
  
const  loadGoogleMapsAPI =()=>{

var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDo8sjdevbkqLGUx_DFpFlYlQFb1FpRAIo&libraries=places&callback=initMap';
script.async = true;


window.initMap = function() {

};

// Append the 'script' element to 'head'
document.head.appendChild(script);

}

export default loadGoogleMapsAPI