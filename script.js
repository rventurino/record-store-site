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

//nav bar controls 

//used record HTML elements
const usedRecordsDropdown = document.getElementById('usedRecordsDropdown');
const usedRecordsNav = document.getElementById('usedRecordsNav');
const caretused = document.getElementById('caretused');
const caretusedlineleft = document.getElementById('caretusedlineleft');
const caretusedlineright = document.getElementById('caretusedlineright');

//used record controls
usedRecordsNav.addEventListener('mouseover', () => {
    usedRecordsDropdown.style.display = 'flex';
    caretused.style.transform = 'rotate(180deg)';
    caretusedlineleft.style.border = '.25px solid white';
    caretusedlineright.style.border = '.25px solid white';
  });
  
  usedRecordsNav.addEventListener('mouseout', () => {
    usedRecordsDropdown.style.display = 'none';
    caretused.style.transform = 'rotate(0deg)';
    caretusedlineleft.style.border = '.25px solid black';
    caretusedlineright.style.border = '.25px solid black';
  });

//used record HTML elements
const newRecordsDropdown = document.getElementById('newRecordsDropdown');
const newRecordsNav = document.getElementById('newRecordsNav');
//used record controls
newRecordsNav.addEventListener('mouseover', () => {
    newRecordsDropdown.style.display = 'flex';
  });
  
  newRecordsNav.addEventListener('mouseout', () => {
    newRecordsDropdown.style.display = 'none';
  });

