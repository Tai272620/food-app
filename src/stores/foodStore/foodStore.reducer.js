const initState = [
    {
        id: 1,
        name: "King Jr Meal 1",
        url: "../image/combo/combo_01.jpg",
        price: 10,
        type: "combo"
    },
    {
        id: 2,
        name: "King Jr Meal 2",
        url: "../image/combo/combo_02.jpg",
        price: 10,
        type: "combo"
    },
    {
        id: 3,
        name: "King Jr Meal 3",
        url: "../image/combo/combo_03.jpg",
        price: 10,
        type: "combo"
    },
    {
        id: 4,
        name: "Hello Summer 1",
        url: "../image/combo/combo_04.jpg",
        price: 10,
        type: "combo"
    },
    {
        id: 5,
        name: "Hello Summer 2",
        url: "../image/combo/combo_05.jpg",
        price: 10,
        type: "combo"
    },
    {
        id: 6,
        name: "Hello Summer 3",
        url: "../image/combo/combo_06.jpg",
        price: 10,
        type: "combo"
    },
    {
        id: 7,
        name: "Combo Carrot Burger",
        url: "../image/combo/combo_07.jpg",
        price: 10,
        type: "combo"
    },
    {
        id: 8,
        name: "Combo Extreme Cheesy Whopper",
        url: "../image/combo/combo_08.jpg",
        price: 10,
        type: "combo"
    },
    {
        id: 9,
        name: "Tropical Seafood Pizza",
        url: "../image/pizza/Pizza_01.jpg",
        price: 10,
        type: "pizza"
    },
    {
        id: 10,
        name: "Seafood Pizza with Spicy Sauce",
        url: "../image/pizza/Pizza_02.jpg",
        price: 10,
        type: "pizza"
    },
    {
        id: 11,
        name: "Pizza Shrimp Grilled Pepper",
        url: "../image/pizza/Pizza_03.jpg",
        price: 10,
        type: "pizza"
    },
    {
        id: 12,
        name: "Pizza Beef And Seafood",
        url: "../image/pizza/Pizza_04.jpg",
        price: 10,
        type: "pizza"
    },
    {
        id: 13,
        name: "Pizza Beef And Seafood",
        url: "../image/pizza/Pizza_04.jpg",
        price: 10,
        type: "pizza"
    },
    {
        id: 14,
        name: "Pizza Beef And Seafood",
        url: "../image/pizza/Pizza_04.jpg",
        price: 10,
        type: "pizza"
    },
    {
        id: 15,
        name: "Pizza Beef And Seafood",
        url: "../image/pizza/Pizza_04.jpg",
        price: 10,
        type: "pizza"
    },
    {
        id: 16,
        name: "Pizza Beef And Seafood",
        url: "../image/pizza/Pizza_04.jpg",
        price: 10,
        type: "pizza"
    },
    {
        id: 17,
        name: "Extreme Cheese Whopper JR",
        url: "../image/burger/burger_01.jpg",
        price: 10,
        type: "burger"
    },
    {
        id: 18,
        name: "Whopper JR",
        url: "../image/burger/burger_02.jpg",
        price: 10,
        type: "burger"
    },
    {
        id: 19,
        name: "Whopper Burger",
        url: "../image/burger/burger_03.jpg",
        price: 10,
        type: "burger"
    },
    {
        id: 20,
        name: "Fish Burger",
        url: "../image/burger/burger_04.jpg",
        price: 10,
        type: "burger"
    },
    {
        id: 21,
        name: "Grilled Onion Burger",
        url: "../image/burger/burger_05.jpg",
        price: 10,
        type: "burger"
    },
    {
        id: 22,
        name: "BBQ Chicken Cheese Burger",
        url: "../image/burger/burger_06.jpg",
        price: 10,
        type: "burger"
    },
    {
        id: 23,
        name: "Spicy Tendercrisp Burger",
        url: "../image/burger/burger_07.jpg",
        price: 10,
        type: "burger"
    },
    {
        id: 24,
        name: "Tendergrill Burger",
        url: "../image/burger/burger_08.jpg",
        price: 10,
        type: "burger"
    },
    {
        id: 25,
        name: "Chicken Crispy",
        url: "../image/chicken/chicken_01.jpg",
        price: 10,
        type: "chicken"
    },
    {
        id: 26,
        name: "Mix Wing 4pcs",
        url: "../image/chicken/chicken_02.jpg",
        price: 10,
        type: "chicken"
    },
    {
        id: 27,
        name: "Mix Wing 6pcs",
        url: "../image/chicken/chicken_03.jpg",
        price: 10,
        type: "chicken"
    },
    {
        id: 28,
        name: "Mix Wing 2pcs",
        url: "../image/chicken/chicken_04.jpg",
        price: 10,
        type: "chicken"
    },
    {
        id: 29,
        name: "Chicken Flamin",
        url: "../image/chicken/chicken_05.jpg",
        price: 10,
        type: "chicken"
    },
    {
        id: 30,
        name: "Chicken BBQ",
        url: "../image/chicken/chicken_06.jpg",
        price: 10,
        type: "chicken"
    },
    {
        id: 31,
        name: "Combo Chicken Flamin 2PCS",
        url: "../image/chicken/chicken_07.jpg",
        price: 10,
        type: "chicken"
    },
    {
        id: 32,
        name: "Combo Chicken BBQ 2PCS",
        url: "../image/chicken/chicken_08.jpg",
        price: 10,
        type: "chicken"
    },
    {
        id: 33,
        name: "BBQ Chicken Wing Rice",
        url: "../image/dinner/dinner_01.jpg",
        price: 10,
        type: "dinner"
    },
    {
        id: 34,
        name: "Combo Grilled Beef Rice Lemongrass Chili Sauce",
        url: "../image/dinner/dinner_02.jpg",
        price: 10,
        type: "dinner"
    },
    {
        id: 35,
        name: "Combo Grilled Beef Rice With BBQ Sauce",
        url: "../image/dinner/dinner_03.jpg",
        price: 10,
        type: "dinner"
    },
    {
        id: 36,
        name: "Combo Grilled Beef With Cheese Sauce",
        url: "../image/dinner/dinner_04.jpg",
        price: 10,
        type: "dinner"
    },
    {
        id: 37,
        name: "Minute Maid",
        url: "../image/drink/drink_01.jpg",
        price: 10,
        type: "drink"
    },
    {
        id: 38,
        name: "Milo",
        url: "../image/drink/drink_02.jpg",
        price: 10,
        type: "drink"
    },
    {
        id: 39,
        name: "Dasani",
        url: "../image/drink/drink_03.jpg",
        price: 10,
        type: "drink"
    },
    {
        id: 40,
        name: "Nestea",
        url: "../image/drink/drink_04.jpg",
        price: 10,
        type: "drink"
    },
]

const foodReducer = (state = initState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default foodReducer