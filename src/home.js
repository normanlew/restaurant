import restaurant_img from "./restaurant_interior.jpg"

export function loadHome() {
    const content = document.querySelector("#content");

            // <h1>Welcome to my restaurant page!</h1>
            // <h2>Inside my restaurant page, you will learn about my restaurant and the many dishes we cook up!</h2>
            // <img src="./restaurant_interior.jpg"></img>

    const welcome_message = document.createElement("h1");
    welcome_message.innerHTML = "Welcome to my restaurant page!";

    const welcome_sub_message = document.createElement("h2");
    welcome_sub_message.innerHTML = "Inside my restaurant page, you will learn about my restaurant and the many dishes we cook up!";

    const restaurant_picture = document.createElement("img");
    restaurant_picture.src = restaurant_img

    content.appendChild(welcome_message);
    content.appendChild(welcome_sub_message);
    content.appendChild(restaurant_picture);
}