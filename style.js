const wrapper = document.querySelector(".sliderwrapper");
const menuitems = document.querySelectorAll(".menuitem");
const shoesnameinput = document.querySelector("#shoesnameinput");
const searchicon = document.querySelector("#searchIcons");


const product = [
  // product array remian the same
  {
  id: 1,
  title:"AIR FORCE",
  price:119,
  colors:[
  {
  code:"black",
  img:"./images/air.png",
  },
  {
  code:"blue",
  img:"./images/air2.png",
  },
  ],
  },
  {
  id:2,
  title:"JORDEN",
  price:149,
  colors:[
  {
  code:"darkblue",
  img:"./images/jorden.png",
  },
  {
    code:"lightgrey",
   img:"./images/jorden2.png"
  },
  ]
  },
  {
  id:3,
  title:"BLAZER",
  price:109,
  colors:[
    {
      code:"red",
      img:"./images/blazer.png",
    },
    {
      code:"blue",
      img:"./images/blazer2.png",
    },
  ]
  
  },
  
  
  {
    id:4,
    title:"CRATER",
    price:129,
    colors:[
      {
        code:"yellow",
        img:"./images/item.png",
      },
      {
        code:"slategrey",
        img:"./images/item2.png",
      },
    ]
    
    },
  
    {
      id:5,
      title:"HIPPIE",
      price:129,
      colors:[
        {
          code:"black",
          img:"./images/fifth.png",
        },
        {
          code:"goldenrod",
          img:"./images/fifth2.png",
        },
      ]
      
      },
  ]

let choosenproduct = product[0];

const currentproductimage = document.querySelector(".productimage");
const currentproducttitle = document.querySelector(".producttitle");
const currentporductprice = document.querySelector(".productprice");
const currentporductcolor = document.querySelectorAll(".color");
const currentporductsize = document.querySelectorAll(".size");

menuitems.forEach((item, index) => {
    item.addEventListener("click", () => {
        // Change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        // Change the chosen product
        choosenproduct = product[index];

        // Update the text of the current product
        currentproducttitle.textContent = choosenproduct.title;
        currentporductprice.textContent = "$" + choosenproduct.price;
        // By default, pick the image of the first color
        currentproductimage.src = choosenproduct.colors[0].img;

        // Assign new background colors
        currentporductcolor.forEach((color, colorIndex) => {
            if (choosenproduct.colors[colorIndex]) {
                color.style.backgroundColor = choosenproduct.colors[colorIndex].code;
                color.style.display = "block"; // Make sure color options are visible
            } else {
                color.style.display = "none"; // Hide color options that don't exist
            }
        });
    });
});

// On click, choose the current product image
currentporductcolor.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentproductimage.src = choosenproduct.colors[index].img;
    });
});

// Handle size selection
currentporductsize.forEach((size) => {
    size.addEventListener("click", () => {
        // Reset all sizes to default
        currentporductsize.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        // Change color of selected size
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

const productbutton = document.querySelector(".productbutton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productbutton.addEventListener("click", () => {
    payment.style.display = "flex";
});
close.addEventListener("click", () => {
    payment.style.display = "none";
});

// Handle search functionality
searchicon.addEventListener("click", () => {
    const shoesname = shoesnameinput.value.toUpperCase();
    const foundproduct = product.find(p => p.title.toUpperCase() === shoesname);

    if (foundproduct) {
        choosenproduct = foundproduct;

        // Find the index of the found product to move the slider
        const foundIndex = product.indexOf(choosenproduct);
        wrapper.style.transform = `translateX(${-100 * foundIndex}vw)`;

        currentproducttitle.textContent = choosenproduct.title;
        currentporductprice.textContent = "$" + choosenproduct.price;
        currentproductimage.src = choosenproduct.colors[0].img;

        // Update the color options
        currentporductcolor.forEach((color, index) => {
            if (choosenproduct.colors[index]) {
                color.style.backgroundColor = choosenproduct.colors[index].code;
                color.style.display = "block";
            } else {
                color.style.display = "none";
            }
        });
    } else {
        alert("No product found with the name: " + shoesnameinput.value);
    }
});
