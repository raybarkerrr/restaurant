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

const meals = {
  id: 52977,
  image: "",
  name: foodName,
  price: "$7.50",
  description: "Red lentil soup with a tomato base.",
  
  id: 53060,
  image: "",
  name: "",
  price: "$8.59",
  description: "A pastry made of a thin flaky dough, filled with meat and cheese.",
  
  id: 53065,
  image: "",
  name: "",
  price: "$11.99",
  description: "Made with rice, seaweed, salmon, fish eggs.",

  id: 52978,
  image: "",
  name: "",
  price: "$6.50",
  description: "Baked potato filled with meat and vegetables.",

  id: 53026,
  image: "",
  name: "",
  price: "$4.99",
  description: "Fried chickpeas and beans served with sauce.",

  id: 52785,
  image: "",
  name: "",
  price: "$6.50",
  description: "Curry made with lentils and vegetables.",

  id: 52804,
  image: "",
  name: "",
  price: "$4.99",
  description: "Fresh cut fries with cheese curds and gravy smothered on top.",

  id: 52844,
  image: "",
  name: "",
  price: "$6.50",
  description: "Filled with hamburger meat and house-made tomato sauce.",

  id: 52929,
  image: "",
  name: "",
  price: "$4.99",
  description: "Doughnut holes tossed in sugar.",

  id: 52948,
  image: "",
  name: "",
  price: "$7.50",
  description: "Dumplings filled with meat and vegetables.",

  id: 52971,
  image: "",
  name: "",
  price: "$3.99",
  description: "Fried mixed vegetables and tomato sauce",

  id: 53013,
  image: "",
  name: "",
  price: "$4.50",
  description: "Traditional American hamburger served with fries.",

  id: 53027,
  image: "",
  name: "",
  price: "$7.50",
  description: "Made with rice, fried onions, macaroni noodles, beans, and tomatoes.",

  id: 52769,
  image: "",
  name: "",
  price: "$9.99",
  description: "Fries smothered with cheese and vegetables.",

  id: 52802,
  image: "",
  name: "",
  price: "$7.50",
  description: "Fresh fish covered with mashed potatoes and our house made sauce.",

  id: 52854,
  image: "",
  name: "",
  price: "$4.99",
  description: "Served with fresh berries and maple syrup.",

  id: 52887,
  image: "",
  name: "",
  price: "$9.99",
  description: "Smoked fish served with rice.",

  id: 52906,
  image: "",
  name: "",
  price: "$6.99",
  description: "Puff pastry tart made with leeks and cream.",

  id: 52980,
  image: "",
  name: "",
  price: "$8.50",
  description: "Kale mashed potatoes, topped with smoky sausages.",

  id: 53006,
  image: "",
  name: "",
  price: "$4.50",
  description: "Roasted potatoes, ground meat, peppers, and tomatoes.",

  id: 53028,
  image: "",
  name: "",
  price: "$8.99",
  description: "Filled with lamb, tomatoes, onions, tzatziki sauce.",

  id: 52791,
  image: "",
  name: "",
  price: "$9.99",
  description: "Fresh strawberries and house-made cream.",

  id: 52811,
  image: "",
  name: "",
  price: "$7.50",
  description: "Cannellini beans, tuscan kale, red pepper flakes, parmesan.",

  id: 52871,
  image: "",
  name: "",
  price: "$6.99",
  description: "Udon noodles served with beef broth, beef, and assorted vegetables.",

  id: 52926,
  image: "",
  name: "",
  price: "$7.50",
  description: "Flaky pastry dough filled with beef and sauce.",
  
  

}