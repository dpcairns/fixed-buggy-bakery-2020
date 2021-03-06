import bakedGoods from '../data/bakedGoods.js';
import { getCart } from '../shoppingCart/cart-api.js';

export function renderCartIcon() {
    const cart = getCart();

    let total = 0;

    for (let item of cart) {
        total = total + item.quantity;
    }

    const cartIcon = document.querySelector('#icon');

    cartIcon.textContent = `Your cart has ${total} items`;
}

export function findById(bakedGoods, someId){
    for (let i = 0; i < bakedGoods.length; i++){
        const selectedGood = bakedGoods[i];
        if (selectedGood.id === someId){
            return selectedGood;
        }
    }
    return null;
}

export function calcLineItem(quantity, price){
    const amount = quantity * price;
    return amount;
}

export function calcOrderTotal(cart, bakedGoods){
    let orderTotal = 0;

    for (let i = 0; i < cart.length; i++){
        const cartItem = cart[i];
        const bakedGood = findById(bakedGoods, cartItem.id);

        const lineTotal = calcLineItem(cartItem.quantity, bakedGood.price);
        orderTotal += lineTotal;
    }
    return orderTotal;
}


function seedProductsIntoLocalStorage(){
    const productsAlreadyExist = localStorage.getItem('bakedGoods');

    if (!productsAlreadyExist){
        localStorage.setItem('bakedGoods', JSON.stringify(bakedGoods));
    }

}

export function getBakedGoods(){
    seedProductsIntoLocalStorage();
    
    const bakedGoods = localStorage.getItem('bakedGoods');
    const parsedBakedGoods = JSON.parse(bakedGoods);

    return parsedBakedGoods;
}

