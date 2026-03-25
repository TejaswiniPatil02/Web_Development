
// images array
let images = [
  "https://tse3.mm.bing.net/th/id/OIP.UHhfz5runZfiZ21ToRjfdQHaDt?pid=Api&P=0&h=180",
  "https://www.hindustantimes.com/ht-img/img/2023/02/16/1600x900/The-division-bench-of-justice-Gautam-Patel-and-jus_1676574752989.jpg",
  "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/10/04132259/Chapora-Fort.jpg",
  "https://thelistacademy.com/wp-content/uploads/2020/06/-rajgad-fo5eee2eece8c19.jpg",
  "https://thelistacademy.com/wp-content/uploads/2020/06/-malhargad5eee31985ead2.jpg",
  "https://tse4.mm.bing.net/th/id/OIP.6nd4YZma9bvzQvfzyNLREAHaES?pid=Api&P=0&h=180",
  "https://tse2.mm.bing.net/th/id/OIP.4fb0-ADTTAo4M4O-6oFcewHaE8?pid=Api&P=0&h=180",
  "https://tse2.mm.bing.net/th/id/OIP.a5q17nRznJkmSH5QVES-fwHaEK?pid=Api&P=0&h=180",
];

// current index
let index = 0;

// first image show
let slider = document.getElementById("slider");
slider.src = images[index];

// next button function
function next() {
  index++;

  if (index >= images.length) {
    index = 0;
  }

  slider.src = images[index];
}

// previous button function
function prev() {
  index--;

  if (index < 0) {
    index = images.length - 1;
  }

  slider.src = images[index];
}


// image auto change in 2 sec 
//setInterval(next, 2000);