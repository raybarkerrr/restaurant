// Hamburger Menu
let mobileMenu = document.querySelector('.mobileMenu'); 
let menuToggle = document.querySelector('.menuToggle');

menuToggle.onclick = function() {
   mobileMenu.classList.toggle('open');
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
    console.log(data);
    displayFood(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error));

 function displayFood(data) {
  let food = data.meals[11];
  let foodDiv = document.getElementById("food");
  let foodName = food.strMeal;
  let heading = document.createElement("h3");
  heading.innerHTML = foodName;
  foodDiv.appendChild(heading);


  let foodImage = document.createElement("img");
  foodImage.src = food.strMealThumb;
  foodDiv.appendChild(foodImage);
  document.body.style.backgroundImage = "url('" + food.strMealThumb + "')";


  for (i = 0; i < data.meals.length; i++){
    food = data.meals[i];
    foodDiv = document.getElementById("food");
    foodName = food.strMeal;
    heading = document.createElement("h3");
    heading.innerHTML = foodName;
    foodDiv.appendChild(heading); 

    foodImage = document.createElement("img");
    foodImage.src = food.strMealThumb;
    foodDiv.appendChild(foodImage);
    document.body.style.backgroundImage = "url('" + food.strMealThumb + "')";
  }
}
