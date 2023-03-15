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
    console.log(data);
    displayFood(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error));

 function displayFood(data) {

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

    let description = document.createElement("p");
    description.innerText = myDescriptions[data.meals[i].idMeal];
    foodDiv.appendChild(description);
  }
}

const myDescriptions = {
  "52977": "Red lentil soup with a tomato base.",
  "53060": "A pastry made of a thin flaky dough, filled with meat and cheese.",
  "53065": "Made with rice, seaweed, salmon, fish eggs.",
  "52978": "",
  "53026": "",
  "52785": "",
  "52804": "",
  "52844": "",
  "52929": "",
  "52948": "",
  "52971": "",
  "53013": "",
  "53027": "",
  "52769": "",
  "52802": "",
  "54854": "",
  "52887": "",
  "52906": "",
  "52980": "",
  "53006": "",
  "53028": "",
  "52791": "",
  "52811": "",
  "52871": "",
  "52926": "",
}

for (e = 0; e < myDescriptions.length; e++) {
  let description = document.createElement("p");
  description.innerText = myDescriptions[data.meals[e].idMeal];
  foodDiv.appendChild(description);
}