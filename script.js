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


//used record controls
usedRecordsNav.addEventListener('mouseover', () => {
    usedRecordsDropdown.style.display = 'flex';
    usedRecordsDropdown.classList.add('move-animation');
    usedRecordsDropdown.style.top = '45px';
    caretused.style.transform = 'rotate(180deg)';
    caretused.style.color = 'white';

  });
  
  usedRecordsNav.addEventListener('mouseout', () => {
    usedRecordsDropdown.style.display = 'none';
    usedRecordsDropdown.classList.remove('move-animation');
    caretused.style.transform = 'rotate(0deg)';
    caretused.style.color = 'black';
  });

//new record HTML elements
const newRecordsDropdown = document.getElementById('newRecordsDropdown');
const newRecordsNav = document.getElementById('newRecordsNav');
const caretnew = document.getElementById('caretnew');
//new record controls
newRecordsNav.addEventListener('mouseover', () => {
    newRecordsDropdown.style.display = 'flex';
    newRecordsDropdown.classList.add('move-animation');
    newRecordsDropdown.style.top = '45px';
    caretnew.style.transform = 'rotate(180deg)';
    caretnew.style.color = 'white';
  });
  
  newRecordsNav.addEventListener('mouseout', () => {
    newRecordsDropdown.style.display = 'none';
    newRecordsDropdown.classList.remove('move-animation');
    caretnew.style.transform = 'rotate(0deg)';
    caretnew.style.color = 'black';
  });

//Highlight the current page in the nav bar, css located in headernav.css

  const current = 0;
  const navbar = document.getElementById('navbar');
  var url = location.href.split('/');
  for (var i = 0; i < navbar.children.length; i++) {
    console.log(navbar.children[i])
      if (navbar.children[i].href === url) {
          current = i;
      }
  }
  navbar.children[current].classList.add('current');