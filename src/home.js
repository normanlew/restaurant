
import restaurant_img from "./restaurant_interior.jpg"

export function loadHome() {
    const content = document.querySelector("#content");

    const home_div = document.createElement("div");

    const welcome_message = document.createElement("h1");
    welcome_message.innerHTML = "Welcome to my restaurant page!";

    const welcome_sub_message = document.createElement("h2");
    welcome_sub_message.innerHTML = "Inside my restaurant page, you will learn about my restaurant and the many dishes we cook up!";

    const restaurant_picture = document.createElement("img");
    restaurant_picture.src = restaurant_img;
    restaurant_picture.id = "restaurant_pic";

    home_div.appendChild(welcome_message);
    home_div.appendChild(welcome_sub_message);
    home_div.appendChild(restaurant_picture);
    content.appendChild(home_div);
}