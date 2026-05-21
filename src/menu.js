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

    const bread = document.createElement("p");
    bread.classList.add("sub_menu_item_item");
    bread.innerHTML = "Bread";
    const bread_price = document.createElement("p");
    bread_price.classList.add("price");
    bread_price.innerHTML = "$4.25";
    appetizer_1.appendChild(bread);
    appetizer_1.appendChild(bread_price);

    const salad = document.createElement("p");
    salad.classList.add("sub_menu_item_item");
    salad.innerHTML = "Salad";
    const salad_price = document.createElement("p");
    salad_price.classList.add("price");
    salad_price.innerHTML = "$9.75";
    appetizer_2.appendChild(salad);
    appetizer_2.appendChild(salad_price);

    const soup = document.createElement("p");
    soup.classList.add("sub_menu_item_item");
    soup.innerHTML = "Soup";
    const soup_price = document.createElement("p");
    soup_price.classList.add("price");
    soup_price.innerHTML = "$6.50";
    appetizer_3.appendChild(soup);
    appetizer_3.appendChild(soup_price);

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

    const hamburger = document.createElement("p");
    hamburger.classList.add("sub_menu_item_item");
    hamburger.innerHTML = "Hamburger and Fries";
    const hamburger_price = document.createElement("p");
    hamburger_price.classList.add("price");
    hamburger_price.innerHTML = "$15.50";
    entree_1.appendChild(hamburger);
    entree_1.appendChild(hamburger_price);

    const spaghetti = document.createElement("p");
    spaghetti.classList.add("sub_menu_item_item");
    spaghetti.innerHTML = "Spaghetti";
    const spaghetti_price = document.createElement("p");
    spaghetti_price.classList.add("price");
    spaghetti_price.innerHTML = "$12.00";
    entree_2.appendChild(spaghetti);
    entree_2.appendChild(spaghetti_price);

    const burrito = document.createElement("p");
    burrito.classList.add("sub_menu_item_item");
    burrito.innerHTML = "Burrito";
    const burrito_price = document.createElement("p");
    burrito_price.classList.add("price");
    burrito_price.innerHTML = "$13.50";
    entree_3.appendChild(burrito);
    entree_3.appendChild(burrito_price);

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

    const coffee = document.createElement("p");
    coffee.classList.add("sub_menu_item_item");
    coffee.innerHTML = "Coffee";
    const coffee_price = document.createElement("p");
    coffee_price.classList.add("price");
    coffee_price.innerHTML = "$2.00";
    drink_1.appendChild(coffee);
    drink_1.appendChild(coffee_price);

    const tea = document.createElement("p");
    tea.classList.add("sub_menu_item_item");
    tea.innerHTML = "Tea";
    const tea_price = document.createElement("p");
    tea_price.classList.add("price");
    tea_price.innerHTML = "$2.00";
    drink_2.appendChild(tea);
    drink_2.appendChild(tea_price);

    const water = document.createElement("p");
    water.classList.add("sub_menu_item_item");
    water.innerHTML = "Water";
    const water_price = document.createElement("p");
    water_price.classList.add("price");
    water_price.innerHTML = "$0.75";
    drink_3.appendChild(water);
    drink_3.appendChild(water_price);

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

    const ice_cream = document.createElement("p");
    ice_cream.classList.add("sub_menu_item_item");
    ice_cream.innerHTML = "Ice Cream";
    const ice_cream_price = document.createElement("p");
    ice_cream_price.classList.add("price");
    ice_cream_price.innerHTML = "$5.25";
    dessert_1.appendChild(ice_cream);
    dessert_1.appendChild(ice_cream_price);

    const cake = document.createElement("p");
    cake.classList.add("sub_menu_item_item");
    cake.innerHTML = "Cake";
    const cake_price = document.createElement("p");
    cake_price.classList.add("price");
    cake_price.innerHTML = "$4.50";
    dessert_2.appendChild(cake);
    dessert_2.appendChild(cake_price);

    const pie = document.createElement("p");
    pie.classList.add("sub_menu_item_item");
    pie.innerHTML = "Pie";
    const pie_price = document.createElement("p");
    pie_price.classList.add("price");
    pie_price.innerHTML = "$3.00";
    dessert_3.appendChild(pie);
    dessert_3.appendChild(pie_price);

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