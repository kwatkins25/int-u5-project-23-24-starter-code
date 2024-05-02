// Declare your arrays here
let bitter = document.querySelector(".bitter")
let sweet = document.querySelector(".sweet")
let unique = document.querySelector(".unique")
let savory = document.querySelector(".savory")

// Make sure to declare your HTML elements as variables! 

// Submit Button 
let submitButton = document.querySelector("button");
submitButton.addEventListener("click", function() {});

let bitter1 = ["dandelionSalad.jpg","dandelionTea.avif","arugulaSauteed"]
let sweet1 = ["cake.jpg","cookie.jpg","fruitSalad.jpg"]
let savory1 = ["BBQandRanchBurger.webp","broccoliSoup.webp","salmon.jpg"]
let unique1 = ["rainbowPizza","tunaEye","friedSpider.jpg"]

// PHOTO GALLERY

bitter1.forEach(function(url){
let image = document.createElement("img");
image.src =url;
imageContainer.appendChild(image);
});

sweet1.forEach(function(url){
let image = document.createElement("img");
image.src =url;
imageContainer.appendChild(image);
});

savory1.forEach(function(url){
let image = document.createElement("img");
image.src =url;
imageContainer.appendChild(image);
});

unique1.forEach(function(url){
let image = document.createElement("img");
image.src =url;
imageContainer.appendChild(image);
});

// ELSE IF STATEMENTS
        
if input.value === "bitter"