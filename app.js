const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Analgesics",
    price: 119,
    img: "./img/Analgesics.jpeg",
  },
  {
    id: 2,
    title: "Antibiotics",
    price: 149,
    img: "./img/Antibiotics.jpeg",
  },
  {
    id: 3,
    title: "Antidiabetic",
    price: 109,
    img: "./img/Antidiabetic.jpeg",
  },
  {
    id: 4,
    title: "Antidepressants",
    price: 129,
    img: "./img/Antidepressants.jpeg",
  },
  {
    id: 5,
    title: "Antihypertensives",
    price: 99,
    img: "./img/Antihypertensives.jpeg",
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    // Change the chosen product
    choosenProduct = products[index];

    // Change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "₹" + choosenProduct.price;
    currentProductImg.src = choosenProduct.img;
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
