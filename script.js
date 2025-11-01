let all_main_courses = [
    {
        "name":"Lasagne",
        "description": "Lasagne Bolognese nach traditionellem Rezept",
        "price": 20,
        "img": "lasagna.jpg"
    },
    {
        "name": "Marillenknödel",
        "description": "Mit Topfenteig",
        "price": 18,
        "img": "Marillenknödel-5839897_640.jpg"
    }
];

let shopping_cart = [
    {
        "name":"Lasagne",
        "number": 0
    },
    {
        "name": "Marillenknödel",
        "number": 0
    }
];
    
function init(){
    renderMain_courses();
    renderShopping_cart();
}


function renderMain_courses(){
    let refMain_courses = document.getElementById('main_courses');
    refMain_courses.innerHTML = "";
    
    for (let main_coursindex = 0; main_coursindex < all_main_courses.length; main_coursindex++) {
        
        refMain_courses.innerHTML += maincoursTamplate(main_coursindex);
    }
}

function renderShopping_cart(){
    let refShopping_cart = document.getElementById('shopping_cart');
    refShopping_cart.innerHTML = "";
    
        for (let shopping_cartindex = 0; shopping_cartindex < shopping_cart.length; shopping_cartindex++) {
            if(shopping_cart[shopping_cartindex].number != 0){
             refShopping_cart.innerHTML += Shopping_cartTamplate(shopping_cartindex);
            }
            } 
}

function pushtoShopping_cart(main_coursindex) {
    shopping_cart[main_coursindex].number += 1;
    renderShopping_cart()
}

