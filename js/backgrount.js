const images = [
  "attraction1.jpg",
  "attraction2.jpg",
  "attraction3.jpg",
  "attraction4.jpg",
  "attraction5.jpg",
  "attraction6.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
