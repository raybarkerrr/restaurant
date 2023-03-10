let mobileMenu = document.querySelector('.mobileMenu');
let menuToggle = document.querySelector('.menuToggle');

menuToggle.onclick = function() {
   mobileMenu.classList.toggle('open');
}


function initMap() {
   
   const pensacola = { lat: 30.4328214, lng: -87.2503974 };
   
   const map = new google.maps.Map(document.getElementById("map"), {
     zoom: 4,
     center: pensacola,
   });
   
   const marker = new google.maps.Marker({
     position: pensacola,
     map: map,
   });
 }
 
 window.initMap = initMap;

 let i = 0;
 let images = [];
 var time = 5000;

 images [0] = "Photos/smoothie1.jpeg"
 images [1] = "Photos/smoothie2.jpeg"
 images [2] = "Photos/smoothie1.jpeg"

 function changeImage(){
  document.pic.src = images[i]

  if(i < images.length - 1){
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImage()", time)
 }

 window.onload=changeImage;