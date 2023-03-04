let mobileMenu = document.querySelector('.mobileMenu');
let menuToggle = document.querySelector('.menuToggle');
menuToggle.onclick = function() {
   mobileMenu.classList.toggle('open');
}

fetch ("https://free-food-menus-api-production.up.railway.app/steaks")
.then(response => {
    return response.json();
})
.then(data => {
    data.forEach(user => {
        const markup = `<span>${user.name}</span>`;

        document.querySelector(`span`) .insertAdjacentHTML("beforeend", markup )
    });
})

.catch(error => console.log(error));