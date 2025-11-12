/**
 * Database of all main courses
 */
const all_main_courses = [
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
    },
    {
        "name": "Pizza Margherita",
        "description": "Der italienische Klassiker",
        "price": 10,
        "img": "magerita.jpg"
    },
    {
        "name": "Pizza Diavola",
        "description": "Scharfe Pizza mit Salami",
        "price": 11,
        "img": "salami-pizza-6593465_1280.jpg"
    },
    {
        "name": "Pizza Vegetariana",
        "description": "Vegetarische Pizza mit frischem Gemüse",
        "price": 12,
        "img": "gemüse_pizza.jpg"
    }
];

const all_side_courses = [
     {
        "name":"Pommes",
        "description": "Frietierte Kartoffeln",
        "price": 5,
        "img": "lasagna.jpg"
    },
    {
        "name": "Gemüse",
        "description": "Frische Tomaten, Paprika und Melanzane",
        "price": 7,
        "img": "Marillenknödel-5839897_640.jpg"
    },
    {
        "name": "Pilze",
        "description": "Champingions, Pfifferlinge und Steinpilze",
        "price": 8,
        "img": "black-plate-9137133_1280.jpg"
    },
]

/**
 * Shopping cart state
 */
const shopping_cart = [
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
    },
    {
        "name": "Pizza Margherita",
        "number": 0
    },
    {
        "name": "Pizza Diavola",
        "number": 0
    },
    {
        "name": "Pizza Vegetariana",
        "number": 0
    }
];