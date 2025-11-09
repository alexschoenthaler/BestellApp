/**
 * Initialization function called when the page loads
 */
function init(){
    getfromLocalStorage();
    renderMain_courses();
    renderShopping_cart();
    renderShopping_cart_mobile();
}

/**
 * Saves the current shopping cart state to local storage
 */
function savetoLocalStorage(){
    localStorage.setItem("Lasagne", JSON.stringify(shopping_cart[0].number));
    localStorage.setItem("Marillenknödel", JSON.stringify(shopping_cart[1].number));
    localStorage.setItem("Sushi Platte", JSON.stringify(shopping_cart[2].number));
    localStorage.setItem("Spaggetti alla Scoglia", JSON.stringify(shopping_cart[3].number));
    localStorage.setItem("Pizza Margherita", JSON.stringify(shopping_cart[4].number));
    localStorage.setItem("Pizza Diavola", JSON.stringify(shopping_cart[5].number));
    localStorage.setItem("Pizza Vegetariana", JSON.stringify(shopping_cart[6].number));
}

/**
 * Retrieves the shopping cart state from local storage
 */
function getfromLocalStorage(){

    for (let localstorageindex = 0; localstorageindex < shopping_cart.length; localstorageindex++) {
        let reffromlocalstorage = JSON.parse(localStorage.getItem(shopping_cart[localstorageindex].name));
        if ( reffromlocalstorage > 0) {
           
           shopping_cart[localstorageindex].number = reffromlocalstorage;
        }     
    } 
}

/**
 * Renders the main courses on the page
 */
function renderMain_courses(){
    let refMain_courses = document.getElementById('main_courses');
    refMain_courses.innerHTML = "";
    
    for (let main_coursindex = 0; main_coursindex < all_main_courses.length; main_coursindex++) {
        
        refMain_courses.innerHTML += maincoursTamplate(main_coursindex);
    }
}

/**
 * Renders the shopping cart on the page
 */
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

/**
 * Renders the mobile version of the shopping cart
 */
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

/**
 * Increases the quantity of a dish in the shopping cart 
 */
function increase_amountShopping_cart(index){
    shopping_cart[index].number += 1;
    renderShopping_cart();
    renderShopping_cart_mobile();
    calculatefullprice();
}

/**
 * Decreases the quantity of a dish in the shopping cart
 */
function decrease_amountShopping_cart(index){
    shopping_cart[index].number -= 1;
    renderShopping_cart();
    renderShopping_cart_mobile();
    calculatefullprice();
}

/**
 * Calculates the price of a specific dish in the shopping cart
 */
function price_dish(shopping_cartindex){
    let amaount = 0;
    amaount = shopping_cart[shopping_cartindex].number * all_main_courses[shopping_cartindex].price;
    return amaount;      
}

/**
 * Clears the quantity of a specific dish in the shopping cart
 */
function clear_price_dish(shopping_cartindex){
    shopping_cart[shopping_cartindex].number = 0
    savetoLocalStorage();
    renderShopping_cart();
    renderShopping_cart_mobile();
    calculatefullprice();
}

/**
 * Calculates the total price of all items in the shopping cart
 */
function calculatefullprice(){
    let amaount = 0;
    for (let shopping_cartindex = 0; shopping_cartindex < shopping_cart.length; shopping_cartindex++) {
         amaount += shopping_cart[shopping_cartindex].number * all_main_courses[shopping_cartindex].price;
        } 
    return amaount;
}

/**
 * Clears the entire shopping cart
 */
function clear_cart(){
    for (let shopping_cartindex = 0; shopping_cartindex < shopping_cart.length; shopping_cartindex++) {
          shopping_cart[shopping_cartindex].number = 0;
        } 
    savetoLocalStorage();
    renderShopping_cart();
    renderShopping_cart_mobile();
    calculatefullprice();
}

/**
 * Handles the order submission process
 */
function ordern(ID){
    let refMessage_box = document.getElementById(ID)
    let amaount = calculatefullprice();
    if(amaount > 0){
    refMessage_box.innerHTML = "Bestellung wurde vorgemerkt, Vielen Dank!"
    setTimeout(()=>{                    
    refMessage_box.innerHTML = "";
    },2000) 
    }
    else{
    refMessage_box.innerHTML = "Bitte, Bestellung auswählen"
    setTimeout(()=>{                    
    refMessage_box.innerHTML = "";
    },2000) 
    }
}
