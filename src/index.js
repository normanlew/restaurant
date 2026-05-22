import "./styles.css";
import {loadHome} from "./home.js";
import {loadMenu} from "./menu.js";
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


// console.log("test");