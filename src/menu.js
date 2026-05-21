export function loadMenu() {
    const content = document.querySelector("#content");
    const container = document.createElement("div");
    container.id = "menu_container";

    const appetizers = document.createElement("div");
    appetizers.id = "appetizers";
    appetizers.classList.add("sub_menu");

    const appetizer_title = document.createElement("div");
    const appetizer_1 = document.createElement("div");
    const appetizer_2 = document.createElement("div");
    const appetizer_3 = document.createElement("div");
    appetizer_title.classList.add("sub_menu_title");
    const appetizer_title_p = document.createElement("p");
    appetizer_title_p.innerHTML = "Appetizers";
    appetizer_title.appendChild(appetizer_title_p)
    appetizer_1.classList.add("appetizer", "sub_menu_item");
    appetizer_2.classList.add("appetizer", "sub_menu_item");
    appetizer_3.classList.add("appetizer", "sub_menu_item");
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

    const entree_title = document.createElement("div");
    const entree_1 = document.createElement("div");
    const entree_2 = document.createElement("div");
    const entree_3 = document.createElement("div");
    entree_title.classList.add("sub_menu_title");
    const entree_title_p = document.createElement("p");
    entree_title_p.innerHTML = "Entrees";
    entree_title.appendChild(entree_title_p)
    entree_1.classList.add("entree", "sub_menu_item");
    entree_2.classList.add("entree", "sub_menu_item");
    entree_3.classList.add("entree", "sub_menu_item");
    entree_1.innerHTML = "entree1";
    entree_2.innerHTML = "entree2";
    entree_3.innerHTML = "entree3";

    entrees.appendChild(entree_title);
    entrees.appendChild(entree_1);
    entrees.appendChild(entree_2);
    entrees.appendChild(entree_3);

    const drinks = document.createElement("div");
    drinks.id = "drinks";
    drinks.classList.add("sub_menu");

    const drink_title = document.createElement("div");
    const drink_1 = document.createElement("div");
    const drink_2 = document.createElement("div");
    const drink_3 = document.createElement("div");
    drink_title.classList.add("sub_menu_title");
    const drink_title_p = document.createElement("p");
    drink_title_p.innerHTML = "Drinks";
    drink_title.appendChild(drink_title_p)
    drink_1.classList.add("drink", "sub_menu_item");
    drink_2.classList.add("drink", "sub_menu_item");
    drink_3.classList.add("drink", "sub_menu_item");
    drink_1.innerHTML = "drink1";
    drink_2.innerHTML = "drink2";
    drink_3.innerHTML = "drink3";

    drinks.appendChild(drink_title);
    drinks.appendChild(drink_1);
    drinks.appendChild(drink_2);
    drinks.appendChild(drink_3);

    const desserts = document.createElement("div");
    desserts.id = "desserts";
    desserts.classList.add("sub_menu");

    const dessert_title = document.createElement("div");
    const dessert_1 = document.createElement("div");
    const dessert_2 = document.createElement("div");
    const dessert_3 = document.createElement("div");
    dessert_title.classList.add("sub_menu_title");
    const dessert_title_p = document.createElement("p");
    dessert_title_p.innerHTML = "Desserts";
    dessert_title.appendChild(dessert_title_p)
    dessert_1.classList.add("dessert", "sub_menu_item");
    dessert_2.classList.add("dessert", "sub_menu_item");
    dessert_3.classList.add("dessert", "sub_menu_item");
    dessert_1.innerHTML = "dessert1";
    dessert_2.innerHTML = "dessert2";
    dessert_3.innerHTML = "dessert3";

    desserts.appendChild(dessert_title);
    desserts.appendChild(dessert_1);
    desserts.appendChild(dessert_2);
    desserts.appendChild(dessert_3);

    container.appendChild(appetizers);
    container.appendChild(entrees);
    container.appendChild(drinks);
    container.appendChild(desserts);


    content.appendChild(container);
}