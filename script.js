let all_main_courses = [
    {
        "name":"Lasagne",
        "description": "Lasagne Bolognese nach traditionellem Rezept",
        "price": 15,
        "img": "lasagna.jpg"
    },
    {
        "name": "Marillenknödel",
        "description": "Mit Topfenteig",
        "price": 18,
        "img": "Marillenknödel-5839897_640.jpg"
    },
    {
        "name": "Sushi Platte",
        "description": "11 Stück",
        "price": 22,
        "img": "black-plate-9137133_1280.jpg"
    },
    {
        "name": "Spaggetti alla Scoglia",
        "description": "Nudeln mit Meresfrüchte",
        "price": 17,
        "img": "spaghetti-1988004_640.jpg"
    }
];

let shopping_cart = [
    {
        "name":"Lasagne",
        "number": 0,
    },
    {
        "name": "Marillenknödel",
        "number": 0,
    },
    {
        "name": "Sushi Platte",
        "number": 0
    },
    {
        "name": "Spaggetti alla Scoglia",
        "number": 0
    }
];
    
function init(){
    getfromLocalStorage();
    renderMain_courses();
    renderShopping_cart();
    renderShopping_cart_mobile();
}

function savetoLocalStorage() {
    localStorage.setItem("Lasagne", JSON.stringify(shopping_cart[0].number));
    localStorage.setItem("Marillenknödel", JSON.stringify(shopping_cart[1].number));
    localStorage.setItem("Sushi Platte", JSON.stringify(shopping_cart[2].number));
    localStorage.setItem("Spaggetti alla Scoglia", JSON.stringify(shopping_cart[3].number));
}

function getfromLocalStorage() {

    for (let localstorageindex = 0; localstorageindex < shopping_cart.length; localstorageindex++) {
        let reffromlocalstorage = JSON.parse(localStorage.getItem(shopping_cart[localstorageindex].name));
        if ( reffromlocalstorage > 0) {
           
           shopping_cart[localstorageindex].number = reffromlocalstorage;
        }     
    } 
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
    let refFullprice = document.getElementById('full_price'); 
    refShopping_cart.innerHTML = "";
    
        for (let shopping_cartindex = 0; shopping_cartindex < shopping_cart.length; shopping_cartindex++) {
            if(shopping_cart[shopping_cartindex].number != 0){
                refShopping_cart.innerHTML += Shopping_cartTamplate(shopping_cartindex);
                }
            } 

    refFullprice.innerHTML = calculatefullprice() + "€";
    
}

function renderShopping_cart_mobile(){
    let refShopping_cart = document.getElementById('shopping_cart_mobile');
    let refFullprice = document.getElementById('full_price_mobile');
    refShopping_cart.innerHTML = "";
    
        for (let shopping_cartindex = 0; shopping_cartindex < shopping_cart.length; shopping_cartindex++) {
            if(shopping_cart[shopping_cartindex].number != 0){
             refShopping_cart.innerHTML += Shopping_cartTamplate(shopping_cartindex);
                }
            } 
    refFullprice.innerHTML = calculatefullprice() + "€";
}

function increase_amountShopping_cart(index) {
    shopping_cart[index].number += 1;
    renderShopping_cart();
    renderShopping_cart_mobile();
    calculatefullprice();
}

function decrease_amountShopping_cart(index) {
    shopping_cart[index].number -= 1;
    renderShopping_cart();
    renderShopping_cart_mobile();
    calculatefullprice();
}

function price_dish(shopping_cartindex) {
    let amaount = 0;
    amaount = shopping_cart[shopping_cartindex].number * all_main_courses[shopping_cartindex].price;
    return amaount;      
}

function clear_price_dish(shopping_cartindex) {
    shopping_cart[shopping_cartindex].number = 0
    savetoLocalStorage();
    renderShopping_cart();
    renderShopping_cart_mobile();
    calculatefullprice();
}

function calculatefullprice() {
    let amaount = 0;
    for (let shopping_cartindex = 0; shopping_cartindex < shopping_cart.length; shopping_cartindex++) {
         amaount += shopping_cart[shopping_cartindex].number * all_main_courses[shopping_cartindex].price;
        } 
    return amaount;
}

function clear_cart() {
    for (let shopping_cartindex = 0; shopping_cartindex < shopping_cart.length; shopping_cartindex++) {
          shopping_cart[shopping_cartindex].number = 0;
        } 
    savetoLocalStorage();
    renderShopping_cart();
    renderShopping_cart_mobile();
    calculatefullprice();
}
