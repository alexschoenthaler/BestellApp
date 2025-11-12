/**
 * Initialization function called when the page loads
 */
function init(){
    getfromLocalStorage();
    renderMain_courses();
    renderShopping_cart();
    renderShopping_cart_mobile();
    renderFull_price();
}

/**
 * Saves the current shopping cart state to local storage
 */
function savetoLocalStorage(){
    localStorage.setItem("Lasagne", JSON.stringify(SHOPPING_CART[0].number));
    localStorage.setItem("Marillenknödel", JSON.stringify(SHOPPING_CART[1].number));
    localStorage.setItem("Sushi Platte", JSON.stringify(SHOPPING_CART[2].number));
    localStorage.setItem("Spaggetti alla Scoglia", JSON.stringify(SHOPPING_CART[3].number));
    localStorage.setItem("Pizza Margherita", JSON.stringify(SHOPPING_CART[4].number));
    localStorage.setItem("Pizza Diavola", JSON.stringify(SHOPPING_CART[5].number));
    localStorage.setItem("Pizza Vegetariana", JSON.stringify(SHOPPING_CART[6].number));
    localStorage.setItem("Pommes", JSON.stringify(SHOPPING_CART[7].number));
    localStorage.setItem("Gekochtes Gemüse", JSON.stringify(SHOPPING_CART[8].number));
    localStorage.setItem("Pilze", JSON.stringify(SHOPPING_CART[9].number));
}

/**
 * Retrieves the shopping cart state from local storage
 */
function getfromLocalStorage(){

    for (let localstorageindex = 0; localstorageindex < SHOPPING_CART.length; localstorageindex++) {
        let reffromlocalstorage = JSON.parse(localStorage.getItem(SHOPPING_CART[localstorageindex].name));
        if ( reffromlocalstorage > 0) {
           
           SHOPPING_CART[localstorageindex].number = reffromlocalstorage;
        }     
    } 
}

/**
 * Renders the main courses on the page
 */
function renderMain_courses(){
    let refMain_courses = document.getElementById('main_courses');
    refMain_courses.innerHTML = "";
    
    for (let main_coursindex = 0; main_coursindex < ALL_DISHES.length; main_coursindex++) {
        if (main_coursindex == 7) {
            refMain_courses.innerHTML+= '<h2 id="all_side_dish">Beilagen</h2>';
        }
        refMain_courses.innerHTML += dishesTamplate(main_coursindex);
    }
}

/**
 * Renders the shopping cart on the page
 */
function renderShopping_cart(){
    let refShopping_cart = document.getElementById('shopping_cart');
    let refFullprice = document.getElementById('full_price'); 
    refShopping_cart.innerHTML = "";
    
        for (let shopping_cartindex = 0; shopping_cartindex < SHOPPING_CART.length; shopping_cartindex++) {
            if(SHOPPING_CART[shopping_cartindex].number != 0){
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
    
        for (let shopping_cartindex = 0; shopping_cartindex < SHOPPING_CART.length; shopping_cartindex++) {
            if(SHOPPING_CART[shopping_cartindex].number != 0){
             refShopping_cart.innerHTML += Shopping_cart_Mobile_Tamplate(shopping_cartindex);
                }
            } 
    refFullprice.innerHTML = calculatefullprice() + "€";
}

/**
 * Renders only the Shoppingcart Element with the index new 
 */
function renderShopping_cart_element(shopping_cartindex){
    let refShoppingAmountID = document.getElementById('shoppingAmountID'+ shopping_cartindex);
    let refShoppingPriceID = document.getElementById('shoppingPriceID' + shopping_cartindex);
    refShoppingAmountID.innerHTML = SHOPPING_CART[shopping_cartindex].number;
    refShoppingPriceID.innerHTML = price_dish(shopping_cartindex) + "€";
    renderFull_price();
}

/**
 * Renders only the Shoppingcart Mobile Element with the index new 
 */
function renderShopping_cart_element_mobile(shopping_cartindex){
    let refShoppingAmountID = document.getElementById('shoppingAmountID_mobile'+ shopping_cartindex);
    let refShoppingPriceID = document.getElementById('shoppingPriceID_mobile' + shopping_cartindex);
    refShoppingAmountID.innerHTML = SHOPPING_CART[shopping_cartindex].number;
    refShoppingPriceID.innerHTML = price_dish(shopping_cartindex) + "€";
    renderFull_price();
}

/**
 * Increases the quantity of a dish in the shopping cart 
 */
function increase_amountShopping_cart(shopping_cartindex){
    let refShopping_cart = document.getElementById('shopping_cart');
    let refShopping_cart_mobile = document.getElementById('shopping_cart_mobile');
    if (SHOPPING_CART[shopping_cartindex].number > 0){
        SHOPPING_CART[shopping_cartindex].number += 1;
        renderShopping_cart_element(shopping_cartindex);
        renderShopping_cart_element_mobile(shopping_cartindex);
    }
    if (SHOPPING_CART[shopping_cartindex].number == 0){
        SHOPPING_CART[shopping_cartindex].number += 1;
        refShopping_cart.innerHTML += Shopping_cartTamplate(shopping_cartindex);
        refShopping_cart_mobile.innerHTML += Shopping_cart_Mobile_Tamplate(shopping_cartindex);
        renderFull_price();
    }
}

/**
 * Decreases the quantity of a dish in the shopping cart
 */
function decrease_amountShopping_cart(shopping_cartindex){
    SHOPPING_CART[shopping_cartindex].number -= 1;
    renderShopping_cart();
    renderShopping_cart_mobile();
    renderFull_price();
}

/**
 * Calculates the price of a specific dish in the shopping cart
 */
function price_dish(shopping_cartindex){
    let amaount = 0;
    amaount = SHOPPING_CART[shopping_cartindex].number * ALL_DISHES[shopping_cartindex].price;
    return amaount;      
}

/**
 * Clears the quantity of a specific dish in the shopping cart
 */
function clear_price_dish(shopping_cartindex){
    SHOPPING_CART[shopping_cartindex].number = 0
    savetoLocalStorage();
    renderShopping_cart();
    renderShopping_cart_mobile();
    renderFull_price();
}

/**
 * Calculates the total price of all items in the shopping cart
 */
function calculatefullprice(){
    let amaount = 0;
    for (let shopping_cartindex = 0; shopping_cartindex < SHOPPING_CART.length; shopping_cartindex++) {
         amaount += SHOPPING_CART[shopping_cartindex].number * ALL_DISHES[shopping_cartindex].price;
        } 
    return amaount;
}

/**
 * Render the total price of all items in the shopping cart
 */
function renderFull_price(){
    calculatefullprice();
    let refShoppingCartMobileNav = document.getElementById('shoppingCartMobileNav');
    let refFullprice = document.getElementById('full_price');
    refShoppingCartMobileNav.innerHTML = "Warenkorb " + calculatefullprice() + "€";
    refFullprice.innerHTML = calculatefullprice() + "€";
}

/**
 * Clears the entire shopping cart
 */
function clear_cart(){
    for (let shopping_cartindex = 0; shopping_cartindex < SHOPPING_CART.length; shopping_cartindex++) {
          SHOPPING_CART[shopping_cartindex].number = 0;
        } 
    savetoLocalStorage();
    renderShopping_cart();
    renderShopping_cart_mobile();
    renderFull_price();
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
