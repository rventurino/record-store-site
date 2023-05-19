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

function setCurrentNavPage () {
  /*
  const current = 0;
  const navbar = document.getElementById('navbar');
  var url = location.href.split('/');
  var url2 = url[url.length - 1]

  for (var i = 0; i < 20; i++) {
    //console.log("i: " + i)
    //console.log("url2: " + url2)
    console.log(navbar.children[i].children[1])
    if (navbar.children[i].href === url2) {
        current = i;
        console.log("ifstatement")
    }
}
//console.log(current)
navbar.children[current].classList.add('current');
*/
// Get the current URL path
var path = window.location.pathname;
//console.log("pathtop: " + path)

// Get all the anchor elements in the navbar
var navLinks = document.querySelectorAll('#navbar a');
for (var index = 0; index < navLinks.length; index++) {
  console.log(navLinks[index]);
}

// Loop through the anchor elements
for (var i = 0; i < navLinks.length; i++) {
  var href = navLinks[i].getAttribute('href');
  //console.log("href: " + href)
  //console.log("path: " + path)
  // Check if the href attribute matches the current URL path
  if (path === href) {
    // Add a CSS class to highlight the current navbar element
    navLinks[i].classList.add('current');
    break; // Stop the loop since we found a match
  }
}
}
