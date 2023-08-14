//creating an array of objects

const plants = [

    {"name": "BMW",
    "price": 250000,
    "description": "Graceful and lush, this charming indoor plant boasts glossy, emerald-green leaves that effortlessly brighten any space.",
    "image": "bmw.jpeg"},
  
  {
    "name": "Ferrari",
    "price": 300000,
    "description": "Delicate and captivating, this rare succulent showcases a mesmerizing silver-white hue that gracefully adorns its petite, fleshy leaves.",
    "image": "Ferrari.jpeg"
  },
  {
    "name": "Porche",
    "price": 270000,
    "description": "Boasting tall, sleek, and sword-like leaves, this botanical marvel adds a touch of modern flair to any setting.",
    "image": "porche.avif"
  },
  {
    "name": "Toyota",
    "price": 350000,
    "description": "With its lush, feather-like fronds and compact size, this indoor beauty makes a striking addition to any interior space.",
    "image": "toyota.jpeg"
  },
  {
    "name": "Mustang",
    "price": 310000,
    "description": "Known for its stunning foliage that transforms with the seasons, this ornamental tree captivates with its delicate, lacy leaves in vibrant shades of red, orange, or gold.",
    "image": "mustang.jpeg"
  }
    
];


$(document).ready(function(){
//select the plants container and add html from our template 
// $("#removeone").click(function (){
//   $("#one").hide();
// });
$("#filter").click(function (){
  $(".card").hide();
});

// $("#removetwo").click(function (){
//   $("#two").hide();
// });

// $("#removethree").click(function (){
//   $("#three").hide();
// });

//you have to call it only when ready/loaded
    loadPlants();
});

const arrPlants = [
  {name: "Ficus Tree", price: 350},
  {name: "White Sprite Succulent", price: 200},
  {name: "Snake Plant", price: 400}, 
  {name: "Parlour Palm", price: 350}, 
  {name: "Japanese Maple", price: 1200}
];
let expensivePlants = [];

for (let i = 0; i < arrPlants. length; i++) {
    const plant = arrPlants [i];
      
    if (plant.price > 350) {
        expensivePlants.push (plant);
    }
}

function loadPlants () {
    for (let i = 0; i < plants.length; i++) {
        console.log(plants[i]);

        $("#plantsContainer").append($("#plantCardTemplate").html());

        let currentChild = $("#plantsContainer").children().eq(i+1);

        $(currentChild).find(".card-img-top").attr('src','assets/' + plants[i].image);

        $(currentChild).find("#nameText").text(plants[i].name);

        $(currentChild).find("#priceText").text('R ' + plants[i].price);

        $(currentChild).find("#descriptionText").text(plants[i].description);

        $(currentChild).find("#descriptionText").hide();
        
        
    }
}


$("#plantsContainer").on('click', '.card', function(){

  // Toggle the price & description text
  $(this).find("#priceText").toggle();
  $(this).find("#descriptionText").toggle();

  // Resize the image to fit the additional content
  $(this).find(".card-img-top").toggleClass("small");

  

});
