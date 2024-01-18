let km = document.querySelector("#km");
let miles = document.querySelector("#miles");
let btn = document.querySelector("#btn");
let clear = document.querySelector("#clear");
let body = document.querySelector("body");
const factor = 0.621371;

btn.addEventListener("click", function () {
  miles.value = km.value * factor;
});

body.addEventListener("load", function () {
  miles.value = "";
  km.value = "";
});

clear.addEventListener("click", function () {
  miles.value = "";
  km.value = "";
});
