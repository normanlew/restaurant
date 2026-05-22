export function loadAbout() {
    const content_div = document.querySelector("#content");

    const about_div = document.createElement("div");
    about_div.id = "about_container";

    const info_div = document.createElement("div");
    info_div.id = "info";

    const restaurant_info = document.createElement("div");
    const restaurant_info_p = document.createElement("p");
    const restaurant_info_p2 = document.createElement("p");
    restaurant_info_p.innerHTML = "We created our restaurant in 2026 while doing the Odin Project.";
    restaurant_info_p2.innerHTML = "We are an all-American restaurant focused on regular diner food.";
    restaurant_info.appendChild(restaurant_info_p);
    restaurant_info.appendChild(restaurant_info_p2);

    info_div.appendChild(restaurant_info);

    const contact_div = document.createElement("div");
    contact_div.id = "contact";

    const contact_info = document.createElement("div");
    const contact_info_p = document.createElement("p");
    const contact_info_p2 = document.createElement("p");
    contact_info_p.innerHTML = "Email: ";
    contact_info_p2.innerHTML = "customerservice@myrestaurant.com";

    contact_info.appendChild(contact_info_p);
    contact_info.appendChild(contact_info_p2);

    contact_div.appendChild(contact_info);

    about_div.appendChild(info_div);
    about_div.appendChild(contact_div);
    content_div.appendChild(about_div);
}