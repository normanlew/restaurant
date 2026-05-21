export function loadMenu() {
    const content = document.querySelector("#content");
    const container = document.createElement("div");
    container.id = "menu_container";

    const appetizers = document.createElement("div");
    appetizers.id = "appetizers";
    appetizers.classList.add("sub_menu");
    // appetizers.innerHTML = "appetizers"

    const appetizer_title = document.createElement("div");
    const appetizer_1 = document.createElement("div");
    const appetizer_2 = document.createElement("div");
    const appetizer_3 = document.createElement("div");
    appetizer_title.classList.add("sub_menu_title");
    const appetizer_title_p = document.createElement("p");
    appetizer_title_p.innerHTML = "Appetizers";
    appetizer_title.appendChild(appetizer_title_p)
    appetizer_1.classList.add("appetizer");
    appetizer_2.classList.add("appetizer");
    appetizer_3.classList.add("appetizer");
    appetizer_1.innerHTML = "Appetizer1";
    appetizer_2.innerHTML = "Appetizer2";
    appetizer_3.innerHTML = "Appetizer3";

    appetizers.appendChild(appetizer_title);
    appetizers.appendChild(appetizer_1);
    appetizers.appendChild(appetizer_2);
    appetizers.appendChild(appetizer_3);

    const entrees = document.createElement("div");
    entrees.id = "entrees";
    entrees.classList.add("sub_menu");
    entrees.innerHTML = "entrees"

    const drinks = document.createElement("div");
    drinks.id = "drinks";
    drinks.classList.add("sub_menu");
    drinks.innerHTML = "drinks"

    const desserts = document.createElement("div");
    desserts.id = "desserts";
    desserts.classList.add("sub_menu");
    desserts.innerHTML = "desserts"

    container.appendChild(appetizers);
    container.appendChild(entrees);
    container.appendChild(drinks);
    container.appendChild(desserts);


    content.appendChild(container);
}