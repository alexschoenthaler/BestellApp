
function maincoursTamplate(main_coursindex){
    return `<div class = "maincours_element">
                <div>
                    <h3>${all_main_courses[main_coursindex].name}</h3>
                    <p>${all_main_courses[main_coursindex].description}</p>
                    <p>${all_main_courses[main_coursindex].price +"€"}</p>
                    <img class = "round_button" src="./assets/Icons/icons8-plus-50_white.png" alt="Plus" onclick= "increase_amountShopping_cart(${main_coursindex})">
                </div>
                <div class = "maincours_img_container">
                    <img src="./assets/imiges/${all_main_courses[main_coursindex].img}" alt="">
                </div>
            </div>`
}

function Shopping_cartTamplate(shopping_cartindex){
    return `<p class ="hedline_dish_cart">${shopping_cart[shopping_cartindex].name}</p>
            <div class = "shopping_cart_amaount">
                <img onclick ="increase_amountShopping_cart(${shopping_cartindex})" class ="round_button" src="./assets/Icons/icons8-plus-50.png" alt="Plus">
                <p>${shopping_cart[shopping_cartindex].number}</p>
                <img onclick ="decrease_amountShopping_cart(${shopping_cartindex})" class ="round_button" src="./assets/Icons/icons8-minus-50.png" alt="Minus">
            </div>`
}
