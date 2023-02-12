"use strict";

//-------- Nav Bar--------//

let nav = document.querySelector("nav");
let main = document.querySelector("main");
let showNavBtn = document.querySelector(".nav-list");
let closeNavBtn = document.querySelector(".nav-close");

function closeNav() {
  nav.style = `right : -18rem;`;
}
function showNav() {
  nav.style = `right : 0;`;
}
main.addEventListener("click", closeNav);
closeNavBtn.addEventListener("click", closeNav);
showNavBtn.addEventListener("click", showNav);
