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
    console.log(data);
    displayFood(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error));

  const myDescriptions = {
    "52977": "Red lentil soup with a tomato base.", 
    "53060": "A pastry made of a thin flaky dough, filled with meat and cheese.",
    "53065": "Made with rice, seaweed, salmon, fish eggs.",
    "52978": "Baked potato filled with meat and vegetables.",
    "53026": "Fried chickpeas and beans served with sauce.",
    "52785": "Curry made with lentils and vegetables.",
    "52804": "Fresh cut fries with cheese curds and gravy smothered on top.",
    "52844": "Filled with hamburger meat and house-made tomato sauce.",
    "52929": "Doughnut holes tossed in sugar.",
    "52948": "Dumplings filled with meat and vegetables.",
    "52971": "Fried mixed vegetables and tomato sauce",
    "53013": "Traditional American hamburger served with fries.",
    "53027": "Made with rice, fried onions, macaroni noodles, beans, and tomatoes.",
    "52769": "Fries smothered with cheese and vegetables.",
    "52802": "Fresh fish covered with mashed potatoes and our house made sauce.",
    "52854": "Served with fresh berries and maple syrup.",
    "52887": "Smoked fish served with rice.",
    "52906": "Puff pastry tart made with leeks and cream.",
    "52980": "Kale mashed potatoes, topped with smoky sausages.",
    "53006": "Roasted potatoes, ground meat, peppers, and tomatoes.",
    "53028": "Filled with lamb, tomatoes, onions, tzatziki sauce.",
    "52791": "Fesh strawberries and house-made cream.",
    "52811": "Cannellini beans, tuscan kale, red pepper flakes, parmesan.",
    "52871": "Udon noodles served with beef broth, beef, and assorted vegetables.",
    "52926": "Flaky pastry dough filled with beef and sauce.",
  }

  const myPrices = {
    "52977": "$7.50", 
    "53060": "$8.59",
    "53065": "$11.99",
    "52978": "$6.50",
    "53026": "$4.99",
    "52785": "$6.50",
    "52804": "$4.99",
    "52844": "$7.50",
    "52929": "$3.99",
    "52948": "$4.50",
    "52971": "$7.50",
    "53013": "$9.99",
    "53027": "$7.50",
    "52769": "$4.99",
    "52802": "$9.99",
    "52854": "$6.99",
    "52887": "$8.50",
    "52906": "$4.50",
    "52980": "$8.99",
    "53006": "$9.99",
    "53028": "$7.50",
    "52791": "$3.99",
    "52811": "$6.50",
    "52871": "$7.50",
    "52926": "$8.50",
  }

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

    let foodPrice = document.createElement("p");
    foodPrice.innerText = myPrices[data.meals[i].idMeal];
    foodDiv.appendChild(foodPrice);

    let foodDescription = document.createElement("p");
    foodDescription.innerText = myDescriptions[data.meals[i].idMeal];
    foodDiv.appendChild(foodDescription);

    let foodButton = document.createElement("button");
    foodButton.innerText = "Add To Cart";
    foodDiv.appendChild(foodButton);
  }
}

// Drinks API

  fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    displayDrinks(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error));

  function displayDrinks(data) {

    for (i = 0; i < data.drinks.length; i++){
      drinks = data.drinks[i];
      drinksDiv = document.getElementById("drinks");
      drinksName = drinks.strDrink;
      heading = document.createElement("h3");
      heading.innerHTML = drinksName;
      drinksDiv.appendChild(heading); 
  
      drinksImage = document.createElement("img");
      drinksImage.src = drinks.strDrinkThumb;
      drinksDiv.appendChild(drinksImage);
      document.body.style.backgroundImage = "url('" + drinks.strMealThumb + "')";
    }
  }