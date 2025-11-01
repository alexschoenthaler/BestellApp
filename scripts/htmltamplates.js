
function maincoursTamplate(main_coursindex){
    return `<div class = "maincours_element">
                <div>
                    <h3>${all_main_courses[main_coursindex].name}</h3>
                    <p>${all_main_courses[main_coursindex].description}</p>
                    <p>${all_main_courses[main_coursindex].price +"€"}</p>
                    <button onclick= "pushtoShopping_cart(${main_coursindex})">+</button>
                </div>
                <div>
                    <img src="./assets/imiges/${all_main_courses[main_coursindex].img}" alt="">
                </div>
            </div>`
}

function Shopping_cartTamplate(shopping_cartindex){
    return `<div>
                <p>${shopping_cart[shopping_cartindex].name}</p>
                <div class = "shopping_cart_amaount">
                    <button>+</button>
                    <p>${shopping_cart[shopping_cartindex].number}</p>
                    <button>-</button>
                <div>
            </div>`
}
