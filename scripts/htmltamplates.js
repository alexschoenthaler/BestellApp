
function maincoursTamplate(main_coursindex){
    return `<div class = "maincours_element">
                <div>
                    <h3>${all_main_courses[main_coursindex].name}</h3>
                    <p>${all_main_courses[main_coursindex].description}</p>
                    <p>${all_main_courses[main_coursindex].price +"€"}</p>
                    <img class = "round_button add_shoppingcard" src="./assets/Icons/icons8-plus-50_white.png" alt="Plus" onclick= "increase_amountShopping_cart(${main_coursindex}), savetoLocalStorage()">
                </div>
                <div class = "maincours_img_container">
                    <img src="./assets/imiges/${all_main_courses[main_coursindex].img}" alt="Das dazugehörige Bild">
                </div>
            </div>`
}

function Shopping_cartTamplate(shopping_cartindex){
    return `<div id = "shoppingID${shopping_cartindex}">
                <p class ="hedline_dish_cart">${shopping_cart[shopping_cartindex].name}</p>
                <div class = "shopping_cart_amaount">
                    <img onclick ="increase_amountShopping_cart(${shopping_cartindex}), savetoLocalStorage()" class ="round_button" src="./assets/Icons/icons8-plus-50.png" alt="Plus">
                    <p id = "shoppingAmountID${shopping_cartindex}">${shopping_cart[shopping_cartindex].number}</p>
                    <img onclick ="decrease_amountShopping_cart(${shopping_cartindex}), savetoLocalStorage()" class ="round_button" src="./assets/Icons/icons8-minus-50.png" alt="Minus">
                    <p id = "shoppingPriceID${shopping_cartindex}">${price_dish(shopping_cartindex)} € </p>
                    <img onclick = "clear_price_dish(${shopping_cartindex})" src="./assets/Icons/icons8-müll-32.png" class = "delete_dish" alt="Löschen">
                </div>
            </div>
          `
}
