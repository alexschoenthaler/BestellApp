
function dishesTamplate(dishindex){
    return `<div class = "dish_element">
                <div>
                    <h3>${ALL_DISHES[dishindex].name}</h3>
                    <p>${ALL_DISHES[dishindex].description}</p>
                    <p>${ALL_DISHES[dishindex].price +"€"}</p>
                    <img class = "round_button add_shoppingcard" src="./assets/Icons/icons8-plus-50_white.png" alt="Plus" onclick= "increase_amountShopping_cart(${dishindex}), savetoLocalStorage()">
                </div>
                <div class = "dish_img_container">
                    <img src="./assets/imiges/${ALL_DISHES[dishindex].img}" alt="Das dazugehörige Bild">
                </div>
            </div>`
}

function Shopping_cartTamplate(shopping_cartindex){
    return `<div id = "shoppingID${shopping_cartindex}">
                <p class ="hedline_dish_cart">${SHOPPING_CART[shopping_cartindex].name}</p>
                <div class = "shopping_cart_amaount">
                    <img onclick ="increase_amountShopping_cart(${shopping_cartindex}), savetoLocalStorage()" class ="round_button" src="./assets/Icons/icons8-plus-50.png" alt="Plus">
                    <p id = "shoppingAmountID${shopping_cartindex}">${SHOPPING_CART[shopping_cartindex].number}</p>
                    <img onclick ="decrease_amountShopping_cart(${shopping_cartindex}), savetoLocalStorage()" class ="round_button" src="./assets/Icons/icons8-minus-50.png" alt="Minus">
                    <p id = "shoppingPriceID${shopping_cartindex}">${price_dish(shopping_cartindex)} € </p>
                    <img onclick = "clear_price_dish(${shopping_cartindex})" src="./assets/Icons/icons8-müll-32.png" class = "delete_dish" alt="Löschen">
                </div>
            </div>
          `
}

function Shopping_cart_Mobile_Tamplate(shopping_cartindex){
    return `<div id = "shoppingID_mobile${shopping_cartindex}">
                <p class ="hedline_dish_cart">${SHOPPING_CART[shopping_cartindex].name}</p>
                <div class = "shopping_cart_amaount">
                    <img onclick ="increase_amountShopping_cart(${shopping_cartindex}), savetoLocalStorage()" class ="round_button" src="./assets/Icons/icons8-plus-50.png" alt="Plus">
                    <p id = "shoppingAmountID_mobile${shopping_cartindex}">${SHOPPING_CART[shopping_cartindex].number}</p>
                    <img onclick ="decrease_amountShopping_cart(${shopping_cartindex}), savetoLocalStorage()" class ="round_button" src="./assets/Icons/icons8-minus-50.png" alt="Minus">
                    <p id = "shoppingPriceID_mobile${shopping_cartindex}">${price_dish(shopping_cartindex)} € </p>
                    <img onclick = "clear_price_dish(${shopping_cartindex})" src="./assets/Icons/icons8-müll-32.png" class = "delete_dish" alt="Löschen">
                </div>
            </div>
          `
}