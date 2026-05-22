import "./styles.css";
import {loadHome} from "./home.js";
import {loadMenu} from "./menu.js";
import {loadAbout} from "./about.js";


loadHome();
// loadMenu();

const home_button = document.querySelector("#home");

const content_div = document.querySelector("#content");

home_button.addEventListener("click", (e) => {
    content_div.replaceChildren();
    loadHome();
});

const menu_button = document.querySelector("#menu");

menu_button.addEventListener("click", (e) => {
    content_div.replaceChildren();
    loadMenu();
})

const about_button = document.querySelector("#about");

about_button.addEventListener("click", (e) => {
    content_div.replaceChildren();
    loadAbout();
})


// console.log("test");