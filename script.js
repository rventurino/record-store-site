mapboxgl.accessToken = 'pk.eyJ1IjoicnlhbnZlbnR1cmlubyIsImEiOiJjbGdvMXRmaXQwM2NoM2RzOHBtdHRpa2ZnIn0.TD2RDUFvN4mQEHTKj2f-Qw';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/ryanventurino/clgo2uqq3007y01nyecqhexqa', // style URL
    center: [-79.9747218887018, 40.48069876156457, ], // starting position [lng, lat]
    zoom: 17 // starting zoom
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

//Add full screen control
map.addControl(new mapboxgl.FullscreenControl());