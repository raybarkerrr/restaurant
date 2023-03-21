// Hamburger Menu
let mobileMenu = document.querySelector('.mobileMenu'); 
let menuToggle = document.querySelector('.menuToggle');

menuToggle.onclick = function() {
   mobileMenu.classList.toggle('open');
}

// Cart Menu
let cartMenu = document.querySelector('.cartMenu'); 
let cartToggle = document.querySelector('.cartToggle');

cartToggle.onclick = function() {
   cartMenu.classList.toggle('open');
}


// Google Maps 
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

 // Carousel
 let i = 0; 
 let images = [];
 var time = 3000;

 images [0] = "Photos/food3.jpeg"
 images [1] = "Photos/food4.jpeg"
 images [2] = "Photos/food5.jpg"

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

 // API Restaurant Data
 fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
 .then((response) => {
   if (response.ok) {
     return response.json();
   } else {
     throw new Error("NETWORK RESPONSE ERROR");
   }
 })
 .then(data => {
    
   let mealCheckout = []

   mealCheckout = data.meals;
   console.log(mealCheckout.length)

   let firstMeals = mealCheckout;

   for (let i = 0; i < firstMeals.slice(0,10).length; i++){
    console.log(firstMeals[i])
    let menuItems = document.getElementById("menuItems");
    let menuPricing = document.getElementById("menuPricing");
    let menuTitle = document.createElement("h1");

    const menuPrice = document.createTextNode("$10");
    menuPricing.appendChild(menuPrice);
    const menuContent = document.createTextNode("Yuumy");
    menuItems.appendChild(menuContent);


   }

   let lastMeals = mealCheckout;
   console.log(lastMeals.slice(15))
   
 })
 .catch((error) => console.error("FETCH ERROR:", error));